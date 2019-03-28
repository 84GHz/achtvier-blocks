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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.js */ \"./src/tab.js\");\n/* harmony import */ var _tab_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tab_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/**\n * BLOCK: achtvier-guten-tabs\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//  Import CSS.\n //import memoize from 'memize';\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    RangeControl = _wp$components.RangeControl,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\nvar getTabs = function getTabs(_ref) {\n  var tabsCount = _ref.tabsCount,\n      tabsSettings = _ref.tabsSettings;\n  console.log(tabsSettings);\n  var result = [];\n\n  for (var k = 1; k <= tabsCount; k++) {\n    result.push({\n      label: tabsSettings['tab_' + k] ? tabsSettings['tab_' + k].label : sprintf(__('Tab %d'), k),\n      number: k\n    });\n  }\n\n  return result;\n};\n/**\n * Returns the layouts configuration for a given number of tabs.\n *\n * @param {number} attributes tabs attributes.\n *\n * @return {Object[]} Tabs layout configuration.\n */\n\n\nvar getTabsTemplate = function getTabsTemplate(attributes) {\n  var tabsCount = attributes.tabsCount,\n      blockID = attributes.blockID;\n  var result = [];\n  var active = \"\";\n\n  for (var k = 1; k <= tabsCount; k++) {\n    if (k == 1) {\n      active = \"active\";\n    }\n\n    result.push(['achtvier/bettertab', {\n      id: 'tab-' + k,\n      active: active\n    }]);\n    active = \"\";\n  }\n\n  console.log(result);\n  return result;\n};\n\nvar tabtemplate = function tabtemplate(tabid, isactive) {\n  return [['achtvier/bettertab', {\n    id: tabid,\n    active: isactive\n  }]];\n};\n\nvar tabtemplate2 = function tabtemplate2(itemtabs) {\n  function idize(headerraw) {\n    var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n    return idheader;\n  }\n\n  var ret_arr = [];\n  var active = true;\n  itemtabs.forEach(function (tab) {\n    var singletab;\n\n    if (active) {\n      singletab = tabtemplate(idize(tab.linkid), \"active\");\n      active = false;\n    } else {\n      singletab = tabtemplate(idize(tab.linkid), \"\");\n    }\n\n    console.log(singletab);\n    ret_arr.push(singletab[0]);\n  });\n  console.log(ret_arr);\n  return ret_arr;\n};\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n\nregisterBlockType('achtvier-blocks/bettertabs', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('Tabs'),\n  // Block title.\n  category: 'achtvier-blocks',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('achtvier-better-tabs')],\n  attributes: {\n    tabItems: {\n      type: \"children\",\n      default: [{\n        header: __('Tab 1'),\n        linkid: 'id1'\n      }, {\n        header: __('Tab 2'),\n        linkid: 'id2'\n      }]\n    },\n    changed: {\n      type: 'boolean',\n      default: false\n    },\n    blockID: {\n      type: 'string'\n    },\n    tabsCount: {\n      type: 'number',\n      default: 2\n    },\n    tabActive: {\n      type: 'number',\n      default: 1\n    },\n    tabsSettings: {\n      type: 'object',\n      default: {}\n    }\n  },\n\n  /**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n  edit: function edit(props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes;\n\n    if (typeof props.attributes.blockID == \"undefined\") {\n      setAttributes({\n        blockID: props.clientId\n      });\n      console.log(props.attributes.blockID);\n    }\n\n    function newTab() {\n      var output = _toConsumableArray(tabItems);\n\n      output.push({\n        header: \"New Tab\",\n        linkid: addid()\n      });\n      return output;\n    }\n\n    console.log(props.attributes.tabsSettings);\n    var tabs = getTabs(attributes, props.clientId);\n    var tabsCount = props.attributes.tabsCount;\n    var tabItems = props.attributes.tabItems;\n    var tabsSettings = props.attributes.tabsSettings;\n\n    function idize(headerraw) {\n      var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n      return idheader;\n    }\n\n    function addid() {\n      return (+new Date()).toString(36);\n    }\n\n    function updateHeader(headernew, index) {\n      tabItems[index].header = headernew;\n    }\n\n    console.log(props);\n    return React.createElement(Fragment, null, React.createElement(InspectorControls, null, React.createElement(PanelBody, null, React.createElement(RangeControl, {\n      label: __('Tabs'),\n      value: tabsCount,\n      onChange: function onChange(value) {\n        return setAttributes({\n          tabsCount: value\n        });\n      },\n      min: 1,\n      max: 25\n    }))), React.createElement(\"div\", {\n      className: props.className,\n      style: {\n        border: 'none'\n      }\n    }, React.createElement(\"ul\", {\n      className: \"avgb-tabs-panel\"\n    }, tabs.map(function (val) {\n      return React.createElement(\"span\", {\n        className: \"bettertabs-tab\"\n      }, React.createElement(RichText, {\n        tagName: \"a\",\n        \"data-tab\": val.number,\n        placeholder: __('Tab label…'),\n        className: \"bettertabs-tab\",\n        value: val.label,\n        unstableOnFocus: function unstableOnFocus() {\n          return setAttributes({\n            tabActive: val.number\n          });\n        },\n        onChange: function onChange(value) {\n          if (typeof tabs[val.number - 1] !== 'undefined') {\n            if (typeof tabsSettings[\"tab_\".concat(val.number)] === 'undefined') {\n              tabsSettings[\"tab_\".concat(val.number)] = {};\n            }\n\n            value = value.replace(/[<]br[^>]*[>]/gi, \"\");\n            tabsSettings[\"tab_\".concat(val.number)].label = value;\n            setAttributes({\n              tabsSettings: Object.assign({}, tabsSettings)\n            });\n          }\n        },\n        formattingControls: ['bold', 'italic', 'strikethrough'],\n        inlineToolbar: true,\n        key: \"tab_button_\".concat(val.number)\n      }));\n    })), React.createElement(\"div\", {\n      id: props.attributes.blockID\n    }, React.createElement(InnerBlocks, {\n      template: getTabsTemplate(attributes),\n      templateLock: \"all\",\n      allowedBlocks: ['achtvier/bettertab']\n    }))));\n  },\n\n  /**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n  save: function save(props) {\n    var tabItems = props.attributes.tabItems;\n    var tabs = getTabs(props.attributes);\n\n    function idize(headerraw) {\n      var idheader = headerraw.replace(/\\s+/g, '-').toLowerCase();\n      return idheader;\n    }\n\n    return React.createElement(\"div\", {\n      className: props.className + \" container\"\n    }, React.createElement(\"div\", {\n      className: \"row\"\n    }, React.createElement(\"div\", {\n      className: \"col-lg-3 col-md-6 col-sm-12\"\n    }, React.createElement(\"ul\", {\n      className: \"nav nav-tabs--vertical\",\n      id: 'achtvier-guten-tabs-' + props.attributes.blockID,\n      role: \"tablist\"\n    }, tabs.map(function (tabItem) {\n      return React.createElement(\"li\", {\n        className: \"nav-item\"\n      }, React.createElement(\"a\", {\n        href: \"#tab-\" + tabItem.number,\n        className: \"nav-link\",\n        \"data-toggle\": \"tab\",\n        role: \"tab\"\n      }, tabItem.label));\n    }))), React.createElement(\"div\", {\n      className: \"col-lg-9 col-md-6 col-sm-12 tab-content\"\n    }, React.createElement(InnerBlocks.Content, null))));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://achtvier-blocks/./src/style.scss?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * WordPress dependencies\n */\nvar InnerBlocks = wp.editor.InnerBlocks;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nregisterBlockType('achtvier/bettertab', {\n  title: __('Dynamic Tab'),\n  parent: ['achtvier/bettertabs'],\n  icon: 'columns',\n  description: __('A single tab within a tabs block.'),\n  category: 'achtvier-blocks',\n  supports: {\n    inserter: false\n  },\n  attributes: {\n    id: {\n      type: \"string\"\n    },\n    active: {\n      type: \"string\",\n      default: \"\"\n    }\n  },\n  edit: function edit(props) {\n    return React.createElement(\"div\", {\n      id: props.attributes.id,\n      className: \"inner-tabs\"\n    }, React.createElement(InnerBlocks, {\n      templateLock: false\n    }));\n  },\n  save: function save(props) {\n    return React.createElement(\"div\", {\n      id: props.attributes.id,\n      className: props.attributes.active + \" tab-pane\"\n    }, React.createElement(InnerBlocks.Content, null));\n  }\n});\n\n//# sourceURL=webpack://achtvier-blocks/./src/tab.js?");

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