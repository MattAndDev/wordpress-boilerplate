<?php

use Twig\Twig;
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem(get_template_directory() . '/templates');
$twig = new Twig_Environment($loader, array(
    'cache' =>  WP_ENV !== 'development' ? WP_CONTENT_DIR . '/cache/pug/' : null
));
