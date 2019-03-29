<?php
/**
 * Plugin Name:     Achtvier Blocks
 * Description:     One plugin to rule them all, One plugin to find them,One plugin to bring them all and in the darkness bind them
 * Author:          84ghz
 * Author URI:      https://84ghz.de
 * Text Domain:     achtvier-blocks
 * Domain Path:     /languages
 * Version:         0.2.0
 *
 * @package         Achtvier_Blocks
 */

// Your code starts here.

add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'achtvier-blocks',
				'title' => __( 'Achtvier', 'achtvier-blocks' ),
			),
		)
	);
}, 10, 2 );

//plugin update checker
require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/84GHz/achtvier-blocks/',
	__FILE__,
	'achtvier-blocks'
);



include_once( plugin_dir_path( __FILE__ ) . 'blocks/achtvier-betteraccordeon.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/mini-content.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/achtvier-bettertabs.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/bar-counter.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/better-tile.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/overlay-tile.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/one-fifth-col.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/new-accordion.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/new-newsticker.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/focuspoint-image.php');
