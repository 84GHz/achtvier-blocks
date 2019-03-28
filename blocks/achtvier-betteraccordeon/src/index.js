/**
 * BLOCK: achtvier-accordeon
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import './item.js'
const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, InnerBlocks} = wp.editor;
const { Dashicon, Tooltip  } = wp.components;
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
 const cardtemplate = (cardid, isactive) => [
   [ 'achtvier/accordeoncard', {id:cardid, active:isactive } ], // [ blockName, attributes ]
 ];

 const cardtemplate2 = (itemcards) => {
 	function idize(headerraw) {
 		var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
 		return idheader;
 	}

 	var ret_arr = [];
console.log(itemcards.length);
   var active = true;
 	 itemcards.forEach(function(tab){
 		var singlecard;
 		if (active) {
 		  singlecard =  cardtemplate(idize(tab.linkid),  "active");
 			active = false;
 		}
 		else {
 		  singlecard =  cardtemplate(idize(tab.linkid),  "");
 		}

     ret_arr.push(singlecard[0]);
 	  });
    console.log(ret_arr);
 	return(ret_arr);
 }



registerBlockType( 'achtvier/block-accordeon', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'achtvier-accordeon ' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-accordeon' ),
	],
	attributes : {
		cardItems: {
				type: "children",
				default: [{
						header: __('Titel'),
						linkid: 'id1',
				}, {
						header: __('Titel'),
						linkid: 'id2',

				} ]
		},
		changed: {
				type: 'boolean',
				default: false
		},
		blockID: {
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
		const { attributes, setAttributes } = props;

		if (props.attributes.blockID) {
				props.setAttributes({ blockID: props.clientId });
		}
		const { cardItems } = props.attributes;
		function idize(headerraw) {
			var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
			return idheader;
		}
		function addid() {
			return ((+new Date).toString(36));
		}
		function updateHeader(headernew, index) {
			cardItems[index].header = headernew;
		}
		function getHeader() {
			var newcardindex = props.attributes.cardItems.length + 1;
			return ("Card " + newcardindex );
		}
    function newCard() {
      var output = [...cardItems];
      console.log(output);
      output.push({ header: "New Card", linkid: addid() });
      console.log("outupt: " + output);

      return output;

    }
		function removeCard(idx) {
			var arr = cardItems;
			arr.splice(idx, 1);
			setAttributes({cardItems: arr});

		}
		return (
			<div className={props.className + " container"}
			>
				<InnerBlocks
					template={cardtemplate2(attributes.cardItems)}
          templateLock="all"
          allowedBlocks={ [ 'achtvier/accordeoncard' ] }
				/>
				<span className="avgb-card avgb-add-card ui-state-default"
				>
						<Tooltip text={ __( 'Card hinzufügen' ) }>
								<span onClick={ () => setAttributes( {

                    cardItems: newCard()
								} ) }>
										<Dashicon icon="plus-alt"/>
							</span>
						</Tooltip>

				</span>

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
		return (

			<div className={props.className + " container"}
			id={props.attributes.blockID}
			>
    			  <InnerBlocks.Content/>
			</div>
		);
	},
} );
