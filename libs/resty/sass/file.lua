local lib          = require "resty.sass.library"
local context      = require "resty.sass.context"
local ffi          = require "ffi"
local ffi_gc       = ffi.gc
local setmetatable = setmetatable
local rawget       = rawget
local rawset       = rawset

local file = {}

function file:__index(n)
    if n == "context" then
        local c = context.new(lib.sass_file_context_get_context(self.file_context))
        self.context = c
        return c
    else
        return rawget(self, n) or rawget(file, n)
    end
end

function file:__newindex(n, v)
    if n == "options" then
        lib.sass_file_context_set_options(self.file_context, v.context)
    else
        rawset(self, n, v)
    end
end

function file.new(input_path)
    return setmetatable({
        file_context = ffi_gc(lib.sass_make_file_context(input_path), lib.sass_delete_file_context)
    }, file)
end

function file:compile()
    lib.sass_compile_file_context(self.file_context)
end

return file