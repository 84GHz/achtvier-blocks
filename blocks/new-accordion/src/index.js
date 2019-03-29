/**
 * BLOCK: achtvier-guten-mini-content
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const AccordeonBlockContext = wp.element.createContext()
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, InspectorControls, InnerBlocks  } = wp.editor; // Import registerBlockType() from wp.blocks
const { Button, TextControl, ToggleControl} = wp.components;
const { select, dispatch } = wp.data;
const { Component, Fragment } = wp.element;

//import './item.js';
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
registerBlockType( 'achtvierblocks/newaccordeon', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'newaccordeon' ), // Block title.
	icon: 'list-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'accordeon' ),
	],
	attributes: {
			accordeonID: {
				type: 'string',
			},
			accordeonOn: {
				type: 'boolean',
				default: true

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


		function onAccordeonOnChange(changes) {
			console.log(changes);
				setAttributes({
						accordeonOn: changes
				});
		}


	 if (typeof(props.attributes.accordeonID)=="undefined") {
		 var datid = (+new Date).toString(36).slice(-8);
		 console.log(props.attributes.accordeonOn);

		 if(props.attributes.accordeonOn) {
			setAttributes({ accordeonID: datid });
			var children = select('core/editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
 		 for (var i = 0; i < children.length ; i++) {
 		 	dispatch('core/editor').updateBlockAttributes(children[i].clientId, {parentID: props.attributes.accordeonID})
 		 }
		 }
		 else {
			 setAttributes({ accordeonID: null });
			 var children = select('core/editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
			 for (var i = 0; i < children.length ; i++) {
			 	dispatch('core/editor').updateBlockAttributes(children[i].clientId, {parentID: null})
			 }
		 }

 	   }
		 else {
			 if(props.attributes.accordeonOn) {
				var children = select('core/editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
				 for (var i = 0; i < children.length ; i++) {
					dispatch('core/editor').updateBlockAttributes(children[i].clientId, {parentID: props.attributes.accordeonID})
				 }
			 }
			 else {
				 var children = select('core/editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
				 for (var i = 0; i < children.length ; i++) {
					dispatch('core/editor').updateBlockAttributes(children[i].clientId, {parentID: null})
				 }
			 }
		 }



		 function getTemplate(accID) {
			 return ([
				 ['achtvierblocks/newaccordeonpanel', {}],
			 ])
		 }



	//	 var child = wp.data.select('achtvierblocks/newaccordeon').getBlocksByClientId(props.clientId)[0].innerBlocks[0];
		//	console.log(child);
		return (
			     <Fragment>
					 <InspectorControls>
					 <ToggleControl
						 label={ __( 'AccordeonFuktion' ) }
						 checked={ props.attributes.accordeonOn }
						 onChange={ onAccordeonOnChange  }
					 />
					 </InspectorControls>
					 <div className={className} id={props.attributes.accordeonID}>
							 <InnerBlocks
							 clientId={ props.clientId }
							 allowedBlocks={ [ 'achtvierblocks/newaccordeonpanel' ] }
							 template={getTemplate(props.attributes.accordeonID)}
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
		const {	attributes, className} = props;
		return (
			<div className={className} id={props.attributes.accordeonID}>
					<InnerBlocks.Content/>
			</div>
		);
	},
} );

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


		if (typeof(props.attributes.accpanelID)=="undefined") {
			 props.setAttributes({ accpanelID: (+new Date).toString(36).slice(-8) });
			}


		const updateHeader = changes => {
			props.setAttributes({ panelTitle: changes });
		};

    return (
				<div class="card">
				<div id={props.attributes.accpanelID} class="collapse show">
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
     if ((props.attributes.parentID===null)||typeof(props.attributes.parentID)=="undefined") {
			 return   (
 				<div class="card">
 					<div class="card-header">
 						<a class="card-link" data-toggle="collapse" href={'#' + props.attributes.accpanelID}>
 							{props.attributes.panelTitle}
 						</a>
 					</div>
 					<div id={props.attributes.accpanelID} class="collapse"
 					>
 						<div class="card-body">
 							<InnerBlocks.Content />
 						</div>
 					</div>
 			</div>

 			);
		 }
		 else {
			 return   (

 				<div class="card">
 					<div class="card-header">
 						<a class="card-link" data-toggle="collapse" href={'#' + props.attributes.accpanelID}>
 							{props.attributes.panelTitle}
 						</a>
 					</div>
 					<div id={props.attributes.accpanelID} class="collapse"
 					data-parent={"#" + props.attributes.parentID}
 					>
 						<div class="card-body">
 							<InnerBlocks.Content />
 						</div>
 					</div>


 			</div>

 			);
		 }




	},
 }
);
