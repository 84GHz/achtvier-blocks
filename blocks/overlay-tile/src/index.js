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
const { Button, TextControl,	PanelBody, ToggleControl, TextControls, ColorPicker } = wp.components;
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
registerBlockType( 'achtvier/overlay-tile', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Overlay tile' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-kachel' ),
	],
	attributes: {

		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
    },
		linkURL: {
			type: 'string',
    },
		linkText: {
			type: 'string',
		},

		showLink: {
			type: 'boolean',
		},


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
		// Creates a <p class='wp-block-cgb-block-achtvier-kachel'></p>.
		const getImageButton = (openEvent) => {
return (
		<div className="button-container">
			<Button
				onClick={ openEvent }
				className="button button-large"
			 >
				 HGBild
			 </Button>
		 </div>
	 );

};

const {
		setAttributes,
		attributes,
		className,
} = props;

		function onTitleChange(changes) {
				setAttributes({
						title: changes
				});
		}
		function onContentChange(changes) {
				setAttributes({
						content: changes
				});
		}
		function onLinkURLChange(changes) {
				setAttributes({
						linkURL: changes
				});
		}
		function onLinkTextChange(changes) {
				setAttributes({
						linkText: changes
				});
		}
		function onShowLinkChange(changes) {
				setAttributes({
						showLink: changes
				});
		}
		function onOverlayColorChange(changes) {
				setAttributes({
						overlayColor: "rgba(" + changes.rgb.r + "," + changes.rgb.g + "," + changes.rgb.b + "," + changes.rgb.a + ")",
						overlayTransparency: changes.rgb.a
				});
		}
		function onSelectImage( media ) {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		}
		return (
			<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Kacheleinstellungen' ) }>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ props.attributes.imageID }
					render={ ({ open }) => getImageButton(open) }
				/>
					<ToggleControl
						label={ __( 'Show link' ) }
						checked={ attributes.showLink }
						onChange={ onShowLinkChange }
					/>

					<TextControl
						label={ __( 'Link URL' ) }
						value={ attributes.linkURL }
						onChange={ onLinkURLChange }
					/>
					<TextControl
						label={ __( 'Link text' ) }
						value={ attributes.linkText }
						onChange={ onLinkTextChange }
					/>


				</PanelBody>
			</InspectorControls>

			<div className={props.className}
			style={{
					backgroundImage: "url('" + props.attributes.mediaURL + "')",
					backgroundSize: 'cover',
					backgroundPosition: 'center'
			}}>
			>


			<div className="overlay-wrapper">
				<InnerBlocks/>
			</div>
      <label>achtvier-overlay-tile</label>
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
		const getLink = () => {
			if (props.attributes.showLink) {
				return (
					<div className="overlay-link-wrapper">
	          <a href={ props.attributes.linkURL } className="kachel-overlay-link">{ props.attributes.linkText }</a>
					</div>
				);
			}
			else return null;

		};
		return (
	<div className={props.className}>
	<img src={props.attributes.mediaURL}
	 className="ok-image"/>
	 <div className="kachel-overlay-wrapper">
		 <div className="linkoverlay" >
		 <div className="overlay-inner-wrapper">
			 <InnerBlocks.Content />
			 { getLink() }
		 </div>

		 </div>
	 </div>

	</div>
)
	},
} );
