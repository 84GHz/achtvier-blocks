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
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n//import edit from './edit';\n\n/**\n * External dependencies\n */\nconst {\n  isUndefined,\n  pickBy\n} = 'lodash';\nconst classnames = 'wp.classnames';\n/**\n * WordPress dependencies\n */\n\nconst {\n  Component,\n  Fragment\n} = 'wp.element';\nconst {\n  PanelBody,\n  Placeholder,\n  QueryControls,\n  RangeControl,\n  Spinner,\n  ToggleControl,\n  Toolbar\n} = 'wp.components';\nconst apiFetch = 'wp.api-fetch';\nconst {\n  addQueryArgs\n} = 'wp.url';\nconst {\n  __\n} = 'wp.i18n';\nconst {\n  dateI18n,\n  format,\n  __experimentalGetSettings\n} = 'wp.date';\nconst {\n  decodeEntities\n} = 'wp.html-entities';\nconst {\n  InspectorControls,\n  BlockAlignmentToolbar,\n  BlockControls\n} = 'wp.editor';\nconst {\n  withSelect\n} = 'wp.data';\nconst name = 'achtvier-blocks/achtvier-beitraege';\nconst settings = {\n  title: __('Beiträge'),\n  description: __('Display a list of your most recent posts.'),\n  icon: \"dashicons-list-view\",\n  category: 'achtvier-beitraege',\n  keywords: [__('recent posts')],\n  supports: {\n    html: false\n  },\n\n  edit() {\n    return null;\n  },\n\n  save() {\n    return null;\n  }\n\n};\n\n//# sourceURL=webpack://achtvier-blocks/./src/index.js?");

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