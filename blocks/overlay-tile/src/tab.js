
/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n

const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType('achtvier/bettertab',
{
	title: __( 'Dynamic Tab' ),

	parent: [ 'achtvier/bettertabs' ],

	icon: 'columns',

	description: __( 'A single tab within a tabs block.' ),

	category: 'achtvier-blocks',

	supports: {
		inserter: false,
	},
  attributes: {
    id: {
      type: "string",
    },
    active: {
      type: "string",
      default: ""
    }
  },

  edit( props ) {

    return (
      <div id={props.attributes.id}   className={"inner-tabs"}>
       <InnerBlocks templateLock={ false } />
      </div>
    );

	},

	save( props ) {
		return   <div id={props.attributes.id} className={props.attributes.active + " tab-pane"}><InnerBlocks.Content /></div>

	},
 }
);
