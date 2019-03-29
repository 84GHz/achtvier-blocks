/**
 * BLOCK: achtvier-guten-mini-content
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, InspectorControls ,ColorPalette, MediaUpload } = wp.editor; // Import registerBlockType() from wp.blocks
const { Button, TextControl } = wp.components;
/**
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
registerBlockType( 'achtvierblocks/better-mini-content', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'better-mini-content' ), // Block title.
	icon: 'media-document', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'better-mini-content' ),
	],
	attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h3'
			},
			content: {
				type: 'array',
				source: 'children',
				selector: 'p'
			},

		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
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
		const {
				setAttributes,
				attributes,
				className,
		} = props;

		const getImageButton = (openEvent) => {
		  if(attributes.mediaURL) {
		    return (
		      <img
		        src={ attributes.mediaURL }
		        onClick={ openEvent }
		        className="image"
		      />
		    );
		  }
			else {
		    return (
		      <div className="button-container">
		        <Button
		          onClick={ openEvent }
		          className="button button-large"
		        >
		          Bild auswählen
		        </Button>
		      </div>
		    );
		  }
		};

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
		function onSelectImage( media ) {


			setAttributes( {
				console.log(media.sizes);
				mediaURL: media.sizes.large.url,
				mediaID: media.id,
			} );
			}

		// Creates a <p class='wp-block-cgb-block-achtvier-guten-mini-content'></p>.
		return (

				         <div className={className} >

								 <MediaUpload
							     onSelect={ onSelectImage }
							     type="image"
							     value={ attributes.imageID }
							     render={ ({ open }) => getImageButton(open) }
							   />
										 <TextControl
				                 tagName="h3"
				                 value={attributes.title}
				                 onChange={onTitleChange}
				                 placeholder="Titel!"
				                 />
												 <RichText
														 tagName="p"
														 value={attributes.content}
														 onChange={onContentChange}
														 placeholder="inhalt!"
														 />

				         </div>
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
		const {	attributes, className,} = props;
		return (
			<div className={className}>
        <div className="mini-headerimage"
        style={{
          backgroundImage:"url('" + attributes.mediaURL + "')"
        }}
        />

				  <h3>{attributes.title}</h3>
					<p>{attributes.content}</p>
			</div>
		);
	},
} );
