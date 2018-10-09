/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api1.0/element-finder.ts":
/*!**************************************!*\
  !*** ./src/api1.0/element-finder.ts ***!
  \**************************************/
/*! exports provided: ElementFinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFinder", function() { return ElementFinder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElementFinder =
/*#__PURE__*/
function () {
  function ElementFinder() {
    _classCallCheck(this, ElementFinder);
  }

  _createClass(ElementFinder, [{
    key: "find",
    value: function find(value) {
      var firstChar = value.charAt(0);
      var newCollection = [];

      if (firstChar === ".") {
        var className = value.substr(1, value.length);
        var collection = document.getElementsByClassName(className);
        var len = collection.length;

        for (var index = 0; index < len; index++) {
          var element = collection.item(index);
          newCollection.push(element);
        }
      } else if (firstChar === "#") {
        var idName = value.substr(1, value.length);

        var _element = document.getElementById(idName);

        if (_element !== null) {
          newCollection.push(_element);
        }
      } else {
        var nodeList = document.getElementsByTagName(value);
        var _len = nodeList.length;

        for (var _index = 0; _index < _len; _index++) {
          var _element2 = nodeList[_index];
          newCollection.push(_element2);
        }
      }

      return newCollection;
    }
  }]);

  return ElementFinder;
}();

/***/ }),

/***/ "./src/api2.0/element-finder-adapter-1.0.ts":
/*!**************************************************!*\
  !*** ./src/api2.0/element-finder-adapter-1.0.ts ***!
  \**************************************************/
/*! exports provided: ElementFinderAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFinderAdapter", function() { return ElementFinderAdapter; });
/* harmony import */ var _element_finder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-finder */ "./src/api2.0/element-finder.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ElementFinderAdapter =
/*#__PURE__*/
function () {
  function ElementFinderAdapter() {
    _classCallCheck(this, ElementFinderAdapter);

    _defineProperty(this, "finder", void 0);

    this.finder = new _element_finder__WEBPACK_IMPORTED_MODULE_0__["ElementFinder"]();
  }

  _createClass(ElementFinderAdapter, [{
    key: "find",
    value: function find(value) {
      var firstChar = value.charAt(0);

      if (firstChar === ".") {
        var className = value.substr(1, value.length);
        return this.finder.findByClassName(className);
      } else if (firstChar === "#") {
        var idName = value.substr(1, value.length);
        return this.finder.findById(idName);
      }

      return this.finder.findByTagName(value);
    }
  }]);

  return ElementFinderAdapter;
}();

/***/ }),

/***/ "./src/api2.0/element-finder.ts":
/*!**************************************!*\
  !*** ./src/api2.0/element-finder.ts ***!
  \**************************************/
/*! exports provided: ElementFinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFinder", function() { return ElementFinder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElementFinder =
/*#__PURE__*/
function () {
  function ElementFinder() {
    _classCallCheck(this, ElementFinder);
  }

  _createClass(ElementFinder, [{
    key: "findById",
    value: function findById(value) {
      var collaction = [];
      var element = document.getElementById(value);

      if (element !== null) {
        collaction.push(element);
      }

      return collaction;
    }
  }, {
    key: "findByClassName",
    value: function findByClassName(value) {
      var collaction = [];
      var lists = document.getElementsByClassName(value);
      var len = lists.length;

      for (var index = 0; index < len; index++) {
        var element = lists.item(index);
        collaction.push(element);
      }

      return collaction;
    }
  }, {
    key: "findByTagName",
    value: function findByTagName(value) {
      var collaction = [];
      var nodeList = document.getElementsByTagName(value);
      var len = nodeList.length;

      for (var index = 0; index < len; index++) {
        var element = nodeList[index];
        collaction.push(element);
      }

      return collaction;
    }
  }]);

  return ElementFinder;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api1_0_element_finder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api1.0/element-finder */ "./src/api1.0/element-finder.ts");
/* harmony import */ var _api2_0_element_finder_adapter_1_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api2.0/element-finder-adapter-1.0 */ "./src/api2.0/element-finder-adapter-1.0.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var api1p0Finder = new _api1_0_element_finder__WEBPACK_IMPORTED_MODULE_0__["ElementFinder"]();
      this.appendText(" Using v1.0 api for ID ref ", api1p0Finder, "#greeting");
      this.appendText(" Using v1.0 api for class ref", api1p0Finder, ".greet");
      this.appendText(" Using v1.0 api for tag ref", api1p0Finder, "a");
      var api2p0Finder = new _api2_0_element_finder_adapter_1_0__WEBPACK_IMPORTED_MODULE_1__["ElementFinderAdapter"]();
      this.appendText(" Using v2.0 api for ID ref ", api2p0Finder, "#greeting2");
      this.appendText(" Using v2.0 api for class ref", api2p0Finder, ".greet2");
      this.appendText(" Using v2.0 api for tag ref", api2p0Finder, "u");
    }
  }, {
    key: "appendText",
    value: function appendText(text, finder, keyword) {
      var list = finder.find(keyword);
      list.forEach(function (value) {
        value.innerText = text;
      });
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaTEuMC9lbGVtZW50LWZpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpMi4wL2VsZW1lbnQtZmluZGVyLWFkYXB0ZXItMS4wLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkyLjAvZWxlbWVudC1maW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkVsZW1lbnRGaW5kZXIiLCJ2YWx1ZSIsImZpcnN0Q2hhciIsImNoYXJBdCIsIm5ld0NvbGxlY3Rpb24iLCJjbGFzc05hbWUiLCJzdWJzdHIiLCJsZW5ndGgiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuIiwiaW5kZXgiLCJlbGVtZW50IiwiaXRlbSIsInB1c2giLCJpZE5hbWUiLCJnZXRFbGVtZW50QnlJZCIsIm5vZGVMaXN0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJFbGVtZW50RmluZGVyQWRhcHRlciIsImZpbmRlciIsImZpbmRCeUNsYXNzTmFtZSIsImZpbmRCeUlkIiwiZmluZEJ5VGFnTmFtZSIsImNvbGxhY3Rpb24iLCJsaXN0cyIsIkJvb3RzdHJhcCIsImFwaTFwMEZpbmRlciIsImFwcGVuZFRleHQiLCJhcGkycDBGaW5kZXIiLCJ0ZXh0Iiwia2V5d29yZCIsImxpc3QiLCJmaW5kIiwiZm9yRWFjaCIsImlubmVyVGV4dCIsImJvb3QiLCJpbml0aWFsaXplIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7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QWFWLE0sRUFBdUJXLE8sRUFBZTtBQUMxRCxVQUFJQyxJQUF1QixHQUFHWixNQUFNLENBQUNhLElBQVAsQ0FBWUYsT0FBWixDQUE5QjtBQUNBQyxVQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDbEMsS0FBRCxFQUF1QjtBQUNoQ0EsYUFBSyxDQUFDbUMsU0FBTixHQUFrQkwsSUFBbEI7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQUdMLElBQUlNLElBQUksR0FBRyxJQUFJVixTQUFKLEVBQVg7QUFDQVUsSUFBSSxDQUFDQyxVQUFMLEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSUVsZW1lbnRGaW5kZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVsZW1lbnQtZmluZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudEZpbmRlciBpbXBsZW1lbnRzIElFbGVtZW50RmluZGVye1xyXG4gICAgZmluZCh2YWx1ZTpzdHJpbmcpOkFycmF5PEhUTUxFbGVtZW50PntcclxuICAgICAgICBsZXQgZmlyc3RDaGFyID0gdmFsdWUuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuZXdDb2xsZWN0aW9uOkFycmF5PEhUTUxFbGVtZW50PiA9IFtdO1xyXG4gICAgICAgIGlmKGZpcnN0Q2hhciA9PT0gIFwiLlwiKXtcclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTpzdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGNvbGxlY3Rpb246SFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgbGV0IGxlbjpudW1iZXIgPSBjb2xsZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDpIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jb2xsZWN0aW9uLml0ZW0oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbmV3Q29sbGVjdGlvbi5wdXNoKDxIVE1MRWxlbWVudD5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihmaXJzdENoYXIgPT09IFwiI1wiKXtcclxuICAgICAgICAgICAgbGV0IGlkTmFtZTpzdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQ6SFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuZXdDb2xsZWN0aW9uLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlTGlzdDpOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgbGVuOm51bWJlciA9IG5vZGVMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDpIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5ub2RlTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBuZXdDb2xsZWN0aW9uLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbGxlY3Rpb25cclxuICAgIH1cclxufSIsImltcG9ydCB7IEVsZW1lbnRGaW5kZXIgfSBmcm9tIFwiLi9lbGVtZW50LWZpbmRlclwiO1xyXG5pbXBvcnQgeyBJRWxlbWVudEZpbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktZWxlbWVudC1maW5kZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRWxlbWVudEZpbmRlckFkYXB0ZXIgaW1wbGVtZW50cyBJRWxlbWVudEZpbmRlciB7XHJcbiAgICBwcml2YXRlIGZpbmRlcjpFbGVtZW50RmluZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5maW5kZXIgPSBuZXcgRWxlbWVudEZpbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQodmFsdWU6c3RyaW5nKTpBcnJheTxIVE1MRWxlbWVudD57XHJcbiAgICAgICAgbGV0IGZpcnN0Q2hhcjpzdHJpbmcgPSB2YWx1ZS5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYoZmlyc3RDaGFyID09PVwiLlwiKXtcclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTpzdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZGVyLmZpbmRCeUNsYXNzTmFtZShjbGFzc05hbWUpXHJcbiAgICAgICAgfSBlbHNlIGlmKGZpcnN0Q2hhciA9PT0gXCIjXCIpIHtcclxuICAgICAgICAgICAgbGV0IGlkTmFtZTpzdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZGVyLmZpbmRCeUlkKGlkTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRlci5maW5kQnlUYWdOYW1lKHZhbHVlKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbGVtZW50RmluZGVyIHtcclxuICAgIFxyXG4gICAgZmluZEJ5SWQodmFsdWU6c3RyaW5nKTpBcnJheTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCBjb2xsYWN0aW9uOkFycmF5PEhUTUxFbGVtZW50PiA9IFtdO1xyXG4gICAgICAgIGxldCBlbGVtZW50OkhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuICAgICAgICBpZihlbGVtZW50ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgY29sbGFjdGlvbi5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sbGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlDbGFzc05hbWUodmFsdWU6c3RyaW5nKTpBcnJheTxIVE1MRWxlbWVudD57XHJcbiAgICAgICAgbGV0IGNvbGxhY3Rpb246QXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107XHJcbiAgICAgICAgbGV0IGxpc3RzOkhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICBsZXQgbGVuOm51bWJlciA9IGxpc3RzLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpc3RzLml0ZW0oaW5kZXgpO1xyXG4gICAgICAgICAgICBjb2xsYWN0aW9uLnB1c2goPEhUTUxFbGVtZW50PmVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xsYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRCeVRhZ05hbWUodmFsdWU6c3RyaW5nKTpBcnJheTxIVE1MRWxlbWVudD57XHJcbiAgICAgICAgbGV0IGNvbGxhY3Rpb246QXJyYXk8SFRNTEVsZW1lbnQ+ID0gW107XHJcbiAgICAgICAgbGV0IG5vZGVMaXN0Ok5vZGVMaXN0T2Y8RWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGxlbjpudW1iZXIgPSBub2RlTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6SFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+bm9kZUxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29sbGFjdGlvbi5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbGxhY3Rpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRWxlbWVudEZpbmRlciB9IGZyb20gXCIuL2ludGVyZmFjZXMvaS1lbGVtZW50LWZpbmRlclwiO1xuaW1wb3J0IHsgRWxlbWVudEZpbmRlciB9IGZyb20gXCIuL2FwaTEuMC9lbGVtZW50LWZpbmRlclwiO1xuaW1wb3J0IHsgRWxlbWVudEZpbmRlckFkYXB0ZXIgfSBmcm9tIFwiLi9hcGkyLjAvZWxlbWVudC1maW5kZXItYWRhcHRlci0xLjBcIjtcblxuY2xhc3MgQm9vdHN0cmFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7ICB9XG5cbiAgICBpbml0aWFsaXplKCl7XG4gICAgICAgIGxldCBhcGkxcDBGaW5kZXI6SUVsZW1lbnRGaW5kZXIgPSBuZXcgRWxlbWVudEZpbmRlcigpO1xuICAgICAgICB0aGlzLmFwcGVuZFRleHQoXCIgVXNpbmcgdjEuMCBhcGkgZm9yIElEIHJlZiBcIiwgYXBpMXAwRmluZGVyLCBcIiNncmVldGluZ1wiKTtcbiAgICAgICAgdGhpcy5hcHBlbmRUZXh0KFwiIFVzaW5nIHYxLjAgYXBpIGZvciBjbGFzcyByZWZcIiwgYXBpMXAwRmluZGVyLCBcIi5ncmVldFwiKTtcbiAgICAgICAgdGhpcy5hcHBlbmRUZXh0KFwiIFVzaW5nIHYxLjAgYXBpIGZvciB0YWcgcmVmXCIsIGFwaTFwMEZpbmRlciwgXCJhXCIpO1xuXG5cbiAgICAgICAgbGV0IGFwaTJwMEZpbmRlcjpJRWxlbWVudEZpbmRlciA9IG5ldyBFbGVtZW50RmluZGVyQWRhcHRlcigpO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kVGV4dChcIiBVc2luZyB2Mi4wIGFwaSBmb3IgSUQgcmVmIFwiLCBhcGkycDBGaW5kZXIsIFwiI2dyZWV0aW5nMlwiKTtcbiAgICAgICAgdGhpcy5hcHBlbmRUZXh0KFwiIFVzaW5nIHYyLjAgYXBpIGZvciBjbGFzcyByZWZcIiwgYXBpMnAwRmluZGVyLCBcIi5ncmVldDJcIik7XG4gICAgICAgIHRoaXMuYXBwZW5kVGV4dChcIiBVc2luZyB2Mi4wIGFwaSBmb3IgdGFnIHJlZlwiLCBhcGkycDBGaW5kZXIsIFwidVwiKTtcblxuICAgIH1cblxuICAgIGFwcGVuZFRleHQodGV4dDpzdHJpbmcsIGZpbmRlcjpJRWxlbWVudEZpbmRlciwga2V5d29yZDpzdHJpbmcpe1xuICAgICAgICBsZXQgbGlzdDpBcnJheTxIVE1MRWxlbWVudD4gPSBmaW5kZXIuZmluZChrZXl3b3JkKTtcbiAgICAgICAgbGlzdC5mb3JFYWNoKCh2YWx1ZTpIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmFsdWUuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgfSlcbiAgICB9XG59ICAgXG5cbmxldCBib290ID0gbmV3IEJvb3RzdHJhcCgpO1xuYm9vdC5pbml0aWFsaXplKCk7ICAiXSwic291cmNlUm9vdCI6IiJ9