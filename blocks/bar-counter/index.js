(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["achtvier-blocks"] = factory();
	else
		root["achtvier-blocks"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks/./src/editor.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wrapperblock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapperblock.js */ \"./src/wrapperblock.js\");\n/* harmony import */ var _wrapperblock_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wrapperblock_js__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * BLOCK: achtvier-kachel\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//  Import CSS.\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorAdvancedControls = _wp$editor.InspectorAdvancedControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    BlockControls = _wp$editor.BlockControls,\n    MediaUpload = _wp$editor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    RangeControl = _wp$components.RangeControl,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControls = _wp$components.TextControls,\n    ColorPicker = _wp$components.ColorPicker;\nvar Fragment = wp.element.Fragment;\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('achtvier/bar-counter', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Counter Tab'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  parent: ['achtvier/counter-wrapper'],\n  keywords: [__('counter tab')],\n  attributes: {\n    counterBegin: {\n      type: 'number',\n      default: 0\n    },\n    counterEnd: {\n      type: 'number',\n      default: 50\n    },\n    counterLabel: {\n      type: 'string',\n      default: \"%\"\n    },\n    counterMultiplier: {\n      type: 'number',\n      default: 1\n    },\n    animationSpeed: {\n      type: 'number',\n      default: 10\n    },\n    bgColor: {\n      type: 'string',\n      default: '#fff2f2'\n    },\n    fgColor: {\n      type: 'string',\n      default: '#fd8a8a'\n    },\n    borderWidth: {\n      type: 'number',\n      default: 0\n    },\n    borderColor: {\n      type: 'string',\n      default: \"#000\"\n    },\n    counterPadding: {\n      type: 'number',\n      default: 11\n    },\n    counterHeight: {\n      type: 'number',\n      default: 50\n    },\n    startDelay: {\n      type: 'number',\n      default: 0\n    },\n    fontColor: {\n      type: 'string',\n      default: '#fff'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  edit: function edit(props) {\n    var setAttributes = props.setAttributes,\n        attributes = props.attributes,\n        className = props.className,\n        setState = props.setState;\n    var counterBegin = attributes.counterBegin,\n        counterEnd = attributes.counterEnd,\n        startDelay = attributes.startDelay,\n        bgColor = attributes.bgColor,\n        fgColor = attributes.fgColor;\n\n    function onCounterBeginChange(changes) {\n      setAttributes({\n        counterBegin: changes\n      });\n    }\n\n    function onCounterEndChange(changes) {\n      setAttributes({\n        counterEnd: changes\n      });\n    }\n\n    function onCounterMultiplierChange(changes) {\n      setAttributes({\n        counterMultiplier: changes\n      });\n    }\n\n    function onAnimationSpeedChange(changes) {\n      setAttributes({\n        animationSpeed: changes\n      });\n    }\n\n    function onCounterLabelChange(changes) {\n      setAttributes({\n        counterLabel: changes\n      });\n    }\n\n    function onStartDelayChange(changes) {\n      setAttributes({\n        startDelay: changes\n      });\n    }\n\n    function onBgColorChange(changes) {\n      setAttributes({\n        bgColor: changes.hex\n      });\n    }\n\n    function onfgcolorChange(changes) {\n      setAttributes({\n        fgColor: changes.hex\n      });\n    }\n\n    function onFontcolorChange(changes) {\n      setAttributes({\n        fontColor: changes.hex\n      });\n    }\n\n    function onBorderColorChange(changes) {\n      setAttributes({\n        borderColor: changes.hex\n      });\n    }\n\n    function onBorderWidthChange(changes) {\n      setAttributes({\n        borderWidth: changes\n      });\n    }\n\n    function onCounterHeightChange(changes) {\n      setAttributes({\n        counterHeight: changes\n      });\n    }\n\n    function onCounterPaddingChange(changes) {\n      setAttributes({\n        counterPadding: changes\n      });\n    }\n\n    var fgStyle = {\n      backgroundColor: attributes.fgColor,\n      width: attributes.counterEnd + \"%\"\n    };\n    var bgStyle = {\n      backgroundColor: attributes.bgColor,\n      height: attributes.counterHeight\n    };\n    return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n      title: __('Counter bar settings')\n    }, React.createElement(TextControl, {\n      label: __('Counter Bar Label'),\n      value: attributes.counterLabel,\n      onChange: onCounterLabelChange\n    }), React.createElement(\"label\", null, \"Hintergrundfarbe\"), React.createElement(ColorPicker, {\n      color: bgColor,\n      value: bgColor,\n      onChangeComplete: onBgColorChange,\n      disableAlpha: true\n    }), React.createElement(\"label\", null, \"Vordergrundfarbe\"), React.createElement(ColorPicker, {\n      color: fgColor,\n      value: fgColor,\n      onChangeComplete: onfgcolorChange,\n      disableAlpha: true\n    }), React.createElement(\"label\", null, \"Textfarbe\"), React.createElement(ColorPicker, {\n      color: attributes.fontColor,\n      onChangeComplete: onFontcolorChange,\n      disableAlpha: true\n    }), React.createElement(RangeControl, {\n      label: \"counterHeight\",\n      value: attributes.counterHeight,\n      onChange: onCounterHeightChange,\n      min: 0,\n      max: 200\n    }), React.createElement(RangeControl, {\n      label: \"counter multiplicator\",\n      value: attributes.counterMultiplier,\n      onChange: onCounterMultiplierChange,\n      min: 0,\n      max: 10000\n    }), React.createElement(RangeControl, {\n      label: \"counter border\",\n      value: attributes.borderWidth,\n      onChange: onBorderWidthChange,\n      min: 0,\n      max: 50\n    }), React.createElement(\"label\", null, \"Border Color\"), React.createElement(ColorPicker, {\n      color: attributes.borderColor,\n      onChangeComplete: onBorderColorChange,\n      disableAlpha: true\n    }), React.createElement(RangeControl, {\n      label: \"Animation Speed\",\n      value: attributes.animationSpeed,\n      onChange: onAnimationSpeedChange,\n      min: 1,\n      max: 1000\n    }), React.createElement(RangeControl, {\n      label: \"counterBegin\",\n      value: counterBegin,\n      onChange: onCounterBeginChange,\n      min: 0,\n      max: 100\n    }), React.createElement(RangeControl, {\n      label: \"counterEnd\",\n      value: counterEnd,\n      onChange: onCounterEndChange,\n      min: 0,\n      max: 100\n    }), React.createElement(RangeControl, {\n      label: \"counter padding\",\n      value: attributes.counterPadding,\n      onChange: onCounterPaddingChange,\n      min: 0,\n      max: 100\n    }), React.createElement(RangeControl, {\n      label: \"startDelay\",\n      value: startDelay,\n      onChange: onStartDelayChange,\n      min: 0,\n      max: 5000\n    }))), React.createElement(\"div\", {\n      className: props.className,\n      style: {\n        border: attributes.borderWidth + \"px solid \" + attributes.borderColor\n      }\n    }, React.createElement(\"div\", {\n      className: \"counter-wrapper\"\n    }, React.createElement(\"div\", {\n      className: \"outerbar\",\n      style: bgStyle\n    }, React.createElement(\"div\", {\n      className: \"innerBar\",\n      style: fgStyle\n    })), React.createElement(\"div\", {\n      className: \"counterlabel-textwrapper\",\n      style: {\n        color: attributes.fontColor,\n        padding: attributes.counterPadding + \"px\"\n      }\n    }, attributes.counterEnd * attributes.counterMultiplier, attributes.counterLabel))));\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  save: function save(props) {\n    var attributes = {\n      props: props\n    };\n    var fgStyle = {\n      //we begin with begin after all\n      backgroundColor: props.attributes.fgColor,\n      width: props.attributes.counterBegin + \"%\"\n    };\n    var bgStyle = {\n      backgroundColor: props.attributes.bgColor,\n      height: props.attributes.counterHeight\n    };\n    return React.createElement(\"div\", {\n      className: props.className,\n      style: {\n        border: props.attributes.borderWidth + \"px solid \" + props.attributes.borderColor\n      },\n      \"data-delay\": props.attributes.startDelay,\n      \"data-step\": props.attributes.counterStep,\n      \"data-counterbegin\": props.attributes.counterBegin,\n      \"data-multplier\": props.attributes.counterMultiplier,\n      \"data-counterend\": props.attributes.counterEnd,\n      \"data-animationspeed\": props.attributes.animationSpeed,\n      \"data-counterdelay\": props.attributes.dataDelay\n    }, React.createElement(\"div\", {\n      className: \"counter-wrapper\"\n    }, React.createElement(\"div\", {\n      className: \"outerbar\",\n      style: bgStyle\n    }, React.createElement(\"div\", {\n      className: \"innerBar\",\n      style: fgStyle,\n      dangerouslySetInnerHTML: {\n        __html: '&nbsp;'\n      }\n    })), React.createElement(\"div\", {\n      className: \"counterlabel-textwrapper\",\n      style: {\n        color: props.attributes.fontColor,\n        padding: props.attributes.counterPadding + \"px\"\n      }\n    }, React.createElement(\"span\", {\n      className: \"counter-number\"\n    }, props.attributes.counterBegin * props.attributes.counterMultiplier), props.attributes.counterLabel)));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks/./src/style.scss?");

/***/ }),

/***/ "./src/wrapperblock.js":
/*!*****************************!*\
  !*** ./src/wrapperblock.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * WordPress dependencies\n */\nvar InnerBlocks = wp.editor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nregisterBlockType('achtvier/counter-wrapper', {\n  title: __('Counter Wrapper'),\n  icon: 'columns',\n  description: __('A counter wrapper with trigger functionality'),\n  category: 'achtvier-blocks',\n  attributes: {\n    scrollspy: {\n      type: 'boolean',\n      default: false\n    }\n  },\n  edit: function edit(props) {\n    return React.createElement(\"div\", {\n      className: props.className\n    }, React.createElement(InnerBlocks, {\n      allowedBlocks: [\"achtvier/bar-counter\"]\n    }), React.createElement(\"label\", null, \"achtvier-counter-wrapper\"));\n  },\n  save: function save(props) {\n    return React.createElement(\"div\", {\n      className: props.className,\n      \"data-scrollspy\": props.attributes.scrollspy\n    }, React.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/wrapperblock.js?");

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/index.js ./src/style.scss ./src/editor.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n__webpack_require__(/*! ./src/style.scss */\"./src/style.scss\");\nmodule.exports = __webpack_require__(/*! ./src/editor.scss */\"./src/editor.scss\");\n\n\n//# sourceURL=webpack://achtvier-blocks/multi_./src/index.js_./src/style.scss_./src/editor.scss?");

/***/ })

/******/ });
});