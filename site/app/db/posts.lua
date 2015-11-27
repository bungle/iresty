local encode = require "cjson.safe".encode
local decode = require "cjson.safe".decode

local posts = {}

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

return posts