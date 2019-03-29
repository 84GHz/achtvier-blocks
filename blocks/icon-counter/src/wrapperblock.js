
/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n

const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType('achtvier/icon-counter-wrapper',
{
	title: __( 'Icon Counter Wrapper' ),


	description: __( 'An icon counter wrapper with trigger functionality' ),

	category: 'achtvier-blocks',

  attributes: {
    scrollspy: {
			type: 'boolean',
			default: false
		}
  },

  edit( props ) {

    return (
      <div className={props.className}>
       <InnerBlocks allowedBlocks={["achtvier/icon-counter"]} />

			 <label>achtvier-icon-counter-wrapper</label>
      </div>
    );

	},

	save( props ) {
		return   <div className={props.className}
							data-scrollspy={props.attributes.scrollspy}
							><InnerBlocks.Content /></div>
	},
 }
);
