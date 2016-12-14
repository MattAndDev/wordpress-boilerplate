<?php

  // =
  // Includes all files in directory, recursively
  // pass a basepath if you need to require a relative path

  function include_all_files_recursively ($dir) {
    $path = get_template_directory() . $dir;
    $Directory = new RecursiveDirectoryIterator($path);
    $Iterator = new RecursiveIteratorIterator($Directory);
    $files = array();
    foreach ($Iterator as $info) {
      if (is_file($info->getPathname())) {
        array_push($files, $info->getPathname());
      }
    }
    foreach ($files as $file) {
      require_once($file);
    }
  }
