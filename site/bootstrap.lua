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

route:get("/", function(route)
    route:render "chat/join.html"
end)

route:post("/", function(route)
    local context = route.context
    local redis = context.redis
    local valid, form, _ = validate.chat.join(context.post)
    if valid then
        local nick, e = db.nicks.register(redis, form.nick.value)
        if not nick then route:error(e) end
        local nicks, e = db.nicks.all(redis)
        if not nicks then route:error(e) end
        context.nick = nick
        context.nicks = nicks
        route:render "chat/channel.html"
    else
        context.form = form
        route:to "/"
    end
end)

route:websocket "/" {
    connect = chat.connect,
    closing = chat.closing,
    text    = chat.text
}

route:get("/emojis.json", function(route)
    route:json(autocomplete())
end)

route:post("/emojis.json", function(route)
    route:json(autocomplete(route.context.post.search, 5))
end)

route:dispatch()