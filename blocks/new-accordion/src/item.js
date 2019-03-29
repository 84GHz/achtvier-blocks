
/**
 * WordPress dependencies
 */
const { RichText, InnerBlocks } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n

const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks



registerBlockType('achtvierblocks/newaccordeonpanel',
{
	title: __( 'New Accordeon Panel' ),


	parent: [ 'achtvierblocks/newaccordeon' ],

	icon: 'columns',

	description: __( 'A single accordeon element' ),

	category: 'achtvier-blocks',

  attributes: {
    accpanelID: {
      type: "string",
    },
		parentID: {
      type: "string",
    },
    panelTitle: {
      type: "string",
    },
  },
  edit( props ) {



    console.log(props.beremed);

		if (typeof(props.attributes.accpanelID)=="undefined") {
			 props.setAttributes({ accpanelID: (+new Date).toString(36).slice(-8) });

			}


		const updateHeader = changes => {
			props.setAttributes({ panelTitle: changes });
		}
    return (

			<div class="card">
  		<div id={props.attributes.accpanelID} class="collapse show" >
			<div className="card-header">
			<RichText
					value={ props.attributes.panelTitle }
					onChange={ updateHeader }
					placeholder={ __( 'Panel Titel…' ) }
			/>
			</div>
				<div class="card-body">
				   <InnerBlocks />
				</div>
			</div>
		 </div>


    );

	},

	save( props ) {
		return   (
			<div class="card">
				<div class="card-header">
					<a class="card-link" data-toggle="collapse" href={'#' + props.attributes.accpanelID}>
						{props.attributes.panelTitle}
					</a>
				</div>
				<div id={props.attributes.accpanelID} class="collapse" data-parent={"#" + props.attributes.parentID}>
			  	<div class="card-body">
				  	<InnerBlocks.Content />
				  </div>
				</div>
    </div>
		);

	},
 }
);
