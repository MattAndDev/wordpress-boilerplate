<?php
/**
 * The template for displaying all singles.
 *
 * @package  WordPress
 */

$data = array(
  'post' => $post
);

Site::render( array(
  'single-' . $post->post_type . '.pug',
  'single.pug'
), $data );
