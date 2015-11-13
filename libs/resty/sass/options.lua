local lib          = require "resty.sass.library"
local ffi          = require "ffi"
local ffi_str      = ffi.string
local setmetatable = setmetatable
local tonumber     = tonumber
local rawget       = rawget
local rawset       = rawset

local options = {}

function options:__index(n)
    if n == "precision" then
        return lib.sass_option_get_precision(self.context)
    elseif n == "output_style" then
        return tonumber(lib.sass_option_get_output_style(self.context))
    elseif n == "source_comments" then
        return lib.sass_option_get_source_comments(self.context)
    elseif n == "source_map_embed" then
        return lib.sass_option_get_source_map_embed(self.context)
    elseif n == "source_map_contents" then
        return lib.sass_option_get_source_map_contents(self.context)
    elseif n == "omit_source_map_url" then
        return lib.sass_option_get_omit_source_map_url(self.context)
    elseif n == "is_indented_syntax_src" then
        return lib.sass_option_get_is_indented_syntax_src(self.context)
    elseif n == "indent" then
        local s = lib.sass_option_get_indent(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "linefeed" then
        local s = lib.sass_option_get_linefeed(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "input_path" then
        local s = lib.sass_option_get_input_path(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "output_path" then
        local s = lib.sass_option_get_output_path(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "plugin_path" then
        local s = lib.sass_option_get_plugin_path(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "include_path" then
        local s = lib.sass_option_get_include_path(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "source_map_file" then
        local s = lib.sass_option_get_source_map_file(self.context)
        return s ~= nil and ffi_str(s) or nil
    elseif n == "source_map_root" then
        local s = lib.sass_option_get_source_map_root(self.context)
        return s ~= nil and ffi_str(s) or nil
    else
        return rawget(self, n) or rawget(options, n)
    end
end

function options:__newindex(n, v)
    if n == "precision" then
        lib.sass_option_set_precision(self.context, v)
    elseif n == "output_style" then
        lib.sass_option_set_output_style(self.context, v)
    elseif n == "source_comments" then
        lib.sass_option_set_source_comments(self.context, v)
    elseif n == "source_map_embed" then
        lib.sass_option_set_source_map_embed(self.context, v)
    elseif n == "source_map_contents" then
        lib.sass_option_set_source_map_contents(self.context, v)
    elseif n == "omit_source_map_url" then
        lib.sass_option_set_omit_source_map_url(self.context, v)
    elseif n == "is_indented_syntax_src" then
        lib.sass_option_set_is_indented_syntax_src(self.context, v)
    elseif n == "indent" then
        lib.sass_option_set_indent(self.context, v)
    elseif n == "linefeed" then
        lib.sass_option_set_linefeed(self.context, v)
    elseif n == "input_path" then
        lib.sass_option_set_input_path(self.context, v)
    elseif n == "output_path" then
        lib.sass_option_set_output_path(self.context, v)
    elseif n == "plugin_path" then
        lib.sass_option_set_plugin_path(self.context, v)
    elseif n == "include_path" then
        lib.sass_option_set_include_path(self.context, v)
    elseif n == "source_map_file" then
        lib.sass_option_set_source_map_file(self.context, v)
    elseif n == "source_map_root" then
        lib.sass_option_set_source_map_root(self.context, v)    
    else
        rawset(self, n, v)
    end
end

function options.new()
    return setmetatable({ context = lib.sass_make_options() }, options)
end

return options