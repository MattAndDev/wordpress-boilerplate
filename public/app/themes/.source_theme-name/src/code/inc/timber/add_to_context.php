<?php

// =
// Uses Timber filter to hook into the context

function add_to_context( $data ) {

  // assets location
  $data['assets'] = array(
    'sprite_url' => get_template_directory_uri() . '/assets/images/sprite.svg',
    'images_url' => get_template_directory_uri() . '/assets/images/'
  );

  // pass default menu
  $data['menu'] = new TimberMenu();

  // site data
  $data['site'] = array(
    'charset' => get_bloginfo('charset'),
    'description' => get_bloginfo('description'),
    'env' => WP_ENV,
    'lang' => get_bloginfo('language'),
    'name' => get_bloginfo('name'),
    'pingback_url' => get_bloginfo('pingback_url'),
    'theme' => get_template_directory_uri(),
    'url' => get_bloginfo('url')
  );

  return $data;

}

add_filter('timber_context', 'add_to_context');
