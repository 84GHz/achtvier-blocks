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
function one_fifth_col_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'one-fifth-col/index.js';
	wp_register_script(
		'one-fifth-col-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'one-fifth-col/editor.css';
	wp_register_style(
		'one-fifth-col-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'one-fifth-col/style.css';
	wp_register_style(
		'one-fifth-col-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/one-fifth-col', array(
		'editor_script' => 'one-fifth-col-block-editor',
		'editor_style'  => 'one-fifth-col-block-editor',
		'style'         => 'one-fifth-col-block',
	) );
}
add_action( 'init', 'one_fifth_col_block_init' );
