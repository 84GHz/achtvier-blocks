<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package achtvier-blocks
 */

 /**
  * Renders the `achtvier-blocks/beitraege` block on server.
  *
  * @param array $attributes The block attributes.
  *
  * @return string Returns the post content with latest posts added.
  */
 function render_achtvier_beitraege( $attributes ) {
 	$args = array(
 		'numberposts' => $attributes['postsToShow'],
 		'post_status' => 'publish',
 		'order'       => $attributes['order'],
 		'orderby'     => $attributes['orderBy'],
    'teaser_length' => $attributes['teaserLength'],
 	);
 	if ( isset( $attributes['categories'] ) ) {
 		$args['category'] = $attributes['categories'];
 	}

 	$recent_posts = wp_get_recent_posts( $args );
 	$list_items_markup = '';
 	foreach ( $recent_posts as $post ) {
 		$post_id = $post['ID'];
 		$title = get_the_title( $post_id );
    $excerpt = get_the_excerpt( $args['teaser_length'] );
 		if ( ! $title ) {
 			$title = __( '(Untitled)' );
 		}
 		$list_items_markup .= sprintf(
 			'<div class = "achtvier-beitrag-header"><a href="%1$s">%2$s</a>',
 			esc_url( get_permalink( $post_id ) ),
 			esc_html( $title )
 		);
 		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
 			$list_items_markup .= sprintf(
 				'<time datetime="%1$s" class="wp-block-latest-posts__post-date">%2$s</time>',
 				esc_attr( get_the_date( 'c', $post_id ) ),
 				esc_html( get_the_date( '', $post_id ) )
 			);
 		}

 		$list_items_markup .= "</div>\n";
    $list_items_markup .= sprintf(
 			'<div class = "achtvier-beitrag-body">%1$s</div>',
 			esc_html( $excerpt )
 		);
 	}
 	$class = 'achtvier-blocks-beitraege';
 	if ( isset( $attributes['align'] ) ) {
 		$class .= ' align' . $attributes['align'];
 	}
 	if ( isset( $attributes['postLayout'] ) && 'grid' === $attributes['postLayout'] ) {
 		$class .= ' is-grid';
 	}
 	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
 		$class .= ' columns-' . $attributes['columns'];
 	}
 	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
 		$class .= ' has-dates';
 	}
 	if ( isset( $attributes['className'] ) ) {
 		$class .= ' ' . $attributes['className'];
 	}
 	$block_content = sprintf(
 		'<div class="%1$s">%2$s</div>',
 		esc_attr( $class ),
 		$list_items_markup
 	);
 	return $block_content;
 }


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function achtvier_beitraege_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'achtvier-beitraege/index.js';
	wp_register_script(
		'achtvier-beitraege-block-editor',
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

	$editor_css = 'achtvier-beitraege/editor.css';
	wp_register_style(
		'achtvier-beitraege-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'achtvier-beitraege/style.css';
	wp_register_style(
		'achtvier-beitraege-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/achtvier-beitraege', array(
		'editor_script' => 'achtvier-beitraege-block-editor',
		'editor_style'  => 'achtvier-beitraege-block-editor',
		'style'         => 'achtvier-beitraege-block',
		'attributes'      => array(
	'categories'      => array(
		'type' => 'string',
	),
	'className'       => array(
		'type' => 'string',
	),
	'postsToShow'     => array(
		'type'    => 'number',
		'default' => 5,
	),
	'displayPostDate' => array(
		'type'    => 'boolean',
		'default' => false,
	),
  'teaserLength'     => array(
		'type'    => 'number',
		'default' => 70,
	),	
	'order'           => array(
		'type'    => 'string',
		'default' => 'desc',
	),
	'orderBy'         => array(
		'type'    => 'string',
		'default' => 'date',
	),
),
'render_callback' => 'render_achtvier_beitraege',
	) );
}
add_action( 'init', 'achtvier_beitraege_block_init' );
