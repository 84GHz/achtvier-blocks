/**
 * BLOCK: achtvier-latest-posts
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */



const  { Component, Fragment } = wp.element;
const {
	PanelBody,
	Placeholder,
	QueryControls,
	ToggleControl,
	Toolbar,
} = wp.components;
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
} = wp.editor;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'achtvier-blocks/fancy-latest-posts', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Fancy Latest Posts' ), // Block title.
	icon: 'list-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-latest-posts' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const { attributes, categoriesList, setAttributes, latestPosts } = props;
		const { displayPostDate, displayPostPicture,  displayPostExcerpt, align, postLayout, columns, order, orderBy, categories, postsToShow } = attributes;
		const onDisplayPostPictureChange = value => {
				props.setAttributes( { displayPostPicture: value } );
			};
			const onDisplayPostexcerptChange = value => {
					props.setAttributes( { displayPostExcerpt: value } );
				};
			const onDisplayPostDateChange = value => {
					props.setAttributes( { displayPostDate: value } );
				};
				const onItemClassChange = value => {
						props.setAttributes( { itemClass: value } );
					};

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Latest Posts Settings' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);

		// Creates a <p class='wp-block-cgb-block-achtvier-latest-posts'></p>.
		return (
			<Fragment>
				{ inspectorControls },
				<Placeholder
					icon="admin-post"
					label={ __( 'Fancy Latest Posts' ) }
				>
				</Placeholder>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	 save: function () {
 		return null;
 	},
} );
