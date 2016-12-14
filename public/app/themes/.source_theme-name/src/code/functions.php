<?php

// =
// Autoloader for directories helper, use with care
// exposes the include_all_files_recursively function

require_once(get_template_directory() . '/inc/utilities/include_all_files_recursively.php');

// =
// Load all Timber

include_all_files_recursively('/inc/timber');

// =
// Load all data-model

include_all_files_recursively('/inc/timber');
