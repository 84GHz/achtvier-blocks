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
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * BLOCK: achtvier-kachel\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//  Import CSS.\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorAdvancedControls = _wp$editor.InspectorAdvancedControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    BlockControls = _wp$editor.BlockControls,\n    MediaUpload = _wp$editor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    RangeControl = _wp$components.RangeControl,\n    TextControls = _wp$components.TextControls,\n    ColorPicker = _wp$components.ColorPicker;\nvar Fragment = wp.element.Fragment;\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('achtvier/focuspoint-image', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Fokuspunkt Bild'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-focuspoint')],\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string'\n    },\n    showTextBlock: {\n      type: 'boolean'\n    },\n    focusPointX: {\n      type: 'number'\n    },\n    focusPointY: {\n      type: 'number'\n    },\n    imageWidth: {\n      type: 'number'\n    },\n    imageHeight: {\n      type: 'number'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  edit: function edit(props) {\n    var getImageButton = function getImageButton(openEvent) {\n      return React.createElement(\"div\", {\n        className: \"button-container\"\n      }, React.createElement(Button, {\n        onClick: openEvent,\n        className: \"button button-large\"\n      }, \"HGBild\"));\n    };\n\n    var setAttributes = props.setAttributes,\n        attributes = props.attributes,\n        className = props.className;\n\n    function onFocusPointXChange(changes) {\n      setAttributes({\n        focusPointX: changes\n      });\n    }\n\n    function onFocusPointYChange(changes) {\n      setAttributes({\n        focusPointY: changes\n      });\n    }\n\n    function onImageWidthChange(changes) {\n      setAttributes({\n        imageWidth: changes\n      });\n    }\n\n    function onImageHeightChange(changes) {\n      setAttributes({\n        imageHeight: changes\n      });\n    }\n\n    function onLinkURLChange(changes) {\n      setAttributes({\n        linkURL: changes\n      });\n    }\n\n    function onLinkTextChange(changes) {\n      setAttributes({\n        linkText: changes\n      });\n    }\n\n    function onShowTextBlockChange(changes) {\n      setAttributes({\n        showTextBlock: changes\n      });\n    }\n\n    function onOverlayColorChange(changes) {\n      setAttributes({\n        overlayColor: \"rgba(\" + changes.rgb.r + \",\" + changes.rgb.g + \",\" + changes.rgb.b + \",\" + changes.rgb.a + \")\",\n        overlayTransparency: changes.rgb.a\n      });\n    }\n\n    function onSelectImage(media) {\n      setAttributes({\n        mediaURL: media.url,\n        mediaID: media.id\n      });\n    }\n\n    return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {\n      title: __('Fokuspunkt Bild Einstellungen')\n    }, React.createElement(MediaUpload, {\n      onSelect: onSelectImage,\n      type: \"image\",\n      value: props.attributes.imageID,\n      render: function render(_ref) {\n        var open = _ref.open;\n        return getImageButton(open);\n      }\n    }), React.createElement(ToggleControl, {\n      label: __('Show Text Block'),\n      checked: attributes.showTextBlock,\n      onChange: onShowTextBlockChange\n    }), React.createElement(RangeControl, {\n      label: \"Fokus Point X\",\n      value: props.attributes.focusPointX,\n      onChange: onFocusPointXChange,\n      min: -10,\n      max: 10\n    }), React.createElement(RangeControl, {\n      label: \"Fokus Point Y\",\n      value: props.attributes.focusPointY,\n      onChange: onFocusPointYChange,\n      min: -10,\n      max: 10\n    }))), React.createElement(\"div\", {\n      className: props.className,\n      style: {\n        backgroundImage: \"url('\" + props.attributes.mediaURL + \"')\",\n        backgroundSize: 'cover',\n        backgroundPosition: 'center'\n      }\n    }, React.createElement(\"div\", {\n      className: \"focuspoint-textblock-wrapper\"\n    }, React.createElement(InnerBlocks, null)), React.createElement(\"div\", {\n      className: \"atv-hlb\"\n    }, React.createElement(\"h3\", {\n      className: \"atv-miniheader\"\n    }, \"ATELIER VOYAGE\"), React.createElement(\"div\", {\n      className: \"atv-minisubheader\"\n    }, \"The Essence of Travel\"))), React.createElement(\"label\", null, \"achtvier-fokuspunkt-bild\"));\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  save: function save(props) {\n    var getLink = function getLink() {\n      if (props.attributes.showTextBlock) {\n        return React.createElement(\"div\", {\n          className: \"focuspoint-textblock-wrapper\"\n        }, React.createElement(InnerBlocks.Content, null));\n      } else return null;\n    };\n\n    return React.createElement(\"div\", {\n      className: props.className\n    }, React.createElement(\"div\", {\n      className: \"focuspoint-inner-wrapper\"\n    }, React.createElement(\"img\", {\n      src: props.attributes.mediaURL,\n      className: \"focuspoint-pic\",\n      \"data-focus-x\": props.attributes.focusPointX / 10,\n      \"data-focus-y\": props.attributes.focusPointY / 10\n    })), React.createElement(\"div\", {\n      className: \"sliderinfo-wrapper\"\n    }, React.createElement(\"div\", {\n      className: \"focuspoint-textblock-wrapper\"\n    }, React.createElement(InnerBlocks.Content, null)), React.createElement(\"div\", {\n      className: \"atv-hlb\"\n    }, React.createElement(\"div\", {\n      className: \"hlb-inner-wrapper\"\n    }, React.createElement(\"h3\", {\n      className: \"atv-miniheader\"\n    }, \"ATELIER VOYAGE\"), React.createElement(\"div\", {\n      className: \"atv-minisubheader\"\n    }, \"The Essence of Travel\")))));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks/./src/style.scss?");

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