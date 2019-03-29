/**
 * BLOCK: achtvier-guten-tabs
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './tab.js';

//import memoize from 'memize';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component, Fragment } = wp.element;
const {
    PanelBody,
    RangeControl,
    SelectControl,
} = wp.components;

const {
    RichText,
    InspectorControls,
    InnerBlocks,
} = wp.editor;


const getTabs = ( { tabsCount, tabsSettings } ) => {
console.log(tabsSettings);
    const result = [];

    for ( let k = 1; k <= tabsCount; k++ ) {
        result.push( {
            label: tabsSettings[ 'tab_' + k ] ? tabsSettings[ 'tab_' + k ].label : sprintf( __( 'Tab %d' ), k ),
            number: k,
        } );
    }

    return result;
};

/**
 * Returns the layouts configuration for a given number of tabs.
 *
 * @param {number} attributes tabs attributes.
 *
 * @return {Object[]} Tabs layout configuration.
 */
const getTabsTemplate = ( attributes ) => {
    const {
        tabsCount, blockID
    } = attributes;
    const result = [];
    var active = "";

    for ( let k = 1; k <= tabsCount; k++ ) {
       if( k==1) {
         active = "active";
       }

        result.push( [ 'achtvier/bettertab', { id: 'tab-' + k, active: active } ] );
        active = "";
    }
    console.log(result);
    return result;
};



const tabtemplate = (tabid, isactive) => [
  [ 'achtvier/bettertab', {id:tabid, active:isactive } ], // [ blockName, attributes ]
];


const tabtemplate2 = (itemtabs) => {
	function idize(headerraw) {
		var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
		return idheader;
	}

	var ret_arr = [];
  var active = true;
	itemtabs.forEach(function(tab){
		var singletab;
		if (active) {
		  singletab =  tabtemplate(idize(tab.linkid), "active");
			active = false;
		}
		else {
		  singletab =  tabtemplate(idize(tab.linkid), "");
		}
    console.log(singletab);
    ret_arr.push(singletab[0]);
	  });
    console.log(ret_arr);
	return(ret_arr);
}



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
registerBlockType( 'achtvier-blocks/bettertabs', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Tabs' ), // Block title.
	category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'achtvier-better-tabs' ),
	],
	attributes : {
		tabItems: {
				type: "children",
				default: [{
						header: __('Tab 1'),
            linkid: 'id1',
				}, {
						header: __('Tab 2'),
            linkid: 'id2',

				}, ]
		},
		changed: {
				type: 'boolean',
				default: false
		},
		blockID: {
				type: 'string'
		},
    tabsCount: {
       type: 'number',
       default: 2,
    },
    tabActive: {
      type: 'number',
      default: 1,
    },
    tabsSettings: {
      type: 'object',
      default: {},
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
            const { attributes, setAttributes } = props;

		if (typeof(props.attributes.blockID)=="undefined") {
				setAttributes({ blockID: props.clientId });
        console.log(props.attributes.blockID);
		}

    function newTab() {
      var output = [...tabItems];
      output.push({ header: "New Tab", linkid: addid() });

      return output;

    }
    console.log(props.attributes.tabsSettings);
    const tabs = getTabs( attributes, props.clientId );
    const {tabsCount} =  props.attributes;
		const { tabItems } = props.attributes;
    const {tabsSettings}=props.attributes;

		function idize(headerraw) {
			var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
			return idheader;
		}
    function addid() {
      return ((+new Date).toString(36));
    }
    function updateHeader(headernew, index) {
			tabItems[index].header = headernew;
		}
    console.log(props);
		return (
            <Fragment>
                      <InspectorControls>
                        <PanelBody>
                          <RangeControl
                            label={ __( 'Tabs' ) }
                            value={ tabsCount }
                            onChange={ ( value ) => setAttributes( { tabsCount: value } ) }
                            min={ 1 }
                            max={ 25 }
                          />
                        </PanelBody>
                      </InspectorControls>
                      <div className={ props.className } style={ { border: 'none' } }>
                        <ul className="avgb-tabs-panel">
                        {
                            tabs.map( ( val ) => {
                                return (
                                  <span className="bettertabs-tab">

                                    <RichText
                                      tagName="a"
                                      data-tab={ val.number }
                                      placeholder={ __( 'Tab label…' ) }
                                      className="bettertabs-tab"
                                      value={ val.label }
                                      unstableOnFocus={ () => setAttributes( { tabActive: val.number } ) }
                                      onChange={ ( value ) => {
                                        if ( typeof tabs[ val.number - 1 ] !== 'undefined' ) {
                                          if ( typeof tabsSettings[ `tab_${ val.number }` ] === 'undefined' ) {
                                            tabsSettings[ `tab_${ val.number }` ] = {};
                                          }
                                          value = value.replace(/[<]br[^>]*[>]/gi,"");
                                          tabsSettings[ `tab_${ val.number }` ].label = value;
                                          setAttributes( { tabsSettings: Object.assign( {}, tabsSettings ) } );
                                        }
                                      } }
                                      formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                      inlineToolbar
                                      key={ `tab_button_${ val.number }` }
                                    />
                                  </span>
                                );
                            } )
                          }
                        </ul>
                          <div id={props.attributes.blockID}>

                            <InnerBlocks
                              template={ getTabsTemplate( attributes ) }
                              templateLock="all"
                              allowedBlocks={ [ 'achtvier/bettertab' ] }
                            />

                          </div>
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
		const { tabItems } = props.attributes;
     const tabs = getTabs( props.attributes );
		function idize(headerraw) {
			var idheader = headerraw.replace(/\s+/g, '-').toLowerCase();
			return idheader;
		}
		return (
			<div className={props.className + " container"}
			>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
    			<ul className="nav nav-tabs--vertical" id={ 'achtvier-guten-tabs-' + props.attributes.blockID } role="tablist">
            { tabs.map(tabItem=>(
    	 			     <li className = "nav-item" ><a href={ "#tab-" + tabItem.number  } className="nav-link" data-toggle="tab" role="tab">{tabItem.label}</a></li>
    		 	  ))}
    			</ul>
          </div>
    			<div className="col-lg-9 col-md-6 col-sm-12 tab-content">
    			  <InnerBlocks.Content/>

    			</div>

        </div>

			</div>
		);
	},
} );
