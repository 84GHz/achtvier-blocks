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
function new_accordion_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'new-accordion/index.js';
	wp_register_script(
		'new-accordion-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-data',
			'wp-editor',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'new-accordion/editor.css';
	wp_register_style(
		'new-accordion-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'new-accordion/style.css';
	wp_register_style(
		'new-accordion-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/new-accordion', array(
		'editor_script' => 'new-accordion-block-editor',
		'editor_style'  => 'new-accordion-block-editor',
		'style'         => 'new-accordion-block',
	) );
}
add_action( 'init', 'new_accordion_block_init' );
