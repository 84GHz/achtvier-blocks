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
 function render_fancy_latest_posts( $attributes ) {
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
  $i = 1;
  foreach ( $recent_posts as $post ) {

    $post_id = $post['ID'];
  	 $title = get_the_title( $post_id );
  	 $excerpt = get_the_excerpt( $args['teaser_length'] );
     $body = $post['post_content'];
     $body = strip_tags($body, ['p']);
     $body = (strlen($body) > 240) ? substr($body,0,237) : $body;
     $permalink = get_permalink($post_id);
     $the_points = "<a class='read-more-points' href='" . $permalink . "' >...</a>";
     $thumbnail_url = get_the_post_thumbnail_url( $post_id, 'medium' );

     if($i % 2 == 0) {
       $list_items_markup .= '<div class="col-sm-6 col-xl-3 fancy-post-col col-md-4">';
        $list_items_markup .= sprintf(
           '<a href="%2$s"><div class="fancy-latest-posts-thumb" style = "background-image:url(\'%1$s\')">;</div></a>',
         $thumbnail_url,
         esc_url( get_permalink( $post_id ) )
        );
//        $list_items_markup .= $thumbnail_url;


      $list_items_markup .= '</div>';
       $list_items_markup .= '<div class="col-sm-6 fancy-post-col col-xl-6 col-md-6">';
       if ( ! $title ) {
         $title = __( '(Untitled)' );
       }
       $list_items_markup .= sprintf(
         '<div class = "achtvier-beitrag-header"><a href="%1$s">%2$s</a>',
         esc_url( get_permalink( $post_id ) ),
         esc_html( $title )
       );

         $list_items_markup .= sprintf(
           '<time datetime="%1$s" class="wp-block-latest-posts__post-date">%2$s</time>',
           esc_attr( get_the_date( 'c', $post_id ) ),
           esc_html( get_the_date( '', $post_id ) )
         );


       $list_items_markup .= "</div>\n";
       $list_items_markup .= sprintf(
         '<div class = "achtvier-beitrag-body">%1$s</div>',
          $body.$the_points
               );

       $list_items_markup .= '</div>';
     }
     else {
       $list_items_markup .= '<div class="col-sm-6 col-xl-6 fancy-post-col col-md-6">';
       if ( ! $title ) {
         $title = __( '(Untitled)' );
       }
       $list_items_markup .= sprintf(
         '<div class = "achtvier-beitrag-header"><a href="%1$s">%2$s</a>',
         esc_url( get_permalink( $post_id ) ),
         esc_html( $title )
       );

         $list_items_markup .= sprintf(
           '<time datetime="%1$s" class="wp-block-latest-posts__post-date">%2$s</time>',
           esc_attr( get_the_date( 'c', $post_id ) ),
           esc_html( get_the_date( '', $post_id ) )
         );


       $list_items_markup .= "</div>\n";
       $list_items_markup .= sprintf(
         '<div class = "achtvier-beitrag-body">%1$s</div>',
          $body.$the_points       );

       $list_items_markup .= '</div>';
       $list_items_markup .= '<div class="col-sm-6 col-xl-3 fancy-post-col col-md-4">';

        $list_items_markup .= sprintf(
          '<a href="%2$s"><div class="fancy-latest-posts-thumb" style = "background-image:url(\'%1$s\')">;</div></a>',
         esc_url(get_the_post_thumbnail_url( $post_id, 'medium' )),
         esc_url( get_permalink( $post_id ) )
        );

      $list_items_markup .= '</div>';

     }


   $i++;
  }


  return $list_items_markup;
 }


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function fancy_latest_posts_block_init() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'fancy-latest-posts/index.js';
	wp_register_script(
		'fancy-latest-posts-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
      'wp-components',
      'wp-editor',
      'wp-data',
      'wp-api-fetch',
      'wp-date'
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'fancy-latest-posts/editor.css';
	wp_register_style(
		'fancy-latest-posts-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'fancy-latest-posts/style.css';
	wp_register_style(
		'fancy-latest-posts-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'achtvier-blocks/fancy-latest-posts', array(
		'editor_script' => 'fancy-latest-posts-block-editor',
		'editor_style'  => 'fancy-latest-posts-block-editor',
		'style'         => 'fancy-latest-posts-block',
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
  'render_callback' => 'render_fancy_latest_posts',

	) );
}

add_action( 'init', 'fancy_latest_posts_block_init' );
