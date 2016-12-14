<?php
/**
 * Site class
 */

class Site {

  public static $home_page_id = 2;

  function __construct () {
    // Add menus
    add_theme_support('menus');

    // Allow new mime types
    add_filter( 'upload_mimes', array( $this, 'cc_mime_types' ) );


    // Register custom post types
    add_action( 'init', array( $this, 'register_custom_post_types' ) );

    // Register custom taxonomies
    add_action( 'init', array( $this, 'register_custom_taxonomies' ) );

    // Add image sizes
    add_image_size( 'full-width-1440', 1440, 900, true );
    add_image_size( 'full-width-1024', 1024, 1024, true );
    add_image_size( 'full-width-640', 640, 640, true );

    // Add ajax callbacks
    add_action( 'init', array( $this, 'register_ajax_callbacks' ) );

    // Remove unused WP scripts
    add_action( 'init', array( $this, 'remove_useless_wordpress_scripts' ) );

    // Remove menus entries in Admin
    add_action( 'admin_menu', array( $this, 'remove_menus' ), 999 );

    // Add options page
    // $this->add_options_page();

    // Hide admin bar
    show_admin_bar(false);
  }

  /**
   * Remove unused WP scripts
   */
  function remove_useless_wordpress_scripts () {
    // Get rid off Emoji code
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    // Remove oEmbed code
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'wp_oembed_add_host_js');
  }

  /**
   * Remove menus entries
   */
  function remove_menus () {
    // remove_menu_page( 'edit.php' );
    // remove_menu_page( 'edit-comments.php' );
  }

  /**
   * Allow SVG files in WP Medias
   */
  function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }

  /**
   * Enqueue Scripts
   */
  function enqueue_scripts () {
    $theme_dir = get_template_directory_uri();
    wp_enqueue_script('main', $theme_dir . '/js/bundle.js', null, '0.0.1', true);

    $wp = array(
      'theme' => $theme_dir,
      'ajax' => array(
        'url' => admin_url('admin-ajax.php'),
        'action' => array(
        )
      ),
      'api' => get_bloginfo('url') .'/wp-json/wp/v2'
    );

    wp_localize_script('main', 'WP', $wp);
  }

  /**
   * Ajax callbacks registration
   */
  function register_ajax_callbacks () {
  }

  /**
   * Custom Post Types
   */
  function register_custom_post_types () {
  }

  /**
   * Custom Taxonomies
   */
  function register_custom_taxonomies () {
  }

  /**
   * Add Options page
   */
  function add_options_page () {
    if ( function_exists('acf_add_options_page') ) {
      acf_add_options_page();
    }
  }

  /**
   * Render pug templates
   */
  public static function render ($templates, $data) {
    global $twig;

    // Merge data
    $data = array_merge($data, self::add_to_context($data));

    if (is_array($templates)) {
      foreach ($templates as $template) {
        $template = $template;
        if (file_exists($template)) {
          $template_path = $template;
          break;
        }
      }
    }
    else {
      $template_path = $templates;
    }

    if (!isset($template_path)) {
      // throw new Exception('Unable to find template from '. join(', ', $templates) . ' .Make sure it exists in the views directory and the absolute path is correct.');
    }
    else {
      echo $twig->render($template_path, $data);
    }
  }

  private static function add_to_context ($context) {
    $body_class = get_body_class();

    $data = array(
      'body_class' => $body_class,
      'site' => array(
        'charset' => get_bloginfo('charset'),
        'description' => get_bloginfo('description'),
        'lang' => get_bloginfo('language'),
        'name' => get_bloginfo('name'),
        'pingback_url' => get_bloginfo('pingback_url'),
        'theme' => get_template_directory_uri(),
        'url' => get_bloginfo('url')
      ),
      'env' => WP_ENV,
      'nav_main' => wp_get_nav_menu_items(2)
    );

    if (function_exists('qtranxf_getLanguage')) {
      $data['lang'] = qtranxf_getLanguage();
      $data['language_switcher'] = self::generateLanguageSwitcher();
    }

    if (count($context)) {
      $context = array_merge($context, $data);
    }
    else {
      $context = $data;
    }

    return $context;
  }

  /**
   * Language Switcher generation
   */
  public static function generateLanguageSwitcher () {
    global $q_config;
    $default_language = $q_config['default_language'];
    ob_start();
      qtranxf_generateLanguageSelectCode(array(
        'type' => 'custom',
        'format' => '<span class="LanguageSwitcher-lang" data-lang="%c">%c</span>'
      ));
      $language_switcher = ob_get_contents();
    ob_end_clean();
    return $language_switcher;
  }

}
