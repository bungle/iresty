local route        = require "resty.route".new()
local validate     = require "app.validate".chat.join
local nicks        = require "app.db".nicks
local autocomplete = require "app.emojis".autocomplete

route:use "ajax"
route:use "pjax"
route:use "form"
route:use "redis" {}
route:use "reqargs" {}
route:use "template"

route:get("=/", function(self)
    self:render "chat/join.html"
end)

route:post("=/", function(self)
    local valid, form, _ = validate(self.post)
    if valid then
        local nick, e = nicks.register(self.redis, form.nick.value)
        if not nick then self:error(e) end
        local nicks, e = nicks.all(self.redis)
        if not nicks then self:error(e) end
        self.nick = nick
        self.nicks = nicks
        self:render "chat/channel.html"
    else
        self.form = form
        self:to "/"
    end
end)

route:websocket "=/" "app.chat"

route:get("=/emojis.json", function(self)
    self:json(autocomplete())
end)

route:post("=/emojis.json", function(self)
    self:json(autocomplete(self.post.search, 5))
end)

route:dispatch()