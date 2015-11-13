local ffi      = require "ffi"
local ffi_cdef = ffi.cdef
local ffi_load = ffi.load

ffi_cdef[[
enum Sass_Output_Style {
    SASS_STYLE_NESTED,
    SASS_STYLE_EXPANDED,
    SASS_STYLE_COMPACT,
    SASS_STYLE_COMPRESSED
};
enum Sass_Compiler_State {
    SASS_COMPILER_CREATED,
    SASS_COMPILER_PARSED,
    SASS_COMPILER_EXECUTED
};
struct Sass_Compiler;
struct Sass_Options;
struct Sass_Context;
struct Sass_File_Context;
struct Sass_Data_Context;
struct Sass_Import;
struct Sass_Options;
struct Sass_Compiler;
struct Sass_Importer;
struct Sass_Function;
typedef struct Sass_Import(*Sass_Import_Entry);
typedef struct Sass_Import*(*Sass_Import_List);
typedef struct Sass_Importer(*Sass_Importer_Entry);
typedef struct Sass_Importer*(*Sass_Importer_List);
typedef Sass_Import_List(*Sass_Importer_Fn)(const char* url, Sass_Importer_Entry cb, struct Sass_Compiler* compiler);
typedef struct Sass_Function(*Sass_Function_Entry);
typedef struct Sass_Function*(*Sass_Function_List);
typedef union Sass_Value*(*Sass_Function_Fn)(const union Sass_Value*, Sass_Function_Entry cb, struct Sass_Compiler* compiler);
char* sass_string_quote(const char* str, const char quote_mark);
char* sass_string_unquote(const char* str);
char* sass_resolve_file(const char* path, const char* incs[]);
const char* libsass_version(void);
struct Sass_Options* sass_make_options(void);
struct Sass_File_Context* sass_make_file_context(const char* input_path);
struct Sass_Data_Context* sass_make_data_context(char* source_string);
int sass_compile_file_context(struct Sass_File_Context* ctx);
int sass_compile_data_context(struct Sass_Data_Context* ctx);
struct Sass_Compiler* sass_make_file_compiler(struct Sass_File_Context* file_ctx);
struct Sass_Compiler* sass_make_data_compiler(struct Sass_Data_Context* data_ctx);
int sass_compiler_parse(struct Sass_Compiler* compiler);
int sass_compiler_execute(struct Sass_Compiler* compiler);
void sass_delete_compiler(struct Sass_Compiler* compiler);
void sass_delete_file_context(struct Sass_File_Context* ctx);
void sass_delete_data_context(struct Sass_Data_Context* ctx);
struct Sass_Context* sass_file_context_get_context(struct Sass_File_Context* file_ctx);
struct Sass_Context* sass_data_context_get_context(struct Sass_Data_Context* data_ctx);
struct Sass_Options* sass_context_get_options(struct Sass_Context* ctx);
struct Sass_Options* sass_file_context_get_options(struct Sass_File_Context* file_ctx);
struct Sass_Options* sass_data_context_get_options(struct Sass_Data_Context* data_ctx);
void sass_file_context_set_options(struct Sass_File_Context* file_ctx, struct Sass_Options* opt);
void sass_data_context_set_options(struct Sass_Data_Context* data_ctx, struct Sass_Options* opt);
int sass_option_get_precision(struct Sass_Options* options);
enum Sass_Output_Style sass_option_get_output_style(struct Sass_Options* options);
bool sass_option_get_source_comments(struct Sass_Options* options);
bool sass_option_get_source_map_embed(struct Sass_Options* options);
bool sass_option_get_source_map_contents(struct Sass_Options* options);
bool sass_option_get_omit_source_map_url(struct Sass_Options* options);
bool sass_option_get_is_indented_syntax_src(struct Sass_Options* options);
const char* sass_option_get_indent(struct Sass_Options* options);
const char* sass_option_get_linefeed(struct Sass_Options* options);
const char* sass_option_get_input_path(struct Sass_Options* options);
const char* sass_option_get_output_path(struct Sass_Options* options);
const char* sass_option_get_plugin_path(struct Sass_Options* options);
const char* sass_option_get_include_path(struct Sass_Options* options);
const char* sass_option_get_source_map_file(struct Sass_Options* options);
const char* sass_option_get_source_map_root(struct Sass_Options* options);
Sass_Importer_List sass_option_get_c_headers(struct Sass_Options* options);
Sass_Importer_List sass_option_get_c_importers(struct Sass_Options* options);
Sass_Function_List sass_option_get_c_functions(struct Sass_Options* options);
void sass_option_set_precision(struct Sass_Options* options, int precision);
void sass_option_set_output_style(struct Sass_Options* options, enum Sass_Output_Style output_style);
void sass_option_set_source_comments(struct Sass_Options* options, bool source_comments);
void sass_option_set_source_map_embed(struct Sass_Options* options, bool source_map_embed);
void sass_option_set_source_map_contents(struct Sass_Options* options, bool source_map_contents);
void sass_option_set_omit_source_map_url(struct Sass_Options* options, bool omit_source_map_url);
void sass_option_set_is_indented_syntax_src(struct Sass_Options* options, bool is_indented_syntax_src);
void sass_option_set_indent(struct Sass_Options* options, const char* indent);
void sass_option_set_linefeed(struct Sass_Options* options, const char* linefeed);
void sass_option_set_input_path(struct Sass_Options* options, const char* input_path);
void sass_option_set_output_path(struct Sass_Options* options, const char* output_path);
void sass_option_set_plugin_path(struct Sass_Options* options, const char* plugin_path);
void sass_option_set_include_path(struct Sass_Options* options, const char* include_path);
void sass_option_set_source_map_file(struct Sass_Options* options, const char* source_map_file);
void sass_option_set_source_map_root(struct Sass_Options* options, const char* source_map_root);
void sass_option_set_c_headers(struct Sass_Options* options, Sass_Importer_List c_headers);
void sass_option_set_c_importers(struct Sass_Options* options, Sass_Importer_List c_importers);
void sass_option_set_c_functions(struct Sass_Options* options, Sass_Function_List c_functions);
const char* sass_context_get_output_string(struct Sass_Context* ctx);
int sass_context_get_error_status(struct Sass_Context* ctx);
const char* sass_context_get_error_json(struct Sass_Context* ctx);
const char* sass_context_get_error_text(struct Sass_Context* ctx);
const char* sass_context_get_error_message(struct Sass_Context* ctx);
const char* sass_context_get_error_file(struct Sass_Context* ctx);
const char* sass_context_get_error_src(struct Sass_Context* ctx);
size_t sass_context_get_error_line(struct Sass_Context* ctx);
size_t sass_context_get_error_column(struct Sass_Context* ctx);
const char* sass_context_get_source_map_string(struct Sass_Context* ctx);
char** sass_context_get_included_files(struct Sass_Context* ctx);
size_t sass_context_get_included_files_size(struct Sass_Context* ctx);
char* sass_context_take_error_json(struct Sass_Context* ctx);
char* sass_context_take_error_text(struct Sass_Context* ctx);
char* sass_context_take_error_message(struct Sass_Context* ctx);
char* sass_context_take_error_file(struct Sass_Context* ctx);
char* sass_context_take_output_string(struct Sass_Context* ctx);
char* sass_context_take_source_map_string(struct Sass_Context* ctx);
char** sass_context_take_included_files(struct Sass_Context* ctx);
enum Sass_Compiler_State sass_compiler_get_state(struct Sass_Compiler* compiler);
struct Sass_Context* sass_compiler_get_context(struct Sass_Compiler* compiler);
struct Sass_Options* sass_compiler_get_options(struct Sass_Compiler* compiler);
size_t sass_compiler_get_import_stack_size(struct Sass_Compiler* compiler);
Sass_Import_Entry sass_compiler_get_last_import(struct Sass_Compiler* compiler);
Sass_Import_Entry sass_compiler_get_import_entry(struct Sass_Compiler* compiler, size_t idx);
void sass_option_push_plugin_path(struct Sass_Options* options, const char* path);
void sass_option_push_include_path(struct Sass_Options* options, const char* path);
char* sass2scss(const char* sass, const int options);
const char* sass2scss_version(void);
void* malloc(size_t size);
]]

return ffi_load "sass"
