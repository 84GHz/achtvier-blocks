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
function better_tile_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'better-tile/index.js';
	wp_register_script(
		'better-tile-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor'
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'better-tile/editor.css';
	wp_register_style(
		'better-tile-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'better-tile/style.css';
	wp_register_style(
		'better-tile-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/better-tile', array(
		'editor_script' => 'better-tile-block-editor',
		'editor_style'  => 'better-tile-block-editor',
		'style'         => 'better-tile-block',
	) );
}
add_action( 'init', 'better_tile_block_init' );
