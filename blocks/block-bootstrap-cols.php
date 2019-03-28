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
function block_bootstrap_cols_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'block-bootstrap-cols/index.js';
	wp_register_script(
		'block-bootstrap-cols-block-editor',
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

	$editor_css = 'block-bootstrap-cols/editor.css';
	wp_register_style(
		'block-bootstrap-cols-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'block-bootstrap-cols/style.css';
	wp_register_style(
		'block-bootstrap-cols-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/block-bootstrap-cols', array(
		'editor_script' => 'block-bootstrap-cols-block-editor',
		'editor_style'  => 'block-bootstrap-cols-block-editor',
		'style'         => 'block-bootstrap-cols-block',
	) );
}
add_action( 'init', 'block_bootstrap_cols_block_init' );
