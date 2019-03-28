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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ \"./src/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.js */ \"./src/item.js\");\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_item_js__WEBPACK_IMPORTED_MODULE_2__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/**\n * BLOCK: achtvier-accordeon\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InnerBlocks = _wp$editor.InnerBlocks;\nvar _wp$components = wp.components,\n    Dashicon = _wp$components.Dashicon,\n    Tooltip = _wp$components.Tooltip;\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nvar cardtemplate = function cardtemplate(cardid, isactive) {\n  return [['achtvier/accordeoncard', {\n    id: cardid,\n    active: isactive\n  }]];\n};\n\nvar cardtemplate2 = function cardtemplate2(itemcards) {\n  function idize(headerraw) {\n    var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n    return idheader;\n  }\n\n  var ret_arr = [];\n  console.log(itemcards.length);\n  var active = true;\n  itemcards.forEach(function (tab) {\n    var singlecard;\n\n    if (active) {\n      singlecard = cardtemplate(idize(tab.linkid), \"active\");\n      active = false;\n    } else {\n      singlecard = cardtemplate(idize(tab.linkid), \"\");\n    }\n\n    ret_arr.push(singlecard[0]);\n  });\n  console.log(ret_arr);\n  return ret_arr;\n};\n\nregisterBlockType('achtvier/block-accordeon', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('achtvier-accordeon '),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-accordeon')],\n  attributes: {\n    cardItems: {\n      type: \"children\",\n      default: [{\n        header: __('Titel'),\n        linkid: 'id1'\n      }, {\n        header: __('Titel'),\n        linkid: 'id2'\n      }]\n    },\n    changed: {\n      type: 'boolean',\n      default: false\n    },\n    blockID: {\n      type: 'string'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  edit: function edit(props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes;\n\n    if (props.attributes.blockID) {\n      props.setAttributes({\n        blockID: props.clientId\n      });\n    }\n\n    var cardItems = props.attributes.cardItems;\n\n    function idize(headerraw) {\n      var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n      return idheader;\n    }\n\n    function addid() {\n      return (+new Date()).toString(36);\n    }\n\n    function updateHeader(headernew, index) {\n      cardItems[index].header = headernew;\n    }\n\n    function getHeader() {\n      var newcardindex = props.attributes.cardItems.length + 1;\n      return \"Card \" + newcardindex;\n    }\n\n    function newCard() {\n      var output = _toConsumableArray(cardItems);\n\n      console.log(output);\n      output.push({\n        header: \"New Card\",\n        linkid: addid()\n      });\n      console.log(\"outupt: \" + output);\n      return output;\n    }\n\n    function removeCard(idx) {\n      var arr = cardItems;\n      arr.splice(idx, 1);\n      setAttributes({\n        cardItems: arr\n      });\n    }\n\n    return React.createElement(\"div\", {\n      className: props.className + \" container\"\n    }, React.createElement(InnerBlocks, {\n      template: cardtemplate2(attributes.cardItems),\n      templateLock: \"all\",\n      allowedBlocks: ['achtvier/accordeoncard']\n    }), React.createElement(\"span\", {\n      className: \"avgb-card avgb-add-card ui-state-default\"\n    }, React.createElement(Tooltip, {\n      text: __('Card hinzufügen')\n    }, React.createElement(\"span\", {\n      onClick: function onClick() {\n        return setAttributes({\n          cardItems: newCard()\n        });\n      }\n    }, React.createElement(Dashicon, {\n      icon: \"plus-alt\"\n    })))));\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  save: function save(props) {\n    return React.createElement(\"div\", {\n      className: props.className + \" container\",\n      id: props.attributes.blockID\n    }, React.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * WordPress dependencies\n */\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InnerBlocks = _wp$editor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nregisterBlockType('achtvier/accordeoncard', {\n  title: __('Dynamic accordeon Card'),\n  parent: ['achtvier/block-accordeon'],\n  icon: 'columns',\n  description: __('A single accordeon element'),\n  category: 'achtvier-blocks',\n  attributes: {\n    id: {\n      type: \"string\",\n      default: \"Test test test\"\n    },\n    cardtitle: {\n      type: \"string\",\n      default: \"Title\"\n    },\n    active: {\n      type: \"string\",\n      default: \"\"\n    }\n  },\n  edit: function edit(props) {\n    var updateHeader = function updateHeader(headernew) {\n      headernew = headernew.replace(/^(<br\\s*\\/?>)+/, '');\n      headernew = headernew.replace(/[<]br[^>]*[>]/gi, \"\");\n      props.setAttributes({\n        cardtitle: headernew\n      });\n    };\n\n    return React.createElement(\"div\", {\n      class: \"card\"\n    }, React.createElement(\"div\", {\n      id: props.attributes.id,\n      class: \"collapse show\"\n    }, React.createElement(\"div\", {\n      className: \"card-header\"\n    }, React.createElement(RichText, {\n      value: props.attributes.cardtitle,\n      onChange: updateHeader,\n      placeholder: __('Card Titel…')\n    })), React.createElement(\"div\", {\n      class: \"card-body\"\n    }, React.createElement(InnerBlocks, {\n      templateLock: false\n    }))));\n  },\n  save: function save(props) {\n    return React.createElement(\"div\", {\n      class: \"card\"\n    }, React.createElement(\"div\", {\n      class: \"card-header\"\n    }, React.createElement(\"a\", {\n      class: \"card-link\",\n      \"data-toggle\": \"collapse\",\n      href: '#' + props.attributes.id\n    }, props.attributes.cardtitle)), React.createElement(\"div\", {\n      id: props.attributes.id,\n      class: \"collapse\"\n    }, React.createElement(\"div\", {\n      class: \"card-body\"\n    }, React.createElement(InnerBlocks.Content, null))));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/item.js?");

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