local lib          = require "resty.sass.library"
local ffi          = require "ffi"
local ffi_str      = ffi.string
local setmetatable = setmetatable
local rawget       = rawget

local context = {}

function context:__index(n)
    if n == "error_status" then
        return lib.sass_context_get_error_status(self.context)
    elseif n == "error_message" then
        local s = lib.sass_context_get_error_message(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "error_json" then
        local s = lib.sass_context_get_error_json(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "error_text" then
        local s = lib.sass_context_get_error_text(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "error_file" then
        local s = lib.sass_context_get_error_file(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "error_line" then
        return lib.sass_context_get_error_line(self.context)
    elseif n == "error_column" then
        return lib.sass_context_get_error_column(self.context)
    elseif n == "output_string" then
        local s = lib.sass_context_get_output_string(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "source_map_string" then
        local s = lib.sass_context_get_source_map_string(self.context)
        return s ~= nil and ffi_str(s) or nil
    else
        return rawget(self, n) or rawget(context, n)
    end
end

function context.new(ctx)
    return setmetatable({
        context = ctx
    }, context)
end

return context