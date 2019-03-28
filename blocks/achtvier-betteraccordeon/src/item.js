
/**
 * WordPress dependencies
 */
const { RichText, InnerBlocks } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n

const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType('achtvier/accordeoncard',
{
	title: __( 'Dynamic accordeon Card' ),


	parent: [ 'achtvier/block-accordeon' ],

	icon: 'columns',

	description: __( 'A single accordeon element' ),

	category: 'achtvier-blocks',

  attributes: {
    id: {
      type: "string",
      default: "Test test test"
    },
		cardtitle: {
      type: "string",
      default: "Title"
    },
    active: {
      type: "string",
      default: ""
    },
  },
  edit( props ) {
		const updateHeader = headernew => {
			headernew = headernew.replace(/^(<br\s*\/?>)+/,'');

      headernew = headernew.replace(/[<]br[^>]*[>]/gi,"");

			props.setAttributes({ cardtitle: headernew });
		}

    return (
			<div class="card">
  		<div id={props.attributes.id} class="collapse show" >
			<div className="card-header">
			<RichText
					value={ props.attributes.cardtitle }
					onChange={ updateHeader }
					placeholder={ __( 'Card Titel…' ) }
			/>
			</div>
				<div class="card-body">
				   <InnerBlocks templateLock={ false } />
				</div>
			</div>
		 </div>
    );

	},

	save( props ) {
		return   (
			<div class="card">
				<div class="card-header">
					<a class="card-link" data-toggle="collapse" href={'#' + props.attributes.id}>
						{props.attributes.cardtitle}
					</a>
				</div>
				<div id={props.attributes.id} class="collapse">
			  	<div class="card-body">
				  	<InnerBlocks.Content />
				  </div>
				</div>
    </div>
		);

	},
 }
);
