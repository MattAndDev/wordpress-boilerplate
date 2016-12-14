<?php

// =
// Uses Timber filter to hook into the context

function add_to_context( $data ) {
  $data['assets'] = array(
    'sprite_url' => get_template_directory_uri() . '/images/sprite.svg',
    'images_url' => get_template_directory_uri() . '/images/'
  );
  $data['menu'] = new TimberMenu();
  $data['site'] = $this;
  return $data;
}

add_filter('timber_context', $this, 'add_to_context');
