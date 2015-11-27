local route        = require "resty.route".new()
local validate     = require "app.validate"
local chat         = require "app.chat"
local db           = require "app.db"
local autocomplete = require "app.emojis".autocomplete

route:use "ajax"
route:use "pjax"
route:use "form"
route:use "redis" {}
route:use "reqargs" {}
route:use "template"

route:with "equals"

route:get("/", function(self)
    self:render "chat/join.html"
end)

route:post("/", function(self)
    local context = self.context
    local redis = context.redis
    local valid, form, _ = validate.chat.join(context.post)
    if valid then
        local nick, e = db.nicks.register(redis, form.nick.value)
        if not nick then self:error(e) end
        local nicks, e = db.nicks.all(redis)
        if not nicks then self:error(e) end
        context.nick = nick
        context.nicks = nicks
        self:render "chat/channel.html"
    else
        context.form = form
        self:to "/"
    end
end)

route:websocket "/" {
    connect = chat.connect,
    closing = chat.closing,
    text    = chat.text
}

route:get("/emojis.json", function(self)
    self:json(autocomplete())
end)

route:post("/emojis.json", function(self)
    self:json(autocomplete(self.context.post.search, 5))
end)

route:dispatch()