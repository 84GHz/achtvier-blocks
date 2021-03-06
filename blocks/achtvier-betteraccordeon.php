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
function achtvier_betteraccordeon_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'achtvier-betteraccordeon/index.js';
	wp_register_script(
		'achtvier-betteraccordeon-block-editor',
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

	$editor_css = 'achtvier-betteraccordeon/editor.css';
	wp_register_style(
		'achtvier-betteraccordeon-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'achtvier-betteraccordeon/style.css';
	wp_register_style(
		'achtvier-betteraccordeon-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/achtvier-betteraccordeon', array(
		'editor_script' => 'achtvier-betteraccordeon-block-editor',
		'editor_style'  => 'achtvier-betteraccordeon-block-editor',
		'style'         => 'achtvier-betteraccordeon-block',
	) );
}
add_action( 'init', 'achtvier_betteraccordeon_block_init' );
