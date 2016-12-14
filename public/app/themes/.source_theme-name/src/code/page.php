<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * @package  WordPress
 */

$post->post_content = wpautop($post->post_content);
$data = array(
  'post' => $post
);

$templates = array(
  'page-' . $post->post_name . '.pug',
  'page-' . $post->ID . '.pug' ,
  'page.twig'
);

Site::render( $templates, $data );
