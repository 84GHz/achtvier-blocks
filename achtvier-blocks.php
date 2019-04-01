<?php
/**
 * Plugin Name:     Achtvier Blocks
 * Description:     One plugin to rule them all, One plugin to find them,One plugin to bring them all and in the darkness bind them
 * Author:          84ghz
 * Author URI:      https://84ghz.de
 * Text Domain:     achtvier-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
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

include_once( plugin_dir_path( __FILE__ ) . 'blocks/achtvier-betteraccordeon.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/achtvier-bettertabs.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/bar-counter.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/better-tile.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/overlay-tile.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/one-fifth-col.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/focuspoint-image.php');
include_once( plugin_dir_path( __FILE__ ) . 'blocks/avsection.php');
