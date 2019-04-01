/**
 * BLOCK: achtvier-kachel
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
		import './wrapperblock.js';
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
	const { Button, TextControl, RangeControl	,PanelBody, ToggleControl, TextControls, ColorPicker } = wp.components;
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
	registerBlockType( 'achtvier/bar-counter', {
		// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __( 'Counter Tab' ), // Block title.
		category: 'achtvier-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		parent: ['achtvier/counter-wrapper'],
		keywords: [
			__( 'counter tab' ),
		],
		attributes: {

			counterBegin: {
				type: 'number',
				default: 0
	    },
			counterEnd: {
				type: 'number',
				default: 50
	    },
			counterLabel: {
				type: 'string',
				default: "%"
	    },
			counterMultiplier: {
				type: 'number',
				default: 1
	    },
			animationSpeed: {
				type: 'number',
				default: 10
			},
			bgColor: {
				type: 'string',
				default: '#fff2f2'
			},
			fgColor: {
				type: 'string',
				default: '#fd8a8a'
			},
			borderWidth: {
				type: 'number',
				default: 0
			},
			borderColor: {
				type: 'string',
				default: "#000"
			},
			counterPadding: {
				type: 'number',
				default: 11
			},
			counterHeight : {
				type: 'number',
				default: 50
			},
			startDelay : {
				type: 'number',
				default: 0
			},
			fontColor: {
				type: 'string',
				default: '#fff'
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
			setState
	} = props;
	const {counterBegin, counterEnd, startDelay, bgColor, fgColor} = attributes;



			function onCounterBeginChange(changes) {
					setAttributes({
							counterBegin: changes
					});
			}
			function onCounterEndChange(changes) {
					setAttributes({
							counterEnd: changes
					});
			}
			function onCounterMultiplierChange(changes) {
					setAttributes({
							counterMultiplier: changes
					});
			}
			function onAnimationSpeedChange(changes) {
					setAttributes({
							animationSpeed: changes
					});
			}
			function onCounterLabelChange(changes) {
					setAttributes({
							counterLabel: changes
					});
			}
			function onStartDelayChange(changes) {
					setAttributes({
							startDelay: changes
					});
			}


			function onBgColorChange(changes) {
					setAttributes({
							bgColor: changes.hex
					});
			}
			function onfgcolorChange(changes) {

					setAttributes({
							fgColor: changes.hex
					});
			}
			function onFontcolorChange(changes) {
					setAttributes({
							fontColor: changes.hex
					});
			}
			function onBorderColorChange(changes) {
					setAttributes({
							borderColor: changes.hex
					});
			}
			function onBorderWidthChange(changes) {
					setAttributes({
							borderWidth: changes
					});
			}
			function onCounterHeightChange(changes) {
					setAttributes({
							counterHeight: changes
					});
			}
			function onCounterPaddingChange(changes) {
					setAttributes({
							counterPadding: changes
					});
			}
			const fgStyle = {
				backgroundColor: attributes.fgColor,
				width: attributes.counterEnd + "%"
			}
			const bgStyle = {
				backgroundColor: attributes.bgColor,
				height: attributes.counterHeight,
			}
			return (
				<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Counter bar settings' ) }>
						<TextControl
							label={ __( 'Counter Bar Label' ) }
							value={ attributes.counterLabel }
							onChange={ onCounterLabelChange }
						/>
									<label>Hintergrundfarbe</label>
	   				        <ColorPicker
									     color= { bgColor }
											 value= { bgColor }
									     onChangeComplete={ onBgColorChange }
											 disableAlpha
									  />
									<label>Vordergrundfarbe</label>
									  <ColorPicker
									    color= { fgColor }
											value= { fgColor }
									    onChangeComplete={ onfgcolorChange }
											disableAlpha
									  />
										<label>Textfarbe</label>
											<ColorPicker
												color= { attributes.fontColor }
												onChangeComplete={ onFontcolorChange }
												disableAlpha
											/>
											<RangeControl
												label="counterHeight"
												value={ attributes.counterHeight }
												onChange={onCounterHeightChange}
												min={ 0 }
												max={ 200 }
											/>
										<RangeControl
											label="counterBegin"
											value={ counterBegin }
											onChange={onCounterBeginChange}
											min={ 0 }
											max={ 100 }
										/>
										<RangeControl
											label="counterEnd"
											value={ counterEnd }
											onChange={onCounterEndChange}
											min={ 0 }
											max={ 100 }
										/>
										<RangeControl
											label="counter padding"
											value={ attributes.counterPadding }
											onChange={onCounterPaddingChange}
											min={ 0 }
											max={ 100 }
										/>
										<RangeControl
											label="startDelay"
											value={ startDelay }
											onChange={onStartDelayChange}
											min={ 0 }
											max={ 5000 }
										/>

					</PanelBody>
				</InspectorControls>

				<div className={props.className}
				style={{
					border: attributes.borderWidth + "px solid " + attributes.borderColor
				}}
				>
				  <div className="counter-wrapper">
					<div className="outerbar" style = {bgStyle}>
					<div className="innerBar"
					style = {
						fgStyle
					}>
					</div>
					</div>

					<div className="counterlabel-textwrapper"
						style = {{ color: attributes.fontColor,
							padding: attributes.counterPadding + "px"
						}}
					>
						{attributes.counterEnd * attributes.counterMultiplier}{attributes.counterLabel}
					</div>
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
			const attributes = {props};
			const fgStyle = {
				//we begin with begin after all
				backgroundColor: props.attributes.fgColor,
				width: props.attributes.counterBegin + "%"
			}
			const bgStyle = {
				backgroundColor: props.attributes.bgColor,
				height: props.attributes.counterHeight,
			}


			return (
				<div className={props.className}
				style={{
					border: props.attributes.borderWidth + "px solid " + props.attributes.borderColor
				}}
				data-delay={props.attributes.startDelay}
				data-step={props.attributes.counterStep}
				data-counterbegin={props.attributes.counterBegin}
				data-multplier={props.attributes.counterMultiplier}
				data-counterend={props.attributes.counterEnd}
				data-animationspeed={props.attributes.animationSpeed}
				data-counterdelay={props.attributes.dataDelay}
				>
					<div className="counter-wrapper">
					<div className="outerbar" style = {bgStyle}>
					<div className="innerBar"
					style = {
						fgStyle }
						dangerouslySetInnerHTML={{__html: '&nbsp;'}}
					/>
					</div>

					<div className="counterlabel-textwrapper"
						style = {{ color: props.attributes.fontColor,
							padding: props.attributes.counterPadding + "px"
						}}
					>
					  <span className="counter-number">
						{props.attributes.counterBegin * props.attributes.counterMultiplier}
						</span>{props.attributes.counterLabel}
					</div>
					</div>

				</div>
	)
		},
	} );
