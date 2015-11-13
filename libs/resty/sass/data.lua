local lib          = require "resty.sass.library"
local context      = require "resty.sass.context"
local ffi          = require "ffi"
local C            = ffi.C
local ffi_copy     = ffi.copy
local ffi_sizeof   = ffi.sizeof
local char_s       = ffi_sizeof "char"
local setmetatable = setmetatable
local rawget       = rawget
local rawset       = rawset

local data = {}

function data:__index(n)
    if n == "context" then
        local c = context.new(lib.sass_data_context_get_context(self.data_context))
        self.context = c
        return c
    else
        return rawget(self, n) or rawget(data, n)
    end
end

function data:__newindex(n, v)
    if n == "options" then
        lib.sass_data_context_set_options(self.data_context, v.context)
    else
        rawset(self, n, v)
    end
end

function data.new(input)
    local l = #input + 1
    local s = C.malloc(l * char_s)
    ffi_copy(s, input .. "\0", l)
    return setmetatable({
        data_context = lib.sass_make_data_context(s)
    }, data)
end

function data:compile()
    lib.sass_compile_data_context(self.data_context)
end

return data