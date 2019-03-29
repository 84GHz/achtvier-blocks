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
function icon_counter_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'icon-counter/index.js';
	wp_register_script(
		'icon-counter-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'icon-counter/editor.css';
	wp_register_style(
		'icon-counter-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'icon-counter/style.css';
	wp_register_style(
		'icon-counter-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/icon-counter', array(
		'editor_script' => 'icon-counter-block-editor',
		'editor_style'  => 'icon-counter-block-editor',
		'style'         => 'icon-counter-block',
	) );
}
add_action( 'init', 'icon_counter_block_init' );
function icon_counter_launch() {
    wp_enqueue_script( 'icon-counter-launch', plugins_url('/icon-counter/assets/icon-counter-launch.js', __FILE__), array('jquery')  );
		//d(plugins_url('/blocks/bar-counter/assets/counter-launch.js', __FILE__));

}
add_action('init', 'icon_counter_launch');
