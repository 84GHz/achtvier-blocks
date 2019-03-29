/**
 * BLOCK: achtvier-kachel
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
	const { __ } = wp.i18n; // Import __() from wp.i18n
	const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
	const {
		RichText,
		InspectorAdvancedControls,
		InspectorControls,
		InnerBlocks,
		BlockControls,
		MediaUpload,

	} = wp.editor;

	const { Button, TextControl, RangeControl	,PanelBody, ToggleControl, TextControls, ColorPicker } = wp.components;
	const { Fragment } = wp.element;

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
	registerBlockType( 'achtvier/newsticker', {
		// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __( 'Newsticker' ), // Block title.
		category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [
			__( 'newsticker' ),
		],
		attributes: {
		  showLinked: {
  			type: 'boolean',
		  },
		  linkURL: {
  			type: 'string',
      },
			newsTickerText: {
				type: 'string'
			}
		},

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 *
		 * The "edit" property must be a valid function.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
		 */
		edit: function( props ) {

	const {
			setAttributes,
			attributes,
			className,
			setState
	} = props;
	const {counterBegin, counterEnd, startDelay, bgColor, fgColor} = attributes;



			function onshowLinkedChange(changes) {
					setAttributes({
							showLinked: changes
					});
			}
			function onLinkUrlChange(changes) {
					setAttributes({
							linkURL: changes
					});
			}
			function onNewsTickerTextChange(changes) {
					setAttributes({
							newsTickerText: changes
					});
			}





			return (
				<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Newsticker settings' ) }>
							<label>Link url</label>
								<TextControl
                 value={attributes.linkURL}
                 onChange={onLinkUrlChange}
                 placeholder="#"
	               />
	 					<ToggleControl
  						label={ __( 'Show link' ) }
	  					checked={ attributes.showLinked }
		  				onChange={ onshowLinkedChange }
					/>

					</PanelBody>
				</InspectorControls>

				<div className={props.className}>
					 <TextControl
                 tagName="p"
                 value={attributes.newsTickerText}
                 onChange={onNewsTickerTextChange}
                 placeholder="Ticker Inhalt"
	                 />

					</div>
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
		save: function( props ) {
			const attributes = {props};
			const getLink = () => {
		  	if (props.attributes.showLinked) {
			  	return (
	            <a href={ props.attributes.linkURL } className="newsticker-content">{ props.attributes.newsTickerText }</a>
				  );
			  }
			  else return (
					<p className="newsticker-content">{props.attributes.newsTickerText}</p>

				);

		  };

			return (
				<div className={props.className}>
					 	{getLink()}
				</div>
	)
		},
	} );
