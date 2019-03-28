<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package achtvier-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function focuspoint_image_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'focuspoint-image/index.js';
	wp_register_script(
		'focuspoint-image-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'focuspoint-image/editor.css';
	wp_register_style(
		'focuspoint-image-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'focuspoint-image/style.css';
	wp_register_style(
		'focuspoint-image-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/focuspoint-image', array(
		'editor_script' => 'focuspoint-image-block-editor',
		'editor_style'  => 'focuspoint-image-block-editor',
		'style'         => 'focuspoint-image-block',
	) );
}
add_action( 'init', 'focuspoint_image_block_init' );

add_action('wp_enqueue_scripts','focuspunkt_image_init');

function focuspunkt_image_init() {
    wp_enqueue_script( 'focuspoint-image-js', plugins_url( 'focuspoint-image/assets/js/focuspoint.min.js', __FILE__ ), 'jquery');
    wp_enqueue_script( 'focuspoint-init-js', plugins_url( 'focuspoint-image/assets/js/focuspoint-init.js', __FILE__ ), 'jquery');
}
