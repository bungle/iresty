local open   = io.open
local cjson  = require "cjson.safe"
local ipairs = ipairs
local pairs  = pairs
local sub    = string.sub
local gsub   = string.gsub
local decode = cjson.decode
local encode = cjson.encode
local null   = cjson.null
local root   = ngx.var.root
local find   = string.find
local trans  = {}
local autoc  = {}
local i = 0

do
    local f = open(root .. "/data/emojis.json", "r")
    local emojis = decode(f:read("*all"))
    f:close()
    local keys = emojis.keys

    for _, k in ipairs(keys) do
        local e = emojis[k]
        if e and e.char ~= null then
            i = i + 1
            local v = ":" .. k .. ":"
            trans[v] = e.char
            autoc[i] = {
                title = v,
                value = e.char,
                text = k,
                url = "#"
            }

        end
    end
end

local autoe = encode(autoc)

local function replace(s)
    local trans, gsub = trans, gsub
    for k, v in pairs(trans) do
        s = gsub(s, k, v)
    end
    return s
end

local function autocomplete(search, limit)
    if search == nil then
        return autoe
    end
    local z = 1
    local p = find(search, ":", 1, true)
    if not p then
        return "[]"
    end
    while p do
        z = p
        p = find(search, ":", p + 1, true)
    end
    search = sub(search, z)
    local s = #search
    local r = {}
    local k = 0
    for j = 1, i, 1 do
        local a = autoc[j]
        if sub(a.title, 1, s) == search then
            k = k + 1
            r[k] = a
            if k == limit then
                break;
            end
        end
    end
    return encode(r)
end

return {
    replace = replace,
    autocomplete = autocomplete
}