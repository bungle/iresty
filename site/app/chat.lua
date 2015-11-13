local decode = require "cjson.safe".decode
local encode = require "cjson.safe".encode
local redis  = require "resty.redis"
local emojis = require "app.emojis".replace
local db     = require "app.db"
local ntime  = ngx.time
local htime  = ngx.http_time
local chat   = {}

local function time()
    return htime(ntime())
end

function chat:connect()
    self.redis = self.context.redis
    self:spawn(chat.subscribe, self)
end

function chat:subscribe()
    local r, e = redis:new()
    if not r then
        return self:error(e)
    end
    local o, e = r:connect("127.0.0.1", 6379)
    if not o then
        return self:error(e)
    end
    local o, e = r:subscribe "chat"
    if not o then
        return self:error(e)
    end
    local d, e = r:read_reply()
    while not e or e == "timeout" do
        if d then
            self:send(d[3])
        end
        d, e = r:read_reply()
    end
    return self:error(e)
end

function chat:text(message)
    local r = self.redis
    local m = decode(message)
    if m and m.type then
        m.time = time()
        if m.type == "post" then
            m.post = emojis(m.post)
            db.posts.store(r, m)
        elseif m.type == "join" then
            self.nick = m.nick
            self:send(encode{
                type  = "nicks",
                nicks = db.nicks.all(self.redis)
            })
            local posts = db.posts.last(self.redis, 10)
            if #posts > 0 then
                self:send(encode{
                    type  = "posts",
                    posts = posts
                })
            end
        elseif m.type == "part" then
            return
        end
        self.redis:publish("chat", encode(m))
    end
end

function chat:closing()
    local nick = self.nick
    if nick then
        db.nicks.delete(self.redis, nick)
        self.redis:publish("chat", encode{
            time = time(),
            type = "part",
            nick = nick
        })
    end
end

return chat