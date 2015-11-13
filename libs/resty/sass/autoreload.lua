local modified = require "resty.sass.modified"
local ngx = ngx
local sub = string.sub
local out = ngx.var.request_filename
local len = #out
local inp = (sub(out, len - 2) == "map" and sub(out, 1, len - 7) or sub(out, 1, len - 3)) .. "scss"
local mod = modified(inp)
if mod == true then
    return ngx.exec("@sass")
elseif mod == nil then
    return ngx.exit(ngx.HTTP_NOT_FOUND)
end
