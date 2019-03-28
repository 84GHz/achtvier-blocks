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
const { Button, TextControl,	PanelBody, ToggleControl, RangeControl, TextControls, ColorPicker } = wp.components;
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
registerBlockType( 'achtvier/focuspoint-image', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Fokuspunkt Bild' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-focuspoint' ),
	],
	attributes: {

		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
    },
		showTextBlock: {
			type: 'boolean',
		},
		focusPointX: {
			type: 'number',
		},
		focusPointY: {
			type: 'number',
		},
		imageWidth: {
			type: 'number',
		},
		imageHeight: {
			type: 'number',
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

		function onFocusPointXChange(changes) {
				setAttributes({
						focusPointX: changes
				});
		}
		function onFocusPointYChange(changes) {
				setAttributes({
						focusPointY: changes
				});
		}
		function onImageWidthChange(changes) {
				setAttributes({
						imageWidth: changes
				});
		}
		function onImageHeightChange(changes) {
				setAttributes({
						imageHeight: changes
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
		function onShowTextBlockChange(changes) {
				setAttributes({
						showTextBlock: changes
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
				<PanelBody title={ __( 'Fokuspunkt Bild Einstellungen' ) }>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ props.attributes.imageID }
					render={ ({ open }) => getImageButton(open) }
				/>
					<ToggleControl
						label={ __( 'Show Text Block' ) }
						checked={ attributes.showTextBlock }
						onChange={ onShowTextBlockChange }
					/>
   				<RangeControl
						label="Fokus Point X"
	  				value={ props.attributes.focusPointX  }
						onChange={onFocusPointXChange}
						min={ -10 }
						max={ 10 }
				  />
					<RangeControl
						label="Fokus Point Y"
	  				value={ props.attributes.focusPointY }
						onChange={onFocusPointYChange}
						min={ -10 }
						max={ 10 }
				  />

				</PanelBody>
			</InspectorControls>

			<div className={props.className}
			style={{
					backgroundImage: "url('" + props.attributes.mediaURL + "')",
					backgroundSize: 'cover',
					backgroundPosition: 'center'
			}}>


			<div className="focuspoint-textblock-wrapper">
				<InnerBlocks/>
			</div>
				<div className="atv-hlb">
					<h3 className="atv-miniheader">
						ATELIER VOYAGE
					</h3>
					<div className="atv-minisubheader">
						The Essence of Travel
					</div>
				</div>
			</div>

      <label>achtvier-fokuspunkt-bild</label>

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
			if (props.attributes.showTextBlock) {
				return (
					<div className="focuspoint-textblock-wrapper">
	          <InnerBlocks.Content />
					</div>
				);
			}
			else return null;

		};
		return (
	<div className={props.className}>
		<div className="focuspoint-inner-wrapper"
			>
				<img src={props.attributes.mediaURL} className="focuspoint-pic"
					data-focus-x={ props.attributes.focusPointX / 10 }
					data-focus-y={ props.attributes.focusPointY / 10 }
				/>
		</div>
		<div className="sliderinfo-wrapper">
		<div className="focuspoint-textblock-wrapper">
			<InnerBlocks.Content />
		</div>

		<div className="atv-hlb">
		  <div className="hlb-inner-wrapper">
			<h3 className="atv-miniheader">
					ATELIER VOYAGE
				</h3>
				<div className="atv-minisubheader">
					The Essence of Travel
			</div>
			</div>

		</div>
		</div>

	 </div>


)
	},
} );
