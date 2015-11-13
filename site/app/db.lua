local encode = require "cjson.safe".encode
local decode = require "cjson.safe".decode
local sort = table.sort
local nicks = {}
local posts = {}

function nicks.register(redis, nick)
    local o, e = redis:sadd("chat:nicks", nick)
    if not o then return nil, e end
    if o == 1 then
        return nick
    end
    local i = 1
    while true do
        local n = nick .. "-" .. i
        o, e = redis:sadd("chat:nicks", n)
        if not o then return nil, e end
        if o == 1 then
            return n
        end
        i = i + 1
    end
end

function nicks.delete(redis, nick)
    return redis:srem("chat:nicks", nick)
end

function nicks.all(redis)
    local o, e = redis:smembers("chat:nicks")
    if o then sort(o) end
    return o, e
end

function posts.store(redis, m)
    redis:lpush("chat:messages", encode(m))
end

function posts.last(redis, count)
    local r, e = redis:lrange("chat:messages", 0, count)
    if not r then
        return nil, e
    end
    local s = #r
    if count > s then
        count = s
    end
    local x = {}
    for i = 1, count, 1 do
        x[count - i + 1] = decode(r[i])
    end
    return x
end

return {
    nicks = nicks,
    posts = posts
}