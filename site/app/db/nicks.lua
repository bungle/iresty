local sort = table.sort
local nicks = {}

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

return nicks