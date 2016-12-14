<?php
/**
 * The template for displaying all singles.
 *
 * @package  WordPress
 */

$data = array(
  'post' => $post
);

Timber::render( array(
  'single-' . $post->post_type . '.pug',
  'single.pug'
), $data );
