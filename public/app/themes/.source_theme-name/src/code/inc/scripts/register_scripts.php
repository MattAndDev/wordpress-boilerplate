<?php

// =
// Add scripts the wordpress way (in footer)

function register_scripts() {

  // pass wp data to the scripts
  $wp_data = array(
    'theme' => get_template_directory_uri(),
    'ajax' => array(
      'url' => admin_url( 'admin-ajax.php' )
    )
  );

  // register scripts
  // as 'handle' => 'path'
  $scripts = array(
    'main' => '/js/main.js'
  );

  // register all scripts
  foreach ($scripts as $handle => $path) {
    wp_enqueue_script($handle, get_template_directory_uri().$path, array(),'1.0.0', false);
    wp_localize_script($handle, 'WP', $wp_data);
  }
}

add_action('wp_enqueue_scripts', 'register_scripts');
