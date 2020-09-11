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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header.js */ "./src/js/header.js");
/* harmony import */ var _js_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/comments.js */ "./src/js/comments.js");



/***/ }),

/***/ "./src/js/comments.js":
/*!****************************!*\
  !*** ./src/js/comments.js ***!
  \****************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/js/localStorage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FotmatDate = /*#__PURE__*/function () {
  function FotmatDate() {
    _classCallCheck(this, FotmatDate);
  }

  _createClass(FotmatDate, null, [{
    key: "getDate",
    value: function getDate(date) {
      this.hours = "0 ".concat(date.getHours());
      this.minutes = "0 ".concat(date.getMinutes());
      return "".concat(this.hours.slice(-2), ":").concat(this.minutes.slice(-2));
    }
  }]);

  return FotmatDate;
}();

var Comment = /*#__PURE__*/function () {
  function Comment(input, form, textarea, commentsBox) {
    _classCallCheck(this, Comment);

    this.comments = [];
    this.date = FotmatDate.getDate(new Date());
    this.input = document.getElementById(input);
    this.form = document.getElementById(form);
    this.textarea = document.getElementById(textarea);
    this.commentsBox = document.getElementById(commentsBox);
  }

  _createClass(Comment, [{
    key: "addComment",
    value: function addComment(name, comment) {
      if (name !== '' && comment !== '') {
        var data = {
          id: Date.now(),
          name: name,
          comment: comment
        };
        this.comments.push(data);
        this.addCommentsToLocalStorage(this.comments);
        this.input.value = '';
        this.textarea.value = '';
      }
    }
  }, {
    key: "addListener",
    value: function addListener() {
      var _this = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this.addComment(_this.input.value, _this.textarea.value);
      });
    }
  }, {
    key: "addCommentsToLocalStorage",
    value: function addCommentsToLocalStorage(comments) {
      _localStorage_js__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].addToLocalStorage("commentsDate", comments);
      this.render();
    }
  }, {
    key: "getCommentsFromLocalStorage",
    value: function getCommentsFromLocalStorage(key) {
      if (_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].getFromLocalStorage(key)) {
        this.comments = JSON.parse(_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"].getFromLocalStorage(key));
        this.render();
        return this;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.commentsBox.innerHTML = '';
      this.comments.forEach(function (point) {
        var renderHTML = "<div class=\"comments__block\">\n                     <div class=\"comments__name-date\">\n                         <p>".concat(point.name, "</p>\n                         <p class=\"sub-title\">").concat(_this2.date, "</p>\n                    </div>\n                    <div class=\"sub-title\">").concat(point.comment, "</div>\n                </div>");

        _this2.commentsBox.insertAdjacentHTML("afterbegin", renderHTML);
      });
    }
  }]);

  return Comment;
}();
var newComment = new Comment('input', 'form', 'textarea', 'commentsBox');
newComment.getCommentsFromLocalStorage("commentsDate");
newComment.addListener();

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: scrolledHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrolledHeader", function() { return scrolledHeader; });
function scrolledHeader() {
  var homeHeader = document.getElementById('home-header');

  if (homeHeader) {
    window.onscroll = function () {
      var scrolled = window.pageXOffset || document.documentElement.scrollTop;

      if (scrolled > 60) {
        homeHeader.style.backgroundColor = "black";
      } else {
        homeHeader.style.backgroundColor = "transparent";
      }
    };
  }
}
scrolledHeader();

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, null, [{
    key: "addToLocalStorage",
    value: function addToLocalStorage(item, data) {
      localStorage.setItem(item, JSON.stringify(data));
    }
  }, {
    key: "getFromLocalStorage",
    value: function getFromLocalStorage(key) {
      return localStorage.getItem(key);
    }
  }]);

  return LocalStorage;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map