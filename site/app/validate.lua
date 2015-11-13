local v = require "resty.validation"

local nick = v.string.trim:len(2, 10)

return {
    nick = nick,
    chat = {
        join = v.new{
            nick = nick
        }
    }
}
