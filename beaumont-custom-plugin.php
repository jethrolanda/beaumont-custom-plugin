<?php
/**
 * Plugin Name: Beaumont Custom Plugin
 * Description: Responsible for loading styles and scripts used from old beaumonthotel.com. Ex. datepicker, magnific, lazysizes, leaflet, random testimonial shortcode
 * Version: 1.0
 * Author: Jethro Landa
 * Author URI: https://jethrolanda.com/
 * Text Domain: beaumont-custom-plugin
 * Domain Path: /languages/
 * Requires at least: 5.7
 * Requires PHP: 7.2
 */

defined('ABSPATH') || exit;

define( 'CUSTOM_PLUGIN_URL', plugins_url() . '/beaumont-custom-plugin/' );
define( 'CUSTOM_JS_ROOT_URL', CUSTOM_PLUGIN_URL . 'js/' );

function load_front_end_styles_and_scripts() {

  global $post;

  // Datepicker
  wp_enqueue_script( 'jquery-ui-datepicker' ); 
  wp_register_style( 'jquery-ui-css-oxygen', '//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css' );
  wp_enqueue_style( 'jquery-ui-css-oxygen' );  

  // Magnefic
  wp_enqueue_style('magnific-style', CUSTOM_JS_ROOT_URL . 'magnific/magnific.css');
  wp_enqueue_script('magnific-script', CUSTOM_JS_ROOT_URL . 'magnific/jquery.magnific.js', array(), '1.0.0', true);

  // Lazysizes
  wp_enqueue_script('lazysizes-script', CUSTOM_JS_ROOT_URL . 'lazysizes/lazysizes.min.js', array(), '1.0.0', true);
  
  // Leaflet
  if($post && $post->ID == '50') {
    wp_enqueue_style('leaflet-style', 'https://unpkg.com/leaflet@1.3.3/dist/leaflet.css');
    wp_enqueue_style('leaflet-gesture-handling-style', 'https://unpkg.com/leaflet-gesture-handling@1.2.2/dist/leaflet-gesture-handling.min.css');
    wp_register_script('leaflet-script', 'https://unpkg.com/leaflet@1.3.3/dist/leaflet.js');
    wp_register_script('leaflet-unwired-script', 'https://tiles.unwiredmaps.com/js/leaflet-unwired.js');
    wp_register_script('leaflet-gesture-handling-script', 'https://unpkg.com/leaflet-gesture-handling@1.2.2/dist/leaflet-gesture-handling.min.js');
  
    wp_enqueue_style('leaflet-script');
    wp_enqueue_style('leaflet-unwired-script');
    wp_enqueue_style('leaflet-gesture-handling-script');
    
    wp_enqueue_script('leaflet-custom-script', CUSTOM_JS_ROOT_URL . 'leaflet/custom.js', array('leaflet-script', 'leaflet-unwired-script', 'leaflet-gesture-handling-script'), '1.0.0', true);
  }
  
}

add_action('wp_enqueue_scripts', 'load_front_end_styles_and_scripts');

// Display Random Testimonial
function random_testimonial() { 

  $testimonials = array(
    array(
      'text' => 'The owners have done a world-class job restoring this hotel and they continue to maintain it. The rooms are stunning and immaculate. It is like spending the night in a (really comfortable) museum...When we checked in they told us they just found out they were awarded a 2013 Conde Naste Gold award. Not surprising. AND it is just not that expensive for the awesome quality.',
      'sender' => 'MDDive. Bethesda, Maryland'
    ),
    array(
      'text' => 'Down to the last detail, EVERYTHING at the Beaumont is exquisite! The chocolate squares waiting for you in your room, a journal in which to write about your stay in your room, plush robes for the spa in your room, a private hot tub/sauna available to guest, heavenly message therapy give by their own message technicians, excellent service...42 inch TV in the room WITH DVD PLAYER...5 stars out of 5. 11 on a scale of 10!',
      'sender' => 'Steve R. Montrose, Colorado'
    ),
    array(
      'text' => 'We have stayed at the Beaumont many times and it is always a wonderful experience. The hotel has been beautifully restored. It has a very relaxing and peaceful ambiance. The town of Ouray is a beautiful historic western town. When you stay at the Beamont and look out at the town, you feel like you have went back in time!',
      'sender' => 'Kathy V. Durango, Colorado'
    ),
    array(
      'text' => 'I absolutely loved it. I have stayed at the Beaumont many times over the years since 2004 and regardless of the room that I\'ve stayed in, it\'s been a delight. Service is impeccable. I will continue to stay here for years to come. Ouray is an incredible destination with many options: hiking, biking, jeeping, etc',
      'sender' => 'Ellen Spokane, Washington'
    ),
    array(
      'text' => 'My husband and I spent 2 wonderful evenings at the Beaumont hotel & spa in Ouray, Colorado...Immediately the Beaumont captured our hearts with it\'s gorgeous antiques and charming staff. The building itself is impressive and lovingly restored. Our room on the 2nd floor was beautiful. High-end sheets, towels and bath products all add to the "special" and luxe feeling.',
      'sender' => 'Annette Sandy, Utah'
    )
  );

  $random_testimonial = rand(0, 4); 
  ob_start(); ?>

  <div id="random-testimonial">
    <?php echo $testimonials[$random_testimonial]['text']; ?>
  </div>
  <div id="testimonial-sender"><?php echo $testimonials[$random_testimonial]['sender']; ?></div><?php
  $content = ob_get_clean();
  return $content;
}

add_shortcode('random_testimonial', 'random_testimonial'); 