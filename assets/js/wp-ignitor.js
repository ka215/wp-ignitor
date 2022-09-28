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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/_callback.js":
/*!**********************************!*\
  !*** ./src/scripts/_callback.js ***!
  \**********************************/
/*! exports provided: callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callback", function() { return callback; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./src/scripts/_utils.js");
 //import { postData } from './_postData'

var callback = {
  moveInstallPath: function moveInstallPath() {
    var message = 'Currently being processed, please wait.',
        loader = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["renderLoader"])('move-install-path', '#c0c0c0', 120, 60, 5);
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNotice"])(message, loader);
  },
  moveWpConfig: function moveWpConfig() {
    var message = 'Currently being processed, please wait.',
        loader = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["renderLoader"])('move-wp-config', '#c0c0c0', 120, 60, 5);
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNotice"])(message, null, loader);
  },
  selfRedirect: function selfRedirect() {},
  selfReload: function selfReload() {
    window.location.reload(true);
  },
  disableButton: function disableButton() {
    document.querySelector('.wpignitor-dialog .dialog-footer button').disabled = true;
  },
  reloadPreviewHtaccess: function reloadPreviewHtaccess() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(document.getElementById('btn-reload-preview-htaccess'), 'click');
  }
};


/***/ }),

/***/ "./src/scripts/_dialog.js":
/*!********************************!*\
  !*** ./src/scripts/_dialog.js ***!
  \********************************/
/*! exports provided: initDialog, showDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDialog", function() { return initDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDialog", function() { return showDialog; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./src/scripts/_utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Add handler of the dialog
 * @param {}
 * @return {}
 */

function initDialog() {
  Array.prototype.forEach.call(document.querySelectorAll('[data-bind=dialog]'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var self = evt.target,
          opts = {
        title: self.dataset.title || null,
        content: self.dataset.content || null,
        foot: self.dataset.foot || null,
        button: self.dataset.button || null,
        effect: self.dataset.effect || 1,
        size: self.dataset.dialogSize || null,
        reinit: self.dataset.reinit || false,
        persistent: self.dataset.persistent || false,
        shown: self.dataset.shown || null,
        hidden: self.dataset.hidden || null,
        beforeShow: self.dataset.beforeShow || null,
        beforeHide: self.dataset.beforeHide || null
      };

      if (opts.content && Object.prototype.hasOwnProperty.call(window.callback, opts.content)) {
        opts.content = typeof window.callback[opts.content] === 'function' ? window.callback[opts.content]() : window.callback[opts.content];
      }

      showDialog(opts);
    }, false);
  });
}
/*
 * Fix the position of backdrop under the overlay filter
 * @public
 * @param {boolean} isFixed
 * @param {?function} callback
 */


function fixedBackdrop(isFixed) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var isIOS = /iP(hone|(o|a)d)/.test(navigator.userAgent);
  Array.prototype.forEach.call(document.querySelectorAll('[data-fixed-backdrop]'), function (elm) {
    var nowY = window.pageYOffset,
        nowX = window.pageXOffset,
        targetRect = elm.getBoundingClientRect(),
        targetX = targetRect.left + nowX,
        targetY = targetRect.top + nowY,
        enabled = /^(true|1)$/i.test(elm.dataset.fixedBackdrop),
        targetStyle = window.getComputedStyle(elm),
        marginTop = parseInt(targetStyle.getPropertyValue('margin-top'), 10),
        marginLeft = parseInt(targetStyle.getPropertyValue('margin-left'), 10);

    if (!enabled || isIOS) {
      return;
    }

    if (isFixed) {
      elm.classList.add('fixed-backdrop');
      elm.style.top = "".concat(targetY - marginTop, "px"); //`${-1 * nowY}px`

      elm.style.left = "".concat(targetX - marginLeft, "px"); //`${-1 * nowX}px`
    } else {
      elm.classList.remove('fixed-backdrop');
      elm.removeAttribute('style');
      window.scrollTo(-1 * targetX, -1 * targetY);
    }

    if (callback && typeof callback === 'function') {
      //console.log('fixedBackdrop:callback - after Dialog:beforeHide and before Dialog:hidden')
      callback();
    }
  });
}
/*
 * Create new element of dialog for any notifications
 * @public
 * @param {object} options
 */


function generateDialog(options) {
  return new Promise(function (resolve) {
    var dialogs = document.getElementsByClassName('wpignitor-dialog'),
        backdrops = document.getElementsByClassName('dialog-backdrop');

    if (dialogs.length > 0) {
      Array.prototype.forEach.call(dialogs, function (dialog) {
        dialog.remove();
      });
    }

    if (backdrops.length > 0) {
      Array.prototype.forEach.call(backdrops, function (backdrop) {
        backdrop.remove();
      });
    }

    var dialog = document.createElement('div'),
        container = document.createElement('div'),
        backdrop = document.createElement('div'),
        viewWidth = window.innerWidth,
        insertTitle = function insertTitle() {
      var title = options.title ? options.title.toString() : null;

      if (title) {
        var dialogHeader = document.createElement('h3');
        dialogHeader.classList.add('dialog-header');
        dialogHeader.innerHTML = title;
        container.append(dialogHeader);
      }
    },
        insertContent = function insertContent() {
      var content = options.content ? typeof options.content === 'string' && /^\{+.*\}$/.test(options.content) ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseObject"])(options.content) : options.content : null;

      if (content) {
        var dialogBody = document.createElement('div');
        dialogBody.classList.add('dialog-body');

        if (typeof content === 'string') {
          dialogBody.innerHTML = content.replace(/\\(.)/mg, "$1");
        } else if (_typeof(content) === 'object') {
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(content)) {
            dialogBody.append(content);
          } else if (Object.keys(content).length != 0) {
            if (content.remote && content.url) {
              if (content.loader) {
                dialogBody.innerHTML = content.loader.replace(/\\(.)/mg, "$1");
              } else {
                dialogBody.innerHTML = '<div style="text-align:center;color:#ddd;">Now Loading...</div>';
              }

              fetch(content.url, {
                method: content.remote,
                mode: content.mode || 'cors',
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }).then(function (res) {
                return res.json();
              }).then(function (response) {
                //console.log('Success:', JSON.stringify(response))
                dialogBody.innerHTML = response.content;
              }).catch(function (error) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logger"])(error);
              });
            } else if (content[0]) {
              dialogBody.innerHTML = content[0];
            } else {
              // dialogBody.textContent = JSON.stringify(content)
              dialogBody.innerHTML = Object.values(content).join('');
            }
          }
        } else {
          dialogBody.textContent = content;
        }

        container.append(dialogBody);
      }
    },
        insertFoot = function insertFoot() {
      var foot = options.foot ? typeof options.foot === 'string' && /^\{+.*\}$/.test(options.foot) ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseObject"])(options.foot) : options.foot : true,
          dialogFooter = document.createElement('div'),
          dialogButton = document.createElement('button'),
          dialogCallback = function dialogCallback() {
        return true;
      },
          buttonClass = options.button || 'button button-secondary',
          //document.body.dataset.dialogButton || undefined,
      noRender = false,
          isOutside = false;

      if (foot) {
        dialogFooter.classList.add('dialog-footer');
        dialogButton.setAttribute('type', 'button');

        if (buttonClass) {
          var _dialogButton$classLi;

          (_dialogButton$classLi = dialogButton.classList).add.apply(_dialogButton$classLi, _toConsumableArray(buttonClass.split(' ')));
        }

        if (typeof foot === 'string') {
          switch (true) {
            case /^none$/i.test(foot):
              noRender = true;
              break;

            case /^dismiss-outside$/i.test(foot):
              isOutside = true;
              dialogButton.classList.add(foot);
              dialogButton.innerHTML = '<span title="Close"></span>';
              break;

            default:
              dialogButton.innerHTML = foot.replace(/\\(.)/mg, "$1");
              break;
          }
        } else if (_typeof(foot) === 'object') {
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(foot)) {
            dialogButton = foot;
          } else if (Object.keys(foot).length != 0) {
            if (Object.prototype.hasOwnProperty.call(foot, 'class')) {
              var _dialogButton$classLi2;

              dialogButton.removeAttribute('class');

              (_dialogButton$classLi2 = dialogButton.classList).add.apply(_dialogButton$classLi2, _toConsumableArray(foot.class.split(' ')));
            }

            if (Object.prototype.hasOwnProperty.call(foot, 'label')) {
              dialogButton.innerHTML = foot.label.replace(/\\(.)/mg, "$1");
            }

            if (Object.prototype.hasOwnProperty.call(foot, 'callback')) {
              dialogCallback = foot.callback;
            }

            if (Object.prototype.hasOwnProperty.call(foot, '0')) {
              switch (true) {
                case /^none$/i.test(foot[0]):
                  noRender = true;
                  break;

                case /^dismiss-outside$/i.test(foot[0]):
                  isOutside = true;
                  dialogButton.classList.add(foot[0]);
                  dialogButton.innerHTML = '<span title="Close"></span>';
                  break;

                default:
                  dialogButton.innerHTML = foot[0].replace(/\\(.)/mg, "$1");
                  break;
              }
            }
          }
        } else {
          dialogButton.textContent = 'Close';
        }

        if (!noRender) {
          dialogButton.addEventListener('click', function () {
            dialogCallback();
            fixedBackdrop(false, function () {
              dialog.classList.remove('show');
            });
          }, false);

          if (!isOutside) {
            dialogFooter.append(dialogButton);
            container.append(dialogFooter);
          } else {
            container.append(dialogButton);
          }
        }
      }
    },
        callback = function callback(mutationsList, observer) {
      mutationsList.forEach(function (mutation) {
        switch (mutation.type) {
          case 'childList':
            Array.prototype.forEach.call(mutation.addedNodes, function (elm) {
              if (elm.classList && elm.classList.contains('dialog-content')) {
                insertTitle();
                insertContent();
                insertFoot();
                resolve(dialog);
              }
            });
            break;

          case 'attributes':
            if (mutation.oldValue && mutation.target.classList.contains('show')) {
              // Dialog:shown
              if (options.shown && Object.prototype.hasOwnProperty.call(window.callback, options.shown)) {
                if (typeof window.callback[options.shown] === 'function') window.callback[options.shown]();
              }
            } else if (mutation.oldValue) {
              // Dialog:hidden
              if (options.hidden && Object.prototype.hasOwnProperty.call(window.callback, options.hidden)) {
                if (typeof window.callback[options.hidden] === 'function') window.callback[options.hidden]();
              }

              observer.disconnect();
            } else {
              // Dialog:beforeShow
              if (options.beforeShow && Object.prototype.hasOwnProperty.call(window.callback, options.beforeShow)) {
                if (typeof window.callback[options.beforeShow] === 'function') window.callback[options.beforeShow]();
              }
            }

            break;
        }
      });
    },
        observer = new MutationObserver(callback); // Set class of dialog transition effect


    var effect;

    switch (true) {
      case /^(2|slide-?in-right)$/i.test(options.effect):
        effect = 'effect-2';
        break;

      case /^(3|slide-?in-bottom)$/i.test(options.effect):
        effect = 'effect-3';
        break;

      case /^(4|sticky-?up)$/i.test(options.effect):
        effect = 'effect-4';
        break;

      case /^(5|full-?wide)$/i.test(options.effect):
        effect = 'effect-5';
        break;

      default:
        effect = 'effect-1';
        break;
    } // Set class of dialog size


    var size;

    switch (true) {
      case /^(xl|xlarge)$/i.test(options.size):
        size = 'size-xl';
        break;

      case /^(lg|large)$/i.test(options.size):
        size = 'size-lg';
        break;

      case /^(md|medium)$/i.test(options.size):
        size = 'size-md';
        break;

      case /^(sm|small)$/i.test(options.size):
        size = 'size-sm';
        break;

      case /^auto$/i.test(options.size):
      default:
        if (viewWidth < 481) {
          // Small
          size = 'size-xl';
        } else if (viewWidth > 768) {
          // Large
          size = '';
        } else {
          // Medium
          size = 'size-lg';
        }

        break;
    }

    observer.observe(dialog, {
      attributes: true,
      attributeOldValue: true,
      childList: true,
      subtree: true
    }); //observer.observe(dialog, { childList: true, subtree: true })

    dialog.classList.add('wpignitor-dialog', effect);

    if (size !== '') {
      dialog.classList.add(size);
    }

    container.classList.add('dialog-content');
    backdrop.classList.add('dialog-backdrop');
    dialog.append(container);
    document.body.append(dialog);
    document.body.append(backdrop);

    if (!options.persistent) {
      backdrop.addEventListener('click', function () {
        if (dialog.classList.contains('show')) {
          fixedBackdrop(false, function () {
            // Dialog:beforeHide
            if (options.beforeHide && Object.prototype.hasOwnProperty.call(window.callback, options.beforeHide)) {
              if (typeof window.callback[options.beforeHide] === 'function') window.callback[options.beforeHide]();
            }

            dialog.classList.remove('show');
          });
        } else {
          return false;
        }
      }, false);
    }
  });
}
/*
 * Dynamically create dialog for notification and show
 * @public
 * @param {object} options
 */


function putDialog(_x) {
  return _putDialog.apply(this, arguments);
}

function _putDialog() {
  _putDialog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return generateDialog(options);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _putDialog.apply(this, arguments);
}

window.dialogStackTimer = [];
/*
 * Show dialog as wrapper of putDialog
 * @public
 * @param {object} options
 */

function showDialog(options) {
  putDialog(options).then(function (dialog) {
    return setTimeout(function () {
      // Re-init this extension scripts
      if (options.reinit == undefined || options.reinit === true) {
        window.location.reload(true);
      } // Delay by transition animation interval


      dialog.classList.add('show');
      fixedBackdrop(true);
    }, 300);
  }).then(function (timerId) {
    // Prevent the memory leak due to continue timer by setTimeout
    window.dialogStackTimer.push(timerId);
    var loop = window.dialogStackTimer.length - 1,
        i;

    for (i = 0; i < loop; i++) {
      clearTimeout(window.dialogStackTimer.shift());
    }
  });
}



/***/ }),

/***/ "./src/scripts/_fluctuation.js":
/*!*************************************!*\
  !*** ./src/scripts/_fluctuation.js ***!
  \*************************************/
/*! exports provided: initFluctuation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFluctuation", function() { return initFluctuation; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./src/scripts/_utils.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_callback */ "./src/scripts/_callback.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * Add handler of the fluctuation field
 * @param {}
 * @return {}
 */

function initFluctuation() {
  Array.prototype.forEach.call(document.querySelectorAll('.fluctuation'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var self = evt.target,
          fromId = self.dataset.fromId,
          pickElm = document.getElementById(fromId),
          // self.previousElementSibling
      getValue = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(pickElm) ? pickElm.value : null,
          pattern = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(pickElm) ? pickElm.getAttribute('pattern') || null : null,
          insertTo = self.dataset.insertTo,
          //self.getAttribute('data-insert-to'),
      insertOpts = {
        id: self.dataset.insertId,
        //self.getAttribute('data-insert-id'),
        name: self.dataset.insertName,
        // self.getAttribute('data-insert-name'),
        classes: self.dataset.insertClasses,
        // self.getAttribute('data-insert-classes'),
        callback: self.dataset.callback // self.getAttribute('data-callback'),

      };

      if (getValue) {
        if (pattern) {
          var regex = RegExp(pattern);

          if (!regex.test(getValue)) {
            _formatError(pickElm);

            return false;
          }
        }

        pickElm.setAttribute('value', '');
        pickElm.value = '';

        _increaseItem(insertTo, getValue, insertOpts);
      }
    }, false);
  });
  Array.prototype.forEach.call(document.querySelectorAll('[id^="remove-fluctuation-"]'), function (elm) {
    elm.addEventListener('click', function (evt) {
      _decreaseItem(evt.target);
    }, false);
  });
}
/**
 * Increase item
 * @private
 * @param {string} elementId
 * @param {string} value
 * @param {object} options
 */


function _increaseItem(elementId, value, options) {
  var listElm = document.getElementById(elementId);

  if (listElm) {
    var _input$classList;

    var listContainer = document.createElement(['UL', 'OL', 'DL'].includes(listElm.nodeName) ? 'li' : 'div'),
        input = document.createElement('input'),
        button = document.createElement('button'),
        atName = /%d/.test(options.name) ? options.name.replace('%d', listElm.children.length + 1) : options.name;
    input.type = 'text';
    input.id = "".concat(options.id, "-").concat(listElm.children.length + 1);
    input.name = atName;
    input.setAttribute('value', value);

    (_input$classList = input.classList).add.apply(_input$classList, _toConsumableArray(options.classes.split(' ')));

    input.setAttribute('readonly', true);
    button.type = 'button';
    button.id = "remove-fluctuation-".concat(options.id, "-").concat(listElm.children.length + 1);
    button.classList.add('button', 'button-secondary');
    button.setAttribute('aria-label', 'Remove Item');
    button.setAttribute('data-callback', options.callback);
    button.innerHTML = '<i class="mdi mdi-close"></i>';
    button.addEventListener('click', function (evt) {
      _decreaseItem(evt.target);
    }, false);
    listContainer.appendChild(input);
    listContainer.appendChild(button);
    listElm.appendChild(listContainer);
    _callback__WEBPACK_IMPORTED_MODULE_1__["callback"][options.callback]();
  }
}
/**
 * Decrease item
 * @private
 * @param {object} self  A clicked button element
 */


function _decreaseItem(self) {
  var removeElm = self.parentNode,
      _callback = self.dataset.callback || '';

  removeElm.style.opacity = 0;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(301).then(function () {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(removeElm.parentNode)) {
      removeElm.parentNode.removeChild(removeElm);

      if (_callback) {
        _callback__WEBPACK_IMPORTED_MODULE_1__["callback"][_callback]();
      }
    }
  });
}
/**
 * Output error
 * @private
 * @param {object} field  An input field with error
 */


function _formatError(field) {
  var parentElm = field.parentNode,
      alertElm = document.createElement('span');
  field.style.borderColor = '#bb2124';
  field.addEventListener('focus', function (evt) {
    evt.target.removeAttribute('style');
  }, false);

  if (!parentElm.querySelector('.short-lived')) {
    alertElm.classList.add('surfix', 'text-alert', 'short-lived');
    alertElm.textContent = field.dataset.invalidText || 'Incorrect format of inputted';
    parentElm.appendChild(alertElm);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(1200).then(function () {
      alertElm.style.opacity = 0;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(200).then(function () {
        parentElm.removeChild(alertElm);
      });
    });
  }
}



/***/ }),

/***/ "./src/scripts/_fluctuationTemplate.js":
/*!*********************************************!*\
  !*** ./src/scripts/_fluctuationTemplate.js ***!
  \*********************************************/
/*! exports provided: initFluctuationTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFluctuationTemplate", function() { return initFluctuationTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./src/scripts/_utils.js");
/* harmony import */ var _toggleField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toggleField */ "./src/scripts/_toggleField.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_callback */ "./src/scripts/_callback.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Add handler of the fluctuation field with template
 * @param {}
 * @return {}
 */

function initFluctuationTemplate() {
  Array.prototype.forEach.call(document.querySelectorAll('.fluctuation-template'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var self = evt.target,
          template = document.getElementById(self.dataset.templateId).cloneNode(true),
          fromIds = self.dataset.fromId.split(','),
          pickElms = fromIds.map(function (id) {
        return document.getElementById(id);
      }),
          getValues = pickElms.map(function (node) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(node) ? node.value : null;
      }),
          patterns = pickElms.map(function (node) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(node) ? node.getAttribute('pattern') || null : null;
      }),
          insertTo = self.dataset.insertTo,
          insertIds = self.dataset.insertId.split(',');
      template.removeAttribute('id');
      template.removeAttribute('style');
      template.removeAttribute('hidden');

      if (getValues.every(function (val) {
        return '' !== val;
      })) {
        var check = getValues.every(function (value, i) {
          if (patterns[i]) {
            var regex = RegExp(patterns[i]);

            if (!regex.test(value)) {
              _formatTemplateError(pickElms[i]);

              return false;
            }
          }

          return true;
        });

        if (check) {
          var newIndex = _getLastItemIndex(insertTo) + 1,
              listElm = document.getElementById(insertTo);
          insertIds.forEach(function (baseId, i) {
            var targetElm = template.querySelector("[id^=\"".concat(baseId, "-\"]")),
                elmId = targetElm.getAttribute('id'),
                elmName = targetElm.getAttribute('name');
            targetElm.setAttribute('value', getValues[i]);
            targetElm.setAttribute('name', elmName.replace('%d', newIndex));
            targetElm.setAttribute('id', elmId.replace('%d', newIndex));
          });
          template.querySelectorAll('[id$="%d"]').forEach(function (elm) {
            var elmId = elm.getAttribute('id');
            elm.setAttribute('id', elmId.replace('%d', newIndex));
          });
          template.querySelector('button').addEventListener('click', _decreaseTemplateItem, false);
          listElm.appendChild(template);
          pickElms.forEach(function (elm) {
            elm.setAttribute('value', '');
            elm.value = '';
          });
          Object(_toggleField__WEBPACK_IMPORTED_MODULE_1__["initToggleField"])();

          if (self.dataset.callback) {
            _callback__WEBPACK_IMPORTED_MODULE_2__["callback"][self.dataset.callback]();
          }
        }
      }
    }, false);
  });
  Array.prototype.forEach.call(document.querySelectorAll('[id^="remove-fluctuation-"]'), function (elm) {
    elm.addEventListener('click', _decreaseTemplateItem, false);
  });
}
/**
 * Get last index number of list elements
 * @private
 * @param {string} elementId  A parent element id that has list in the children
 */


function _getLastItemIndex(elementId) {
  var listElm = document.getElementById(elementId),
      items = listElm.children || [];

  if (items.length > 0) {
    var lastChild = _toConsumableArray(items).slice(-1)[0],
        itemIndex = lastChild.querySelector('input').getAttribute('name').replace(/^.*\[(.*)\]$/i, '$1');

    if ('%d' === itemIndex) {
      return -1;
    } else {
      return parseInt(itemIndex, 10);
    }
  } else {
    return -1;
  }
}
/**
 * Decrease item
 * @private
 * @param {object} event  A clicked button element
 */


function _decreaseTemplateItem(event) {
  var removeElm = event.target.parentNode,
      _callback = event.target.dataset.callback || '';

  removeElm.style.opacity = 0;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(301).then(function () {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isElement"])(removeElm.parentNode)) {
      removeElm.parentNode.removeChild(removeElm);

      if (_callback) {
        _callback__WEBPACK_IMPORTED_MODULE_2__["callback"][_callback]();
      }
    }
  });
}
/**
 * Output error
 * @private
 * @param {object} field  An input field with error
 */


function _formatTemplateError(field) {
  var parentElm = field.parentNode,
      alertElm = document.createElement('span');
  field.style.borderColor = '#bb2124';
  field.addEventListener('focus', function (evt) {
    evt.target.removeAttribute('style');
  }, false);

  if (!parentElm.querySelector('.short-lived')) {
    alertElm.classList.add('surfix', 'text-alert', 'short-lived');
    alertElm.textContent = field.dataset.invalidText || 'Incorrect format of inputted';
    parentElm.appendChild(alertElm);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(1200).then(function () {
      alertElm.style.opacity = 0;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(200).then(function () {
        parentElm.removeChild(alertElm);
      });
    });
  }
}



/***/ }),

/***/ "./src/scripts/_postData.js":
/*!**********************************!*\
  !*** ./src/scripts/_postData.js ***!
  \**********************************/
/*! exports provided: postData, addPostField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostField", function() { return addPostField; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Asynchronously post as a wrapper for the Fetch API
 * @param  {string} [url='']  - URL of the request destination
 * @param  {Object} [data={}] - The key-value type object of data to send
 * @param  {string} [datatype='json'] - Response data type (defaults to JSON)
 * @param  {number} [timeout=15000] - Set timeout in fetching (defaults to after 15 sec)
 * @return {Object} The response of fetch request is returned as a promise object
 */
function postData() {
  return _postData.apply(this, arguments);
}
/**
 * Generate hidden field for form
 * @param  {!string} - Name attribute of input tag
 * @param  {!string} - Value attribute of input tag
 * @return {Object} DOM Object of input tag
 */


function _postData() {
  _postData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url,
        data,
        datatype,
        timeout,
        controller,
        timeoutId,
        params,
        key,
        response,
        desc,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            datatype = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'json';
            timeout = _args.length > 3 && _args[3] !== undefined ? _args[3] : 15000;
            controller = new AbortController(), timeoutId = setTimeout(function () {
              controller.abort();
            }, timeout);
            params = new URLSearchParams();
            params.append('action', 'wpignitor_ajax');
            params.append('nonce', document.getElementById('_wpnonce').value);

            if (data) {
              for (key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  params.append(key, data[key]);
                }
              }
            }

            _context.prev = 9;
            _context.next = 12;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
              //headers: { 'Content-Type': 'application/json' },
              redirect: 'follow',
              referrerPolicy: 'no-referrer-when-downgrade',
              signal: controller.signal,
              //body: JSON.stringify( data ),
              body: params
            });

          case 12:
            response = _context.sent;

            if (response.ok) {
              _context.next = 16;
              break;
            }

            desc = "status code: ".concat(response.status, ", text: ").concat(response.statusText);
            throw new Error(desc);

          case 16:
            if (!(datatype === 'json')) {
              _context.next = 22;
              break;
            }

            _context.next = 19;
            return response.json();

          case 19:
            _context.t0 = _context.sent;
            _context.next = 25;
            break;

          case 22:
            _context.next = 24;
            return response.text();

          case 24:
            _context.t0 = _context.sent;

          case 25:
            return _context.abrupt("return", _context.t0);

          case 26:
            _context.prev = 26;
            clearTimeout(timeoutId);
            return _context.finish(26);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9,, 26, 29]]);
  }));
  return _postData.apply(this, arguments);
}

function addPostField(name, value) {
  var newField = document.createElement('input');
  newField.setAttribute('type', 'hidden');
  newField.setAttribute('name', name);
  newField.setAttribute('value', value);
  return newField;
}



/***/ }),

/***/ "./src/scripts/_toggleField.js":
/*!*************************************!*\
  !*** ./src/scripts/_toggleField.js ***!
  \*************************************/
/*! exports provided: initToggleField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initToggleField", function() { return initToggleField; });
/**
 * Plugin to bind toggleable password field
 * @param {}
 * @return {}
 */
function initToggleField() {
  var passiveSupported = false;

  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }

    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (err) {
    passiveSupported = false;
  }

  Array.prototype.forEach.call(document.querySelectorAll('.field-toggle'), function (elm) {
    var options = passiveSupported ? {
      passive: true
    } : false;
    elm.removeEventListener('click', _handleToggleField, options);
    elm.addEventListener('click', _handleToggleField, options);

    _behaviorToggleField(elm);
  });
}

function _handleToggleField(evt) {
  evt.target.classList.toggle('show');

  _behaviorToggleField(evt.target);
}

function _behaviorToggleField(element) {
  var input = element.previousElementSibling;

  if (element.classList.contains('show')) {
    element.classList.remove(element.getAttribute('data-on'));
    element.classList.add(element.getAttribute('data-off'));
    input.setAttribute('type', 'text');
  } else {
    element.classList.remove(element.getAttribute('data-off'));
    element.classList.add(element.getAttribute('data-on'));
    input.setAttribute('type', 'password');
  }
}



/***/ }),

/***/ "./src/scripts/_utils.js":
/*!*******************************!*\
  !*** ./src/scripts/_utils.js ***!
  \*******************************/
/*! exports provided: sleep, isObject, isElement, extend, hasProp, logger, parseObject, triggerEvent, countElements, getLastItemId, renderLoader, createNotice, modifyNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProp", function() { return hasProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseObject", function() { return parseObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerEvent", function() { return triggerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countElements", function() { return countElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastItemId", function() { return getLastItemId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLoader", function() { return renderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotice", function() { return createNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyNotice", function() { return modifyNotice; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Await until next process at specific millisec
 * @param {number} [msec=1000] - Milliseconds
 * @usage `sleep(2000).then(() => { Next Process })`
 */
function sleep() {
  var msec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, msec);
  });
}
/**
 * Determine whether variable is an Object
 * @param {!(number|string|Object|boolean)} item - Variable you want to check
 * @return {boolean}
 */


function isObject(o) {
  return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
}
/**
 * Determine whether variable is an Element
 * @param {!(number|string|Object|boolean)} node - Variable you want to check
 * @return {boolean}
 */


function isElement(node) {
  try {
    return node instanceof HTMLElement;
  } catch (e) {
    if (_typeof(node) === 'object' && node.nodeType === 1 && _typeof(node.style) === 'object' && _typeof(node.ownerDocument) === 'object') {
      return true;
    } else {
      return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }
  }
}
/**
 * Merge multiple objects given as arguments, maintaining a deep hierarchy
 * @param {!Object} args[0] - Object to merge from
 * @param {!Object} args[n] - Any objects to merge
 * @return {Object}
 */


function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource));

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}
/**
 * Check property in an object as same `Object.prototype.hasOwnProperty.call()`
 * @param {!string} prop - Check property name
 * @param {!Object} obj - Target object
 * @return {boolean}
 */


function hasProp(prop, obj) {
  return !!obj && Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * Custom exception logging
 *
 * @param {!string} message - Message body to notify
 * @param {string} [type="error"] - Notification type
 * @return {void}
 */


function logger(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';

  if ('error' === type) {
    throw new Error(message);
  } else {
    console[type](message);
  }
}
/**
 * Parse the string like JavaScript object to actual Object
 * @public
 * @param {string} str
 */


function parseObject(str) {
  var _this = this;

  var newObj = {},
      _tmp;

  try {
    newObj = JSON.parse(str);
  } catch (e) {
    _tmp = str.trim().replace(/^(\{|\[)+|(\]|\})+$/g, '').split(','); // _tmp = _tmp.map((x) => x.split(/(?<=^[^:]+?):/).map((y) => y.trim())) <- is Chrome only

    _tmp = _tmp.map(function (fragmentX) {
      var _matches = fragmentX.match(/^[^:]*:/),
          _retarr = _matches ? [_matches[0].replace(':', ''), fragmentX.replace(_matches[0], '')] : [fragmentX];

      return _retarr;
    }).map(function (fragmentY) {
      return fragmentY || fragmentY.trim();
    });
    _tmp = _tmp.reduce(function (obj, x, i) {
      if (x[0] && x[1]) {
        var prop = x[0].trim().replace(/^('|")+|("|')+$/g, ''),
            value = x[1].trim().replace(/^('|")+|("|')+$/g, '');

        if (/^callback$/i.test(prop)) {
          obj[prop] = Function.call(_this, "return ".concat(value))();
        } else {
          obj[prop] = value;
        }
      } else if (x.length == 1 && x[0]) {
        var _value = x[0].trim().replace(/^('|")+|("|')+$/g, '');

        obj[i] = _value;
      } else {
        obj = null;
      }

      return obj;
    }, {});
    newObj = _tmp ? Object.assign(newObj, _tmp) : newObj;
  }

  return newObj;
}

function triggerEvent(element, event) {
  if (document.createEvent) {
    var evt = document.createEvent('HTMLEvents');
    evt.initEvent(event, true, true);
    return element.dispatchEvent(evt);
  } else {
    var _evt = document.createEventObject();

    return element.fireEvent("on".concat(event), _evt);
  }
}

function countElements(selector) {
  return document.querySelectorAll(selector).length;
}

function getLastItemId(selector) {
  var NumericIds = [];

  if (document.querySelectorAll(selector).length == 0) {
    return 0;
  }

  Array.prototype.forEach.call(document.querySelectorAll(selector), function (elm) {
    var parseId = elm.id.split(/-|_|\/|,/);
    NumericIds.push(parseInt(parseId[parseId.length - 1], 10));
  });
  return Math.max.apply(Math, NumericIds);
}

function renderLoader() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#ccc';
  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var dots = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
  var ns = 'http://www.w3.org/2000/svg',
      svgElm = document.createElementNS(ns, 'svg'),
      container = document.createElement('div'),
      diameter = 6,
      gap = (width - dots * diameter) / (dots + 1);
  svgElm.setAttributeNS(null, 'version', '1.1');
  svgElm.setAttribute('xmlns', ns);
  svgElm.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svgElm.setAttributeNS(null, 'x', '0px');
  svgElm.setAttributeNS(null, 'y', '0px');
  svgElm.setAttributeNS(null, 'viewBox', "0 0 ".concat(width, " ").concat(height));
  svgElm.setAttributeNS(null, 'enable-background', 'new 0 0 0 0');
  svgElm.setAttribute('xml:space', 'preserve');

  for (var i = 1; i <= dots; i++) {
    var circle = document.createElementNS(ns, 'circle'),
        animate = document.createElementNS(ns, 'animate'),
        mx = gap * i + 6 * (i - 1);
    circle.setAttributeNS(null, 'fill', color);
    circle.setAttributeNS(null, 'stroke', 'none');
    circle.setAttributeNS(null, 'cx', mx);
    circle.setAttributeNS(null, 'cy', (height - diameter) / 2);
    circle.setAttributeNS(null, 'r', diameter);
    animate.setAttributeNS(null, 'attributeName', 'opacity');
    animate.setAttributeNS(null, 'dur', '1s');
    animate.setAttributeNS(null, 'values', '0;1;0');
    animate.setAttributeNS(null, 'repeatCount', 'indefinite');
    animate.setAttributeNS(null, 'begin', 0.1 + 0.1 * i);
    circle.appendChild(animate);
    svgElm.appendChild(circle);
  }

  container.appendChild(svgElm);
  container.classList.add('loader-container');

  if (id) {
    container.setAttribute('id', id);
  }

  return container;
}

function createNotice(message) {
  var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var wrapper = document.createElement('div'),
      paragraph = document.createElement('p');

  if (before) {
    wrapper.appendChild(before);
  }

  paragraph.classList.add('notice-message');
  paragraph.textContent = message;
  paragraph.style.textAlign = 'center';
  wrapper.appendChild(paragraph);

  if (after) {
    wrapper.appendChild(after);
  }

  return wrapper;
}

function modifyNotice(message) {
  var targetElm = document.querySelector('.notice-message');

  if (targetElm) {
    targetElm.textContent = message;
  }
}



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_utils */ "./src/scripts/_utils.js");
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_postData */ "./src/scripts/_postData.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_callback */ "./src/scripts/_callback.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_dialog */ "./src/scripts/_dialog.js");
/* harmony import */ var _fluctuation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_fluctuation */ "./src/scripts/_fluctuation.js");
/* harmony import */ var _fluctuationTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_fluctuationTemplate */ "./src/scripts/_fluctuationTemplate.js");
/* harmony import */ var _toggleField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toggleField */ "./src/scripts/_toggleField.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WP-Ignitor plugin
 * @since 1.0.3 -> 1.1.0
 */
//import '../styles/index.scss'








function init() {
  var AJAX_URL = window.ajaxurl || null,
      parsedURL = new URL(window.location.href);
  window.callback = _callback__WEBPACK_IMPORTED_MODULE_2__["callback"];
  Object(_dialog__WEBPACK_IMPORTED_MODULE_3__["initDialog"])();
  Object(_fluctuation__WEBPACK_IMPORTED_MODULE_4__["initFluctuation"])();
  Object(_fluctuationTemplate__WEBPACK_IMPORTED_MODULE_5__["initFluctuationTemplate"])();
  Object(_toggleField__WEBPACK_IMPORTED_MODULE_6__["initToggleField"])(); // Focus current help tab

  if (document.getElementById('contextual-help-wrap')) {
    Array.prototype.forEach.call(document.querySelectorAll('#contextual-help-columns ul li'), function (elm) {
      var tabLinkName = elm.id.split('-')[2],
          currentTab = new URLSearchParams(parsedURL.searchParams).get('tab');

      if (tabLinkName === currentTab) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(elm.querySelector('a'), 'click');
      }
    });
  } // Expansionable Block


  Array.prototype.forEach.call(document.querySelectorAll('.drawer-control'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var _self = evt.target,
          _label = _self.querySelector('.drawer-label-text'),
          targetBlock = document.getElementById(_self.getAttribute('data-target'));

      _self.classList.toggle('expanded');

      if (_self.classList.contains('expanded')) {
        targetBlock.style.height = "".concat(targetBlock.scrollHeight, "px");
        targetBlock.classList.add('expanded');
        _label.textContent = _self.getAttribute('data-stretched');
      } else {
        targetBlock.style.height = '5em';
        targetBlock.classList.remove('expanded');
        _label.textContent = _self.getAttribute('data-shrinked');
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sleep"])(301).then(function () {
        //targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' })
        var focusingElm = document.getElementById(parsedURL.hash.replace('#', '')),
            targetTop = targetBlock.closest('tr').getBoundingClientRect().top,
            offsetTop = window.pageYOffset,
            buffer = document.getElementById('wpadminbar').clientHeight,
            moveY = targetTop + offsetTop - buffer;

        if (focusingElm) {
          moveY = focusingElm.getBoundingClientRect().top + offsetTop - buffer;
        }

        window.scrollTo({
          top: moveY,
          behavior: 'smooth'
        });
      });
    }, false);
  }); // Watch DOM by MutationObserver

  var moConfig = {
    attributes: true,
    childList: true,
    subtree: true
  },
      moCallback = function moCallback(mutationsList) {
    var checkUlIds = ['allowed-hosts', 'allowed-addresses', 'allowed-referers', 'auth-accounts'],
        checkTextareaIds = ['preview-wp-config', 'htaccess'];

    var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;

        if (mutation.type === 'childList' && checkUlIds.includes(mutation.target.id) || mutation.type === 'attributes' && checkTextareaIds.includes(mutation.target.id)) {
          var targetBlock = mutation.target.closest('.expanded');

          if (targetBlock) {
            targetBlock.removeAttribute('style');
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
      observer = new MutationObserver(moCallback);

  Array.prototype.forEach.call(document.querySelectorAll('.expansionable-block'), function (node) {
    observer.observe(node, moConfig);
  }); // Update "wp-config.php" section

  Array.prototype.forEach.call(document.querySelectorAll('.toggle-option'), function (elm) {
    elm.addEventListener('change', function () {
      modifyConfigPreview();
    }, false);
  });
  Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'), function (elm) {
    elm.addEventListener('change', function (evt) {
      if (document.getElementById("chk-".concat(evt.target.id)).checked) {
        modifyConfigPreview();
      }
    }, false);
  });
  modifyConfigPreview(); // Update ".htaccess" section

  Array.prototype.forEach.call(document.querySelectorAll('[id^="advanced-option-"]'), function (elm) {
    elm.addEventListener('change', function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(document.getElementById('btn-reload-preview-htaccess'), 'click');
    }, false);
  }); // Bind the Follow Color

  Array.prototype.forEach.call(document.querySelectorAll('[data-follow-color]'), function (elm) {
    var input = elm.querySelector('input'),
        followColor = function followColor(elm) {
      var color = elm.dataset.followColor,
          classes = elm.classList,
          active = elm.querySelector('input') && elm.querySelector('input').checked ? true : false;

      if ('inherit' === color) {
        if (active && !classes.contains('txt-prim')) {
          classes.add('txt-prim');
        } else {
          classes.remove('txt-prim');
        }
      } else if ('' !== color) {
        if (active && elm.style.color !== color) {
          elm.style.color = color;
        } else {
          elm.style.color = 'unset';
        }
      }
    }; // end: followColor()


    if (input == undefined) {
      return;
    }

    input.addEventListener('change', function (evt) {
      followColor(evt.target.closest('label'));
    }, false);
    followColor(elm);
  });

  if (document.getElementById('target-page-path')) {
    // Update frontend HTML section
    document.getElementById('target-page-path').addEventListener('keydown', function (evt) {
      var _key = window.event ? window.event.keyCode : evt.which;

      if (_key == 13) {
        evt.preventDefault();
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(document.getElementById('btn-commit-to-cleanup'), 'click');
      }
    }, false);
    document.getElementById('target-page-path').addEventListener('change', function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(document.getElementById('btn-commit-to-cleanup'), 'click');
    }, false);
  }

  if (document.getElementById('rest-namespaces')) {
    // Handle when changed Rest API Namespace behavior
    Array.prototype.forEach.call(document.querySelectorAll('[name^="namespaces["]'), function (elm) {
      elm.addEventListener('change', function (evt) {
        var slug_ns = evt.target.id.replace('rest-namespace-', ''),
            pair_field = document.getElementById("http-code-".concat(slug_ns));

        if ('allow_all' === evt.target.value) {
          pair_field.value = '200';
          pair_field.setAttribute('disabled', true);
        } else {
          pair_field.removeAttribute('disabled');
          pair_field.value = '404';
        }
      }, false);
    });
  } // Auto-focus to specified hash of self URL


  if (parsedURL.hash !== '') {
    var targetElm = document.getElementById(parsedURL.hash.replace('#', ''));

    if (targetElm) {
      var expandElm = targetElm.closest('.expansionable-block');

      if (expandElm && !expandElm.classList.contains('expanded')) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["triggerEvent"])(expandElm.nextElementSibling, 'click');
        window.scrollTo({
          top: targetElm.offsetTop,
          behavior: 'smooth'
        });
      }

      targetElm.classList.add('focus', 'focus-active');
      targetElm.addEventListener('mouseout', function (evt) {
        evt.target.classList.remove('focus-active');
      }, false);
      setTimeout(function () {
        targetElm.classList.remove('focus-active');
      }, 5000);
    }
  } // Event handler for each button clicked


  Array.prototype.forEach.call(document.querySelectorAll('[id^="btn-"]'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var self = evt.target,
          form = document.getElementById('wpignitor-form'),
          fd = new FormData(form),
          data = {};

      var _iterator2 = _createForOfIteratorHelper(fd.entries()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              _p = _step2$value[0],
              _v = _step2$value[1];

          if (_v) {
            if (self.id !== 'btn-update-htaccess' && _p === 'htaccess') {
              continue;
            } else {
              data[_p] = _v;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      switch (self.id) {
        // Globals Tab
        case 'btn-move-install-path':
          {
            var _err = new Error();

            var dialogButtonText = 'Close';
            data.method = 'move-install-path';
            Object(_postData__WEBPACK_IMPORTED_MODULE_1__["postData"])(AJAX_URL, data).then(function (response) {
              //console.log( response )
              if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasProp"])('button_text', response)) {
                dialogButtonText = response.button_text;
              }

              if (response.result) {
                var onClick = function onClick() {
                  //console.log( 'Clicked Re-login', location.hostname )
                  var _iterator3 = _createForOfIteratorHelper(response.auth_cookies),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var cookie_name = _step3.value;
                      document.cookie = "".concat(cookie_name, "=;domain=").concat(location.hostname, ";max-age=0");
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  window.location.href = response.redirect_to;
                };

                modifyDialogBody('move-install-path', response.message, ['text-success'], response.button_text, ['button-primary'], onClick);
              } else {
                _err.message = response.message;
                throw _err;
              }
            }).catch(function (error) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logger"])(error);
              modifyDialogBody('move-install-path', "".concat(error.name, ": ").concat(error.message), ['text-alert'], dialogButtonText, ['button-secondary']);
            });
            break;
          }

        case 'btn-move-wp-config':
          data.method = 'move-wp-config';
          Object(_postData__WEBPACK_IMPORTED_MODULE_1__["postData"])(AJAX_URL, data).then(function (response) {
            var addClasses = response.result ? ['text-success'] : ['text-alert'];
            modifyDialogBody('move-wp-config', response.message, addClasses);
          }).catch(function (error) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logger"])(error);
          });
          break;

        case 'btn-update-wp-config':
          document.getElementById('htaccess').setAttribute('disabled', true);
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'), function (elm) {
            if (document.getElementById("chk-".concat(elm.id)).checked) {
              var _val = null;

              if (elm.type === 'checkbox') {
                _val = elm.checked;
              } else {
                _val = elm.getAttribute('value');
              }

              form.appendChild(Object(_postData__WEBPACK_IMPORTED_MODULE_1__["addPostField"])(elm.getAttribute('name'), _val));
            }

            elm.setAttribute('disabled', true);
          });
          form.submit();
          break;

        case 'btn-restore-wp-config':
          document.getElementById('preview-wp-config').setAttribute('disabled', true);
          document.getElementById('htaccess').setAttribute('disabled', true);
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          form.submit();
          break;

        case 'btn-reload-preview-htaccess':
          data.method = 'reload-preview-htaccess';

          for (var _k in data) {
            if (Object.hasOwnProperty.call(data, _k)) {
              if (/^(add_config_fulltext|optimize_htaccess|without_subdir|wp_config\[.*\])$/.test(_k)) {
                delete data[_k];
              }
            }
          }

          Object(_postData__WEBPACK_IMPORTED_MODULE_1__["postData"])(AJAX_URL, data).then(function (response) {
            if (response.result) {
              document.getElementById('htaccess').textContent = response.htaccess;
            }
          }).catch(function (error) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logger"])(error);
          });
          break;

        case 'btn-update-htaccess':
          document.getElementById('preview-wp-config').setAttribute('disabled', true);
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          form.submit();
          break;

        case 'btn-restore-htaccess':
        case 'btn-clear-all-settings':
          document.getElementById('preview-wp-config').setAttribute('disabled', true);
          document.getElementById('htaccess').setAttribute('disabled', true);
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          form.submit();
          break;
        // Conceals Tab

        case 'btn-commit-to-cleanup':
          data.method = 'cleanup-html';
          Array.prototype.forEach.call(document.querySelectorAll('[name^="cleanup["]'), function (elm) {
            data[elm.getAttribute('name')] = elm.checked;
          });
          Object(_postData__WEBPACK_IMPORTED_MODULE_1__["postData"])(AJAX_URL, data).then(function (response) {
            if (response.result) {
              document.getElementById('html').innerHTML = response.html;
            }
          }).catch(function (error) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["logger"])(error);
          });
          break;

        case 'btn-save-rest-behavior':
          document.querySelector('input[name=method]').setAttribute('value', 'rest-behavior');
          form.submit();
          break;
        // Authorizations Tab

        case 'btn-commit-login-settings':
          if (parseInt(data.new_login_on) == 1) {
            if (!data.new_login_path) {
              var errField = document.getElementById('new-login-path'),
                  dialogOpts = {
                title: "<label class=\"fw600 text-alert myh\">".concat(errField.dataset.errorTitle, "</label>"),
                content: "<div class=\"text-alert align-center\">".concat(errField.dataset.blankError, "</div>"),
                reinit: false,
                size: 'medium'
              };
              errField.style.borderColor = '#bb2124';
              errField.addEventListener('focus', function (evt) {
                evt.target.removeAttribute('style');
              }, false);
              Object(_dialog__WEBPACK_IMPORTED_MODULE_3__["showDialog"])(dialogOpts);
              evt.preventDefault();
              return false;
            }
          }

          document.querySelector('input[name=method]').setAttribute('value', 'login-setting');
          form.submit();
          break;
        // Helth Check Tab

        case 'btn-unlock-core-updater':
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          form.submit();
          break;

        default:
          return false;
      }
    }, false);
  });
}

function modifyDialogBody(targetId) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var addClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var buttonText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var btnClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['button-secondary'];
  var onClick = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var dialogBody = document.getElementById(targetId).closest('.dialog-body'),
      wrapper = document.createElement('div'),
      paragraph = document.createElement('p'),
      container = document.createElement('div'),
      button = document.createElement('button');
  paragraph.classList.add('mxa', 'align-center');

  if (addClasses.length > 0) {
    var _paragraph$classList;

    (_paragraph$classList = paragraph.classList).add.apply(_paragraph$classList, _toConsumableArray(addClasses));
  }

  paragraph.innerHTML = message;
  wrapper.appendChild(paragraph);

  if (buttonText) {
    button.setAttribute('type', 'button');
    button.classList.add('button', 'mxa');

    if (btnClasses.length > 0) {
      var _button$classList;

      (_button$classList = button.classList).add.apply(_button$classList, _toConsumableArray(btnClasses));
    }

    button.textContent = buttonText; //console.log( onClick, typeof onClick )

    if (onClick && typeof onClick === 'function') {
      button.addEventListener('click', onClick, false);
    } else {
      button.addEventListener('click', function () {
        document.querySelector('.wpignitor-dialog').classList.remove('show');
      }, false);
    }

    container.classList.add('mt1', 'align-center');
    container.appendChild(button);
    wrapper.appendChild(container);
  }

  dialogBody.innerHTML = '';
  dialogBody.appendChild(wrapper);
}

function modifyConfigPreview() {
  var preview = document.getElementById('preview-wp-config'),
      confLine = ['# BEGIN WP Ignitor'];

  if (!preview) {
    return;
  }

  Array.prototype.forEach.call(document.querySelectorAll('.toggle-option'), function (elm) {
    if (elm.checked) {
      var targetId = elm.id.replace('chk-', ''),
          fieldElm = document.getElementById(targetId),
          constName = targetId.toUpperCase(),
          constValue = null;

      if (fieldElm.type === 'checkbox') {
        constValue = fieldElm.checked ? 'true' : 'false';
      } else if (fieldElm.type === 'number') {
        constValue = ['wp_memory_limit', 'wp_max_memory_limit'].includes(targetId) ? "'".concat(fieldElm.value, "M'") : parseInt(fieldElm.value, 10);
      } else {
        constValue = "'".concat(fieldElm.value, "'");

        if (fieldElm.dataset.pair) {
          constValue = constValue.replace(/\\/g, '/').replace(/\/$/, '');
        }
      }

      confLine.push("defined( '".concat(constName, "' ) or define( '").concat(constName, "', ").concat(constValue, " );"));

      if (fieldElm.dataset.pair) {
        var pairValue = constValue.replace(fieldElm.dataset.docroot, "".concat(location.origin));
        confLine.push("defined( '".concat(fieldElm.dataset.pair, "' ) or define( '").concat(fieldElm.dataset.pair, "', ").concat(pairValue, " );"));
      }
    }
  });
  confLine.push('# END WP Ignitor');
  preview.textContent = '';
  preview.textContent = confLine.join("\n");
  preview.setAttribute('rows', Math.max(confLine.length, 3));
} // Dispatcher


if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
  init();
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init, false);
} else {
  window.onload = init;
}

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/scripts/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\xampp\htdocs\test.ka2.org\app\wp-content\plugins\wp-ignitor\src\scripts\index.js */"./src/scripts/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL19kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX2ZsdWN0dWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL19mbHVjdHVhdGlvblRlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL19wb3N0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9fdG9nZ2xlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbGxiYWNrIiwibW92ZUluc3RhbGxQYXRoIiwibWVzc2FnZSIsImxvYWRlciIsInJlbmRlckxvYWRlciIsImNyZWF0ZU5vdGljZSIsIm1vdmVXcENvbmZpZyIsInNlbGZSZWRpcmVjdCIsInNlbGZSZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpc2FibGVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNhYmxlZCIsInJlbG9hZFByZXZpZXdIdGFjY2VzcyIsInRyaWdnZXJFdmVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdERpYWxvZyIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInNlbGYiLCJ0YXJnZXQiLCJvcHRzIiwidGl0bGUiLCJkYXRhc2V0IiwiY29udGVudCIsImZvb3QiLCJidXR0b24iLCJlZmZlY3QiLCJzaXplIiwiZGlhbG9nU2l6ZSIsInJlaW5pdCIsInBlcnNpc3RlbnQiLCJzaG93biIsImhpZGRlbiIsImJlZm9yZVNob3ciLCJiZWZvcmVIaWRlIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJzaG93RGlhbG9nIiwiZml4ZWRCYWNrZHJvcCIsImlzRml4ZWQiLCJpc0lPUyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJub3dZIiwicGFnZVlPZmZzZXQiLCJub3dYIiwicGFnZVhPZmZzZXQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0WCIsImxlZnQiLCJ0YXJnZXRZIiwidG9wIiwiZW5hYmxlZCIsInRhcmdldFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsInBhcnNlSW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1hcmdpbkxlZnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNjcm9sbFRvIiwiZ2VuZXJhdGVEaWFsb2ciLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkaWFsb2dzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJhY2tkcm9wcyIsImxlbmd0aCIsImRpYWxvZyIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsImNvbnRhaW5lciIsInZpZXdXaWR0aCIsImlubmVyV2lkdGgiLCJpbnNlcnRUaXRsZSIsInRvU3RyaW5nIiwiZGlhbG9nSGVhZGVyIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0Q29udGVudCIsInBhcnNlT2JqZWN0IiwiZGlhbG9nQm9keSIsInJlcGxhY2UiLCJpc0VsZW1lbnQiLCJrZXlzIiwicmVtb3RlIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwibG9nZ2VyIiwidmFsdWVzIiwiam9pbiIsInRleHRDb250ZW50IiwiaW5zZXJ0Rm9vdCIsImRpYWxvZ0Zvb3RlciIsImRpYWxvZ0J1dHRvbiIsImRpYWxvZ0NhbGxiYWNrIiwiYnV0dG9uQ2xhc3MiLCJub1JlbmRlciIsImlzT3V0c2lkZSIsInNldEF0dHJpYnV0ZSIsInNwbGl0IiwiY2xhc3MiLCJsYWJlbCIsIm11dGF0aW9uc0xpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJjb250YWlucyIsIm9sZFZhbHVlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImJvZHkiLCJwdXREaWFsb2ciLCJkaWFsb2dTdGFja1RpbWVyIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsInRpbWVySWQiLCJwdXNoIiwibG9vcCIsImkiLCJjbGVhclRpbWVvdXQiLCJzaGlmdCIsImluaXRGbHVjdHVhdGlvbiIsImZyb21JZCIsInBpY2tFbG0iLCJnZXRWYWx1ZSIsInZhbHVlIiwicGF0dGVybiIsImdldEF0dHJpYnV0ZSIsImluc2VydFRvIiwiaW5zZXJ0T3B0cyIsImlkIiwiaW5zZXJ0SWQiLCJuYW1lIiwiaW5zZXJ0TmFtZSIsImNsYXNzZXMiLCJpbnNlcnRDbGFzc2VzIiwicmVnZXgiLCJSZWdFeHAiLCJfZm9ybWF0RXJyb3IiLCJfaW5jcmVhc2VJdGVtIiwiX2RlY3JlYXNlSXRlbSIsImVsZW1lbnRJZCIsImxpc3RFbG0iLCJsaXN0Q29udGFpbmVyIiwiaW5jbHVkZXMiLCJub2RlTmFtZSIsImlucHV0IiwiYXROYW1lIiwiY2hpbGRyZW4iLCJhcHBlbmRDaGlsZCIsInJlbW92ZUVsbSIsInBhcmVudE5vZGUiLCJfY2FsbGJhY2siLCJvcGFjaXR5Iiwic2xlZXAiLCJyZW1vdmVDaGlsZCIsImZpZWxkIiwicGFyZW50RWxtIiwiYWxlcnRFbG0iLCJib3JkZXJDb2xvciIsImludmFsaWRUZXh0IiwiaW5pdEZsdWN0dWF0aW9uVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlSWQiLCJjbG9uZU5vZGUiLCJmcm9tSWRzIiwicGlja0VsbXMiLCJtYXAiLCJnZXRWYWx1ZXMiLCJub2RlIiwicGF0dGVybnMiLCJpbnNlcnRJZHMiLCJldmVyeSIsInZhbCIsImNoZWNrIiwiX2Zvcm1hdFRlbXBsYXRlRXJyb3IiLCJuZXdJbmRleCIsIl9nZXRMYXN0SXRlbUluZGV4IiwiYmFzZUlkIiwidGFyZ2V0RWxtIiwiZWxtSWQiLCJlbG1OYW1lIiwiX2RlY3JlYXNlVGVtcGxhdGVJdGVtIiwiaW5pdFRvZ2dsZUZpZWxkIiwiaXRlbXMiLCJsYXN0Q2hpbGQiLCJzbGljZSIsIml0ZW1JbmRleCIsImV2ZW50IiwicG9zdERhdGEiLCJkYXRhIiwiZGF0YXR5cGUiLCJ0aW1lb3V0IiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsInRpbWVvdXRJZCIsImFib3J0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwia2V5IiwiY2FjaGUiLCJjcmVkZW50aWFscyIsInJlZGlyZWN0IiwicmVmZXJyZXJQb2xpY3kiLCJzaWduYWwiLCJvayIsImRlc2MiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJ0ZXh0IiwiYWRkUG9zdEZpZWxkIiwibmV3RmllbGQiLCJwYXNzaXZlU3VwcG9ydGVkIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlcnIiLCJfaGFuZGxlVG9nZ2xlRmllbGQiLCJfYmVoYXZpb3JUb2dnbGVGaWVsZCIsInRvZ2dsZSIsImVsZW1lbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibXNlYyIsImlzT2JqZWN0IiwibyIsImNvbnN0cnVjdG9yIiwiSFRNTEVsZW1lbnQiLCJlIiwibm9kZVR5cGUiLCJvd25lckRvY3VtZW50IiwicHJvcCIsImF0dHIiLCJmaW5kIiwiZXh0ZW5kIiwidG8iLCJuZXh0U291cmNlIiwia2V5c0FycmF5IiwibmV4dEluZGV4IiwibGVuIiwibmV4dEtleSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJoYXNQcm9wIiwib2JqIiwiY29uc29sZSIsInN0ciIsIm5ld09iaiIsIl90bXAiLCJKU09OIiwicGFyc2UiLCJ0cmltIiwiZnJhZ21lbnRYIiwiX21hdGNoZXMiLCJtYXRjaCIsIl9yZXRhcnIiLCJmcmFnbWVudFkiLCJyZWR1Y2UiLCJ4IiwiRnVuY3Rpb24iLCJhc3NpZ24iLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVFdmVudE9iamVjdCIsImZpcmVFdmVudCIsImNvdW50RWxlbWVudHMiLCJzZWxlY3RvciIsImdldExhc3RJdGVtSWQiLCJOdW1lcmljSWRzIiwicGFyc2VJZCIsIk1hdGgiLCJtYXgiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiZG90cyIsIm5zIiwic3ZnRWxtIiwiY3JlYXRlRWxlbWVudE5TIiwiZGlhbWV0ZXIiLCJnYXAiLCJzZXRBdHRyaWJ1dGVOUyIsImNpcmNsZSIsImFuaW1hdGUiLCJteCIsImJlZm9yZSIsImFmdGVyIiwid3JhcHBlciIsInBhcmFncmFwaCIsInRleHRBbGlnbiIsIm1vZGlmeU5vdGljZSIsImluaXQiLCJBSkFYX1VSTCIsImFqYXh1cmwiLCJwYXJzZWRVUkwiLCJVUkwiLCJocmVmIiwidGFiTGlua05hbWUiLCJjdXJyZW50VGFiIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiX3NlbGYiLCJfbGFiZWwiLCJ0YXJnZXRCbG9jayIsInNjcm9sbEhlaWdodCIsImZvY3VzaW5nRWxtIiwiaGFzaCIsInRhcmdldFRvcCIsImNsb3Nlc3QiLCJvZmZzZXRUb3AiLCJidWZmZXIiLCJjbGllbnRIZWlnaHQiLCJtb3ZlWSIsImJlaGF2aW9yIiwibW9Db25maWciLCJtb0NhbGxiYWNrIiwiY2hlY2tVbElkcyIsImNoZWNrVGV4dGFyZWFJZHMiLCJtb2RpZnlDb25maWdQcmV2aWV3IiwiY2hlY2tlZCIsImZvbGxvd0NvbG9yIiwiYWN0aXZlIiwiX2tleSIsImtleUNvZGUiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0Iiwic2x1Z19ucyIsInBhaXJfZmllbGQiLCJleHBhbmRFbG0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb3JtIiwiZmQiLCJGb3JtRGF0YSIsImVudHJpZXMiLCJfcCIsIl92IiwiZGlhbG9nQnV0dG9uVGV4dCIsImJ1dHRvbl90ZXh0IiwicmVzdWx0Iiwib25DbGljayIsImF1dGhfY29va2llcyIsImNvb2tpZV9uYW1lIiwiY29va2llIiwiaG9zdG5hbWUiLCJyZWRpcmVjdF90byIsIm1vZGlmeURpYWxvZ0JvZHkiLCJhZGRDbGFzc2VzIiwiX3ZhbCIsInN1Ym1pdCIsIl9rIiwiaHRhY2Nlc3MiLCJodG1sIiwibmV3X2xvZ2luX29uIiwibmV3X2xvZ2luX3BhdGgiLCJlcnJGaWVsZCIsImRpYWxvZ09wdHMiLCJlcnJvclRpdGxlIiwiYmxhbmtFcnJvciIsInRhcmdldElkIiwiYnV0dG9uVGV4dCIsImJ0bkNsYXNzZXMiLCJwcmV2aWV3IiwiY29uZkxpbmUiLCJmaWVsZEVsbSIsImNvbnN0TmFtZSIsInRvVXBwZXJDYXNlIiwiY29uc3RWYWx1ZSIsInBhaXIiLCJwYWlyVmFsdWUiLCJkb2Nyb290Iiwib3JpZ2luIiwicmVhZHlTdGF0ZSIsImRvY3VtZW50RWxlbWVudCIsImRvU2Nyb2xsIiwib25sb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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VyxPQUFULENBQWlCZ1gsSUFBckYsZ0JBQStGQyxTQUEvRjtBQUNIO0FBQ0o7QUFDSixHQTFCRDtBQTJCQU4sVUFBUSxDQUFDdFAsSUFBVCxDQUFlLGtCQUFmO0FBQ0FxUCxTQUFPLENBQUNyUixXQUFSLEdBQXNCLEVBQXRCO0FBQ0FxUixTQUFPLENBQUNyUixXQUFSLEdBQXNCc1IsUUFBUSxDQUFDdlIsSUFBVCxDQUFlLElBQWYsQ0FBdEI7QUFDQXNSLFNBQU8sQ0FBQzdRLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJrTCxJQUFJLENBQUNDLEdBQUwsQ0FBUzJGLFFBQVEsQ0FBQ3ZULE1BQWxCLEVBQTBCLENBQTFCLENBQTdCO0FBQ0gsQyxDQUdEOzs7QUFDQSxJQUFLdkUsUUFBUSxDQUFDdVksVUFBVCxLQUF3QixVQUF4QixJQUF3Q3ZZLFFBQVEsQ0FBQ3VZLFVBQVQsS0FBd0IsU0FBeEIsSUFBcUMsQ0FBRXZZLFFBQVEsQ0FBQ3dZLGVBQVQsQ0FBeUJDLFFBQTdHLEVBQTBIO0FBQ3RIbEYsTUFBSTtBQUNQLENBRkQsTUFHQSxJQUFLdlQsUUFBUSxDQUFDYSxnQkFBZCxFQUFpQztBQUM3QmIsVUFBUSxDQUFDYSxnQkFBVCxDQUEyQixrQkFBM0IsRUFBK0MwUyxJQUEvQyxFQUFxRCxLQUFyRDtBQUNILENBRkQsTUFFTztBQUNIM1QsUUFBTSxDQUFDOFksTUFBUCxHQUFnQm5GLElBQWhCO0FBQ0gsQyIsImZpbGUiOiJqcy93cC1pZ25pdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgcmVuZGVyTG9hZGVyLCBjcmVhdGVOb3RpY2UsIHRyaWdnZXJFdmVudCB9IGZyb20gJy4vX3V0aWxzJ1xyXG4vL2ltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSAnLi9fcG9zdERhdGEnXHJcblxyXG5jb25zdCBjYWxsYmFjayA9IHtcclxuICAgIG1vdmVJbnN0YWxsUGF0aDogKCkgPT4ge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ0N1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQsIHBsZWFzZSB3YWl0LicsXHJcbiAgICAgICAgICAgIGxvYWRlciAgPSByZW5kZXJMb2FkZXIoICdtb3ZlLWluc3RhbGwtcGF0aCcsICcjYzBjMGMwJywgMTIwLCA2MCwgNSApXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGljZSggbWVzc2FnZSwgbG9hZGVyIClcclxuICAgIH0sXHJcbiAgICBtb3ZlV3BDb25maWc6ICgpID0+IHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICdDdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLCBwbGVhc2Ugd2FpdC4nLFxyXG4gICAgICAgICAgICBsb2FkZXIgID0gcmVuZGVyTG9hZGVyKCAnbW92ZS13cC1jb25maWcnLCAnI2MwYzBjMCcsIDEyMCwgNjAsIDUgKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RpY2UoIG1lc3NhZ2UsIG51bGwsIGxvYWRlciApXHJcbiAgICB9LFxyXG4gICAgc2VsZlJlZGlyZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2VsZlJlbG9hZDogKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlQnV0dG9uOiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndwaWduaXRvci1kaWFsb2cgLmRpYWxvZy1mb290ZXIgYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgcmVsb2FkUHJldmlld0h0YWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcmVsb2FkLXByZXZpZXctaHRhY2Nlc3MnKSwgJ2NsaWNrJylcclxuICAgIH0sXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBjYWxsYmFjayB9IiwiaW1wb3J0IHsgcGFyc2VPYmplY3QsIGlzRWxlbWVudCwgbG9nZ2VyIH0gZnJvbSAnLi9fdXRpbHMnXHJcblxyXG4vKipcclxuICogQWRkIGhhbmRsZXIgb2YgdGhlIGRpYWxvZ1xyXG4gKiBAcGFyYW0ge31cclxuICogQHJldHVybiB7fVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdERpYWxvZygpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmluZD1kaWFsb2ddJyksIChlbG0pID0+IHtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYuZGF0YXNldC50aXRsZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHNlbGYuZGF0YXNldC5jb250ZW50IHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdDogc2VsZi5kYXRhc2V0LmZvb3QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b246IHNlbGYuZGF0YXNldC5idXR0b24gfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IHNlbGYuZGF0YXNldC5lZmZlY3QgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBzZWxmLmRhdGFzZXQuZGlhbG9nU2l6ZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlaW5pdDogc2VsZi5kYXRhc2V0LnJlaW5pdCB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBzZWxmLmRhdGFzZXQucGVyc2lzdGVudCB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93bjogc2VsZi5kYXRhc2V0LnNob3duIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBzZWxmLmRhdGFzZXQuaGlkZGVuIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2hvdzogc2VsZi5kYXRhc2V0LmJlZm9yZVNob3cgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVIaWRlOiBzZWxmLmRhdGFzZXQuYmVmb3JlSGlkZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBvcHRzLmNvbnRlbnQgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdy5jYWxsYmFjaywgb3B0cy5jb250ZW50KSApIHtcclxuICAgICAgICAgICAgICAgIG9wdHMuY29udGVudCA9IHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0cy5jb250ZW50XSA9PT0gJ2Z1bmN0aW9uJyA/IHdpbmRvdy5jYWxsYmFja1tvcHRzLmNvbnRlbnRdKCkgOiB3aW5kb3cuY2FsbGJhY2tbb3B0cy5jb250ZW50XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coIG9wdHMgKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgfSlcclxufVxyXG5cclxuLypcclxuICogRml4IHRoZSBwb3NpdGlvbiBvZiBiYWNrZHJvcCB1bmRlciB0aGUgb3ZlcmxheSBmaWx0ZXJcclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRml4ZWRcclxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5mdW5jdGlvbiBmaXhlZEJhY2tkcm9wKCBpc0ZpeGVkLCBjYWxsYmFjayA9IG51bGwgKSB7XHJcbiAgICBsZXQgaXNJT1MgPSAvaVAoaG9uZXwob3xhKWQpLy50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZml4ZWQtYmFja2Ryb3BdJyksIChlbG0pID0+IHtcclxuICAgICAgICBsZXQgbm93WSAgICAgICA9IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgICAgICAgbm93WCAgICAgICA9IHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICAgICAgdGFyZ2V0UmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgdGFyZ2V0WCAgICA9IHRhcmdldFJlY3QubGVmdCArIG5vd1gsXHJcbiAgICAgICAgICAgIHRhcmdldFkgICAgPSB0YXJnZXRSZWN0LnRvcCArIG5vd1ksXHJcbiAgICAgICAgICAgIGVuYWJsZWQgICAgPSAvXih0cnVlfDEpJC9pLnRlc3QoIGVsbS5kYXRhc2V0LmZpeGVkQmFja2Ryb3AgKSxcclxuICAgICAgICAgICAgdGFyZ2V0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxtICksXHJcbiAgICAgICAgICAgIG1hcmdpblRvcCAgPSBwYXJzZUludCggdGFyZ2V0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpLCAxMCApLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoIHRhcmdldFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JyksIDEwIClcclxuICAgICAgICBcclxuICAgICAgICBpZiAoICEgZW5hYmxlZCB8fCBpc0lPUyApIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggaXNGaXhlZCApIHtcclxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLWJhY2tkcm9wJylcclxuICAgICAgICAgICAgZWxtLnN0eWxlLnRvcCAgPSBgJHt0YXJnZXRZIC0gbWFyZ2luVG9wfXB4YC8vYCR7LTEgKiBub3dZfXB4YFxyXG4gICAgICAgICAgICBlbG0uc3R5bGUubGVmdCA9IGAke3RhcmdldFggLSBtYXJnaW5MZWZ0fXB4YC8vYCR7LTEgKiBub3dYfXB4YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC1iYWNrZHJvcCcpXHJcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKC0xICogdGFyZ2V0WCwgLTEgKiB0YXJnZXRZKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZml4ZWRCYWNrZHJvcDpjYWxsYmFjayAtIGFmdGVyIERpYWxvZzpiZWZvcmVIaWRlIGFuZCBiZWZvcmUgRGlhbG9nOmhpZGRlbicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKlxyXG4gKiBDcmVhdGUgbmV3IGVsZW1lbnQgb2YgZGlhbG9nIGZvciBhbnkgbm90aWZpY2F0aW9uc1xyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURpYWxvZyggb3B0aW9ucyApIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaWFsb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3BpZ25pdG9yLWRpYWxvZycpLFxyXG4gICAgICAgICAgICBiYWNrZHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFsb2ctYmFja2Ryb3AnKVxyXG5cclxuICAgICAgICBpZiAoIGRpYWxvZ3MubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkaWFsb2dzLCAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBiYWNrZHJvcHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChiYWNrZHJvcHMsIChiYWNrZHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3AucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaWFsb2cgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgYmFja2Ryb3AgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICB2aWV3V2lkdGggID0gd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgIGluc2VydFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gb3B0aW9ucy50aXRsZSA/IG9wdGlvbnMudGl0bGUudG9TdHJpbmcoKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIGlmICggdGl0bGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1oZWFkZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0hlYWRlci5pbm5lckhUTUwgPSB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGlhbG9nSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnNlcnRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQgPyAodHlwZW9mIG9wdGlvbnMuY29udGVudCA9PT0gJ3N0cmluZycgJiYgL15cXHsrLipcXH0kLy50ZXN0KG9wdGlvbnMuY29udGVudCkgPyBwYXJzZU9iamVjdChvcHRpb25zLmNvbnRlbnQpIDogb3B0aW9ucy5jb250ZW50KSA6IG51bGxcclxuICAgICAgICAgICAgICAgIGlmICggY29udGVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlhbG9nQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWJvZHknKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IGNvbnRlbnQucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRWxlbWVudCggY29udGVudCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQm9keS5hcHBlbmQoY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoICE9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnRlbnQucmVtb3RlICYmIGNvbnRlbnQudXJsICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY29udGVudC5sb2FkZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gY29udGVudC5sb2FkZXIucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZGRkO1wiPk5vdyBMb2FkaW5nLi4uPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChjb250ZW50LnVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGNvbnRlbnQucmVtb3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBjb250ZW50Lm1vZGUgfHwgJ2NvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gcmVzcG9uc2UuY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBjb250ZW50WzBdICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gY29udGVudFswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaWFsb2dCb2R5LnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IE9iamVjdC52YWx1ZXMoY29udGVudCkuam9pbignJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkudGV4dENvbnRlbnQgPSBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGlhbG9nQm9keSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zZXJ0Rm9vdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmb290ID0gb3B0aW9ucy5mb290ID8gKHR5cGVvZiBvcHRpb25zLmZvb3QgPT09ICdzdHJpbmcnICYmIC9eXFx7Ky4qXFx9JC8udGVzdChvcHRpb25zLmZvb3QpID8gcGFyc2VPYmplY3Qob3B0aW9ucy5mb290KSA6IG9wdGlvbnMuZm9vdCkgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0NhbGxiYWNrID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25DbGFzcyA9IG9wdGlvbnMuYnV0dG9uIHx8ICdidXR0b24gYnV0dG9uLXNlY29uZGFyeScsLy9kb2N1bWVudC5ib2R5LmRhdGFzZXQuZGlhbG9nQnV0dG9uIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBub1JlbmRlciAgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc091dHNpZGUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggZm9vdCApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dGb290ZXIuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWZvb3RlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYnV0dG9uQ2xhc3MgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKC4uLmJ1dHRvbkNsYXNzLnNwbGl0KCcgJykpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvb3QgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCB0cnVlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAvXm5vbmUkL2kudGVzdCggZm9vdCApOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVuZGVyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIC9eZGlzbWlzcy1vdXRzaWRlJC9pLnRlc3QoIGZvb3QgKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc091dHNpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmNsYXNzTGlzdC5hZGQoZm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIHRpdGxlPVwiQ2xvc2VcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5pbm5lckhUTUwgPSBmb290LnJlcGxhY2UoL1xcXFwoLikvbWcsIFwiJDFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9vdCA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNFbGVtZW50KCBmb290ICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24gPSBmb290XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5rZXlzKGZvb3QpLmxlbmd0aCAhPSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9vdCwgJ2NsYXNzJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKCAuLi5mb290LmNsYXNzLnNwbGl0KCcgJykgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9vdCwgJ2xhYmVsJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmlubmVySFRNTCA9IGZvb3QubGFiZWwucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZm9vdCwgJ2NhbGxiYWNrJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQ2FsbGJhY2sgPSBmb290LmNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb290LCAnMCcpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoIHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgL15ub25lJC9pLnRlc3QoIGZvb3RbMF0gKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUmVuZGVyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAvXmRpc21pc3Mtb3V0c2lkZSQvaS50ZXN0KCBmb290WzBdICk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc091dHNpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uY2xhc3NMaXN0LmFkZChmb290WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiB0aXRsZT1cIkNsb3NlXCI+PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uaW5uZXJIVE1MID0gZm9vdFswXS5yZXBsYWNlKC9cXFxcKC4pL21nLCBcIiQxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi50ZXh0Q29udGVudCA9ICdDbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhIG5vUmVuZGVyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dDYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEJhY2tkcm9wKGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggISBpc091dHNpZGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dGb290ZXIuYXBwZW5kKGRpYWxvZ0J1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGlhbG9nRm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaWFsb2dCdXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrICA9IChtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChtdXRhdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG11dGF0aW9uLmFkZGVkTm9kZXMsIChlbG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsbS5jbGFzc0xpc3QgJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucygnZGlhbG9nLWNvbnRlbnQnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGl0bGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb250ZW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Rm9vdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGlhbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbXV0YXRpb24ub2xkVmFsdWUgJiYgbXV0YXRpb24udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpYWxvZzpzaG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5zaG93biAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwod2luZG93LmNhbGxiYWNrLCBvcHRpb25zLnNob3duKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygd2luZG93LmNhbGxiYWNrW29wdGlvbnMuc2hvd25dID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuc2hvd25dKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbXV0YXRpb24ub2xkVmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlhbG9nOmhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5oaWRkZW4gJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdy5jYWxsYmFjaywgb3B0aW9ucy5oaWRkZW4pICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0aW9ucy5oaWRkZW5dID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuaGlkZGVuXSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaWFsb2c6YmVmb3JlU2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5iZWZvcmVTaG93ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3aW5kb3cuY2FsbGJhY2ssIG9wdGlvbnMuYmVmb3JlU2hvdykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIHdpbmRvdy5jYWxsYmFja1tvcHRpb25zLmJlZm9yZVNob3ddID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuYmVmb3JlU2hvd10oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaylcclxuXHJcbiAgICAgICAgLy8gU2V0IGNsYXNzIG9mIGRpYWxvZyB0cmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgIGxldCBlZmZlY3RcclxuICAgICAgICBzd2l0Y2godHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIC9eKDJ8c2xpZGUtP2luLXJpZ2h0KSQvaS50ZXN0KCBvcHRpb25zLmVmZmVjdCApOlxyXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gJ2VmZmVjdC0yJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXigzfHNsaWRlLT9pbi1ib3R0b20pJC9pLnRlc3QoIG9wdGlvbnMuZWZmZWN0ICk6XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QgPSAnZWZmZWN0LTMnXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIC9eKDR8c3RpY2t5LT91cCkkL2kudGVzdCggb3B0aW9ucy5lZmZlY3QgKTpcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdlZmZlY3QtNCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgL14oNXxmdWxsLT93aWRlKSQvaS50ZXN0KCBvcHRpb25zLmVmZmVjdCApOlxyXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gJ2VmZmVjdC01J1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdlZmZlY3QtMSdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgY2xhc3Mgb2YgZGlhbG9nIHNpemVcclxuICAgICAgICBsZXQgc2l6ZVxyXG4gICAgICAgIHN3aXRjaCh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgL14oeGx8eGxhcmdlKSQvaS50ZXN0KCBvcHRpb25zLnNpemUgKTpcclxuICAgICAgICAgICAgICAgIHNpemUgPSAnc2l6ZS14bCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgL14obGd8bGFyZ2UpJC9pLnRlc3QoIG9wdGlvbnMuc2l6ZSApOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9ICdzaXplLWxnJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXihtZHxtZWRpdW0pJC9pLnRlc3QoIG9wdGlvbnMuc2l6ZSApOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9ICdzaXplLW1kJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXihzbXxzbWFsbCkkL2kudGVzdCggb3B0aW9ucy5zaXplICk6XHJcbiAgICAgICAgICAgICAgICBzaXplID0gJ3NpemUtc20nXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIC9eYXV0byQvaS50ZXN0KCBvcHRpb25zLnNpemUgKTpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmICggdmlld1dpZHRoIDwgNDgxICkgeyAvLyBTbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSAnc2l6ZS14bCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKCB2aWV3V2lkdGggPiA3NjggKSB7IC8vIExhcmdlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gJ3NpemUtbGcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkaWFsb2csIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxyXG4gICAgICAgIC8vb2JzZXJ2ZXIub2JzZXJ2ZShkaWFsb2csIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXHJcblxyXG4gICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCd3cGlnbml0b3ItZGlhbG9nJywgZWZmZWN0KVxyXG4gICAgICAgIGlmICggc2l6ZSAhPT0gJycgKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKHNpemUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXHJcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWJhY2tkcm9wJylcclxuICAgICAgICBkaWFsb2cuYXBwZW5kKGNvbnRhaW5lcilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaWFsb2cpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2Ryb3ApXHJcbiAgICAgICAgaWYgKCAhIG9wdGlvbnMucGVyc2lzdGVudCApIHtcclxuICAgICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpYWxvZy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZEJhY2tkcm9wKGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpYWxvZzpiZWZvcmVIaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5iZWZvcmVIaWRlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3aW5kb3cuY2FsbGJhY2ssIG9wdGlvbnMuYmVmb3JlSGlkZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0aW9ucy5iZWZvcmVIaWRlXSA9PT0gJ2Z1bmN0aW9uJyApIHdpbmRvdy5jYWxsYmFja1tvcHRpb25zLmJlZm9yZUhpZGVdKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qXHJcbiAqIER5bmFtaWNhbGx5IGNyZWF0ZSBkaWFsb2cgZm9yIG5vdGlmaWNhdGlvbiBhbmQgc2hvd1xyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBwdXREaWFsb2coIG9wdGlvbnMgKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVEaWFsb2coIG9wdGlvbnMgKVxyXG59XHJcblxyXG53aW5kb3cuZGlhbG9nU3RhY2tUaW1lciA9IFtdXHJcbi8qXHJcbiAqIFNob3cgZGlhbG9nIGFzIHdyYXBwZXIgb2YgcHV0RGlhbG9nXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coIG9wdGlvbnMgKSB7XHJcbiAgICBwdXREaWFsb2coIG9wdGlvbnMgKS50aGVuKChkaWFsb2cpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZS1pbml0IHRoaXMgZXh0ZW5zaW9uIHNjcmlwdHNcclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLnJlaW5pdCA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWluaXQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRGVsYXkgYnkgdHJhbnNpdGlvbiBhbmltYXRpb24gaW50ZXJ2YWxcclxuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICBmaXhlZEJhY2tkcm9wKHRydWUpXHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgKS50aGVuKCh0aW1lcklkKSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudCB0aGUgbWVtb3J5IGxlYWsgZHVlIHRvIGNvbnRpbnVlIHRpbWVyIGJ5IHNldFRpbWVvdXRcclxuICAgICAgICB3aW5kb3cuZGlhbG9nU3RhY2tUaW1lci5wdXNoKCB0aW1lcklkIClcclxuICAgICAgICBsZXQgbG9vcCA9IHdpbmRvdy5kaWFsb2dTdGFja1RpbWVyLmxlbmd0aCAtIDEsIGlcclxuICAgICAgICBmb3IoIGkgPSAwOyBpIDwgbG9vcDsgaSsrICkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHdpbmRvdy5kaWFsb2dTdGFja1RpbWVyLnNoaWZ0KCkgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXREaWFsb2csIHNob3dEaWFsb2cgfSIsImltcG9ydCB7IHNsZWVwLCBpc0VsZW1lbnQgfSBmcm9tICcuL191dGlscydcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuL19jYWxsYmFjaydcclxuXHJcbi8qKlxyXG4gKiBBZGQgaGFuZGxlciBvZiB0aGUgZmx1Y3R1YXRpb24gZmllbGRcclxuICogQHBhcmFtIHt9XHJcbiAqIEByZXR1cm4ge31cclxuICovXHJcbmZ1bmN0aW9uIGluaXRGbHVjdHVhdGlvbigpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsdWN0dWF0aW9uJyksIChlbG0pID0+IHtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGZyb21JZCAgID0gc2VsZi5kYXRhc2V0LmZyb21JZCxcclxuICAgICAgICAgICAgICAgIHBpY2tFbG0gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJvbUlkKSwvLyBzZWxmLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcclxuICAgICAgICAgICAgICAgIGdldFZhbHVlID0gaXNFbGVtZW50KCBwaWNrRWxtICkgPyBwaWNrRWxtLnZhbHVlIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gID0gaXNFbGVtZW50KCBwaWNrRWxtICkgPyBwaWNrRWxtLmdldEF0dHJpYnV0ZSgncGF0dGVybicpIHx8IG51bGwgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VG8gPSBzZWxmLmRhdGFzZXQuaW5zZXJ0VG8sLy9zZWxmLmdldEF0dHJpYnV0ZSgnZGF0YS1pbnNlcnQtdG8nKSxcclxuICAgICAgICAgICAgICAgIGluc2VydE9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGYuZGF0YXNldC5pbnNlcnRJZCwvL3NlbGYuZ2V0QXR0cmlidXRlKCdkYXRhLWluc2VydC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHNlbGYuZGF0YXNldC5pbnNlcnROYW1lLC8vIHNlbGYuZ2V0QXR0cmlidXRlKCdkYXRhLWluc2VydC1uYW1lJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczogc2VsZi5kYXRhc2V0Lmluc2VydENsYXNzZXMsLy8gc2VsZi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5zZXJ0LWNsYXNzZXMnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogc2VsZi5kYXRhc2V0LmNhbGxiYWNrLC8vIHNlbGYuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyksXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGdldFZhbHVlICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwYXR0ZXJuICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWdleCA9IFJlZ0V4cChwYXR0ZXJuKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICEgcmVnZXgudGVzdChnZXRWYWx1ZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtYXRFcnJvciggcGlja0VsbSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBpY2tFbG0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxyXG4gICAgICAgICAgICAgICAgcGlja0VsbS52YWx1ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICBfaW5jcmVhc2VJdGVtKCBpbnNlcnRUbywgZ2V0VmFsdWUsIGluc2VydE9wdHMgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICB9KVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwicmVtb3ZlLWZsdWN0dWF0aW9uLVwiXScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBfZGVjcmVhc2VJdGVtKCBldnQudGFyZ2V0IClcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbmNyZWFzZSBpdGVtXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWRcclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBfaW5jcmVhc2VJdGVtKCBlbGVtZW50SWQsIHZhbHVlLCBvcHRpb25zICkge1xyXG4gICAgbGV0IGxpc3RFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXHJcbiAgICBpZiAoIGxpc3RFbG0gKSB7XHJcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFsgJ1VMJywgJ09MJywgJ0RMJyBdLmluY2x1ZGVzKGxpc3RFbG0ubm9kZU5hbWUpID8gJ2xpJyA6ICdkaXYnKSxcclxuICAgICAgICAgICAgaW5wdXQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICAgICAgICAgIGF0TmFtZSA9IC8lZC8udGVzdChvcHRpb25zLm5hbWUpID8gb3B0aW9ucy5uYW1lLnJlcGxhY2UoJyVkJywgbGlzdEVsbS5jaGlsZHJlbi5sZW5ndGggKyAxKSA6IG9wdGlvbnMubmFtZVxyXG5cclxuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgaW5wdXQuaWQgICA9IGAke29wdGlvbnMuaWR9LSR7bGlzdEVsbS5jaGlsZHJlbi5sZW5ndGggKyAxfWBcclxuICAgICAgICBpbnB1dC5uYW1lID0gYXROYW1lXHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoIC4uLm9wdGlvbnMuY2xhc3Nlcy5zcGxpdCgnICcpIClcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgdHJ1ZSlcclxuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nXHJcbiAgICAgICAgYnV0dG9uLmlkICAgPSBgcmVtb3ZlLWZsdWN0dWF0aW9uLSR7b3B0aW9ucy5pZH0tJHtsaXN0RWxtLmNoaWxkcmVuLmxlbmd0aCArIDF9YFxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCAnYnV0dG9uJywgJ2J1dHRvbi1zZWNvbmRhcnknIClcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JlbW92ZSBJdGVtJylcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJywgb3B0aW9ucy5jYWxsYmFjaylcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwibWRpIG1kaS1jbG9zZVwiPjwvaT4nXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBfZGVjcmVhc2VJdGVtKCBldnQudGFyZ2V0IClcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKCBpbnB1dCApXHJcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCggYnV0dG9uIClcclxuICAgICAgICBsaXN0RWxtLmFwcGVuZENoaWxkKCBsaXN0Q29udGFpbmVyIClcclxuXHJcbiAgICAgICAgY2FsbGJhY2tbb3B0aW9ucy5jYWxsYmFja10oKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVjcmVhc2UgaXRlbVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gc2VsZiAgQSBjbGlja2VkIGJ1dHRvbiBlbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBfZGVjcmVhc2VJdGVtKCBzZWxmICkge1xyXG4gICAgbGV0IHJlbW92ZUVsbSA9IHNlbGYucGFyZW50Tm9kZSxcclxuICAgICAgICBfY2FsbGJhY2sgPSBzZWxmLmRhdGFzZXQuY2FsbGJhY2sgfHwgJydcclxuXHJcbiAgICByZW1vdmVFbG0uc3R5bGUub3BhY2l0eSA9IDBcclxuICAgIHNsZWVwKDMwMSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChyZW1vdmVFbG0ucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRWxtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVtb3ZlRWxtKVxyXG4gICAgICAgICAgICBpZiAoX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1tfY2FsbGJhY2tdKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPdXRwdXQgZXJyb3JcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGZpZWxkICBBbiBpbnB1dCBmaWVsZCB3aXRoIGVycm9yXHJcbiAqL1xyXG5mdW5jdGlvbiBfZm9ybWF0RXJyb3IoIGZpZWxkICkge1xyXG4gICAgbGV0IHBhcmVudEVsbSA9IGZpZWxkLnBhcmVudE5vZGUsXHJcbiAgICAgICAgYWxlcnRFbG0gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG4gICAgZmllbGQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2JiMjEyNCdcclxuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICB9LCBmYWxzZSlcclxuICAgIGlmICggISBwYXJlbnRFbG0ucXVlcnlTZWxlY3RvcignLnNob3J0LWxpdmVkJykgKSB7XHJcbiAgICAgICAgYWxlcnRFbG0uY2xhc3NMaXN0LmFkZCgnc3VyZml4JywgJ3RleHQtYWxlcnQnLCAnc2hvcnQtbGl2ZWQnKVxyXG4gICAgICAgIGFsZXJ0RWxtLnRleHRDb250ZW50ID0gZmllbGQuZGF0YXNldC5pbnZhbGlkVGV4dCB8fCAnSW5jb3JyZWN0IGZvcm1hdCBvZiBpbnB1dHRlZCdcclxuICAgICAgICBwYXJlbnRFbG0uYXBwZW5kQ2hpbGQoYWxlcnRFbG0pXHJcbiAgICAgICAgc2xlZXAoMTIwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0RWxtLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIHNsZWVwKDIwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRFbG0ucmVtb3ZlQ2hpbGQoYWxlcnRFbG0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGluaXRGbHVjdHVhdGlvbiB9IiwiaW1wb3J0IHsgc2xlZXAsIGlzRWxlbWVudCB9IGZyb20gJy4vX3V0aWxzJ1xyXG5pbXBvcnQgeyBpbml0VG9nZ2xlRmllbGQgfSBmcm9tICcuL190b2dnbGVGaWVsZCdcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuL19jYWxsYmFjaydcclxuXHJcbi8qKlxyXG4gKiBBZGQgaGFuZGxlciBvZiB0aGUgZmx1Y3R1YXRpb24gZmllbGQgd2l0aCB0ZW1wbGF0ZVxyXG4gKiBAcGFyYW0ge31cclxuICogQHJldHVybiB7fVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdEZsdWN0dWF0aW9uVGVtcGxhdGUoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbHVjdHVhdGlvbi10ZW1wbGF0ZScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiAgICAgID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuZGF0YXNldC50ZW1wbGF0ZUlkKS5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBmcm9tSWRzICAgPSBzZWxmLmRhdGFzZXQuZnJvbUlkLnNwbGl0KCcsJyksXHJcbiAgICAgICAgICAgICAgICBwaWNrRWxtcyAgPSBmcm9tSWRzLm1hcCgoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSksXHJcbiAgICAgICAgICAgICAgICBnZXRWYWx1ZXMgPSBwaWNrRWxtcy5tYXAoKG5vZGUpID0+IGlzRWxlbWVudCggbm9kZSApID8gbm9kZS52YWx1ZSA6IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybnMgID0gcGlja0VsbXMubWFwKChub2RlKSA9PiBpc0VsZW1lbnQoIG5vZGUgKSA/IChub2RlLmdldEF0dHJpYnV0ZSgncGF0dGVybicpIHx8IG51bGwpIDogbnVsbCksXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUbyAgPSBzZWxmLmRhdGFzZXQuaW5zZXJ0VG8sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRJZHMgPSBzZWxmLmRhdGFzZXQuaW5zZXJ0SWQuc3BsaXQoJywnKVxyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpXHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgIGlmIChnZXRWYWx1ZXMuZXZlcnkoKHZhbCkgPT4gJycgIT09IHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGdldFZhbHVlcy5ldmVyeSgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gUmVnRXhwKHBhdHRlcm5zW2ldKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtYXRUZW1wbGF0ZUVycm9yKHBpY2tFbG1zW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBfZ2V0TGFzdEl0ZW1JbmRleChpbnNlcnRUbykgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0RWxtICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluc2VydFRvKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRJZHMuZm9yRWFjaCgoYmFzZUlkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRFbG0gPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKGBbaWRePVwiJHtiYXNlSWR9LVwiXWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtSWQgICAgID0gdGFyZ2V0RWxtLmdldEF0dHJpYnV0ZSgnaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbU5hbWUgICA9IHRhcmdldEVsbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBnZXRWYWx1ZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsbS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbG1OYW1lLnJlcGxhY2UoJyVkJywgbmV3SW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbG0uc2V0QXR0cmlidXRlKCdpZCcsIGVsbUlkLnJlcGxhY2UoJyVkJywgbmV3SW5kZXgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUucXVlcnlTZWxlY3RvckFsbCgnW2lkJD1cIiVkXCJdJykuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbG1JZCA9IGVsbS5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnaWQnLCBlbG1JZC5yZXBsYWNlKCclZCcsIG5ld0luZGV4KSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2RlY3JlYXNlVGVtcGxhdGVJdGVtLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBsaXN0RWxtLmFwcGVuZENoaWxkKHRlbXBsYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tFbG1zLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0udmFsdWUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFRvZ2dsZUZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhc2V0LmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrW3NlbGYuZGF0YXNldC5jYWxsYmFja10oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgfSlcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInJlbW92ZS1mbHVjdHVhdGlvbi1cIl0nKSwgKGVsbSkgPT4ge1xyXG4gICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9kZWNyZWFzZVRlbXBsYXRlSXRlbSwgZmFsc2UpXHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGxhc3QgaW5kZXggbnVtYmVyIG9mIGxpc3QgZWxlbWVudHNcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCAgQSBwYXJlbnQgZWxlbWVudCBpZCB0aGF0IGhhcyBsaXN0IGluIHRoZSBjaGlsZHJlblxyXG4gKi9cclxuZnVuY3Rpb24gX2dldExhc3RJdGVtSW5kZXgoZWxlbWVudElkKSB7XHJcbiAgICBsZXQgbGlzdEVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCksXHJcbiAgICAgICAgaXRlbXMgICA9IGxpc3RFbG0uY2hpbGRyZW4gfHwgW11cclxuICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGxhc3RDaGlsZCA9IFsuLi5pdGVtc10uc2xpY2UoLTEpWzBdLFxyXG4gICAgICAgICAgICBpdGVtSW5kZXggPSBsYXN0Q2hpbGQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5nZXRBdHRyaWJ1dGUoJ25hbWUnKS5yZXBsYWNlKC9eLipcXFsoLiopXFxdJC9pLCAnJDEnKVxyXG4gICAgICAgIGlmICgnJWQnID09PSBpdGVtSW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW1JbmRleCwgMTApXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gLTFcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlY3JlYXNlIGl0ZW1cclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGV2ZW50ICBBIGNsaWNrZWQgYnV0dG9uIGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIF9kZWNyZWFzZVRlbXBsYXRlSXRlbShldmVudCkge1xyXG4gICAgbGV0IHJlbW92ZUVsbSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLFxyXG4gICAgICAgIF9jYWxsYmFjayA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhbGxiYWNrIHx8ICcnXHJcblxyXG4gICAgcmVtb3ZlRWxtLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICBzbGVlcCgzMDEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0VsZW1lbnQocmVtb3ZlRWxtLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVsbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlbW92ZUVsbSlcclxuICAgICAgICAgICAgaWYgKF9jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tbX2NhbGxiYWNrXSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICogT3V0cHV0IGVycm9yXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCAgQW4gaW5wdXQgZmllbGQgd2l0aCBlcnJvclxyXG4gKi9cclxuZnVuY3Rpb24gX2Zvcm1hdFRlbXBsYXRlRXJyb3IoIGZpZWxkICkge1xyXG4gICAgbGV0IHBhcmVudEVsbSA9IGZpZWxkLnBhcmVudE5vZGUsXHJcbiAgICAgICAgYWxlcnRFbG0gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG4gICAgZmllbGQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2JiMjEyNCdcclxuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGV2dC50YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICB9LCBmYWxzZSlcclxuICAgIGlmICggISBwYXJlbnRFbG0ucXVlcnlTZWxlY3RvcignLnNob3J0LWxpdmVkJykgKSB7XHJcbiAgICAgICAgYWxlcnRFbG0uY2xhc3NMaXN0LmFkZCgnc3VyZml4JywgJ3RleHQtYWxlcnQnLCAnc2hvcnQtbGl2ZWQnKVxyXG4gICAgICAgIGFsZXJ0RWxtLnRleHRDb250ZW50ID0gZmllbGQuZGF0YXNldC5pbnZhbGlkVGV4dCB8fCAnSW5jb3JyZWN0IGZvcm1hdCBvZiBpbnB1dHRlZCdcclxuICAgICAgICBwYXJlbnRFbG0uYXBwZW5kQ2hpbGQoYWxlcnRFbG0pXHJcbiAgICAgICAgc2xlZXAoMTIwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0RWxtLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgIHNsZWVwKDIwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRFbG0ucmVtb3ZlQ2hpbGQoYWxlcnRFbG0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGluaXRGbHVjdHVhdGlvblRlbXBsYXRlIH0iLCIvKipcclxuICogQXN5bmNocm9ub3VzbHkgcG9zdCBhcyBhIHdyYXBwZXIgZm9yIHRoZSBGZXRjaCBBUElcclxuICogQHBhcmFtICB7c3RyaW5nfSBbdXJsPScnXSAgLSBVUkwgb2YgdGhlIHJlcXVlc3QgZGVzdGluYXRpb25cclxuICogQHBhcmFtICB7T2JqZWN0fSBbZGF0YT17fV0gLSBUaGUga2V5LXZhbHVlIHR5cGUgb2JqZWN0IG9mIGRhdGEgdG8gc2VuZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtkYXRhdHlwZT0nanNvbiddIC0gUmVzcG9uc2UgZGF0YSB0eXBlIChkZWZhdWx0cyB0byBKU09OKVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFt0aW1lb3V0PTE1MDAwXSAtIFNldCB0aW1lb3V0IGluIGZldGNoaW5nIChkZWZhdWx0cyB0byBhZnRlciAxNSBzZWMpXHJcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIG9mIGZldGNoIHJlcXVlc3QgaXMgcmV0dXJuZWQgYXMgYSBwcm9taXNlIG9iamVjdFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEoIHVybCA9ICcnLCBkYXRhID0ge30sIGRhdGF0eXBlID0gJ2pzb24nLCB0aW1lb3V0ID0gMTUwMDAgKSB7XHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpLFxyXG4gICAgICAgICAgdGltZW91dElkICA9IHNldFRpbWVvdXQoKCkgPT4geyBjb250cm9sbGVyLmFib3J0KCkgfSwgdGltZW91dCApXHJcbiAgICBsZXQgcGFyYW1zICA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG5cclxuICAgIHBhcmFtcy5hcHBlbmQoICdhY3Rpb24nLCAnd3BpZ25pdG9yX2FqYXgnIClcclxuICAgIHBhcmFtcy5hcHBlbmQoICdub25jZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnX3dwbm9uY2UnICkudmFsdWUgKVxyXG4gICAgaWYgKCBkYXRhICkge1xyXG4gICAgICAgIGZvciAoIGxldCBrZXkgaW4gZGF0YSApIHtcclxuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIGRhdGEsIGtleSApICkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgga2V5LCBkYXRhW2tleV0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCB1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgY2FjaGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgIC8vaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcclxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZScsXHJcbiAgICAgICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkoIGRhdGEgKSxcclxuICAgICAgICAgICAgYm9keTogcGFyYW1zLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLyogLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbHVyZSB0byBmZXRjaDonLCBlcnJvcilcclxuICAgICAgICB9KSAqL1xyXG4gICAgICAgIGlmICggISByZXNwb25zZS5vayApIHtcclxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGBzdGF0dXMgY29kZTogJHtyZXNwb25zZS5zdGF0dXN9LCB0ZXh0OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGVzYylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGF0eXBlID09PSAnanNvbicgPyBhd2FpdCByZXNwb25zZS5qc29uKCkgOiBhd2FpdCByZXNwb25zZS50ZXh0KClcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0SWQgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgaGlkZGVuIGZpZWxkIGZvciBmb3JtXHJcbiAqIEBwYXJhbSAgeyFzdHJpbmd9IC0gTmFtZSBhdHRyaWJ1dGUgb2YgaW5wdXQgdGFnXHJcbiAqIEBwYXJhbSAgeyFzdHJpbmd9IC0gVmFsdWUgYXR0cmlidXRlIG9mIGlucHV0IHRhZ1xyXG4gKiBAcmV0dXJuIHtPYmplY3R9IERPTSBPYmplY3Qgb2YgaW5wdXQgdGFnXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRQb3N0RmllbGQoIG5hbWUsIHZhbHVlICkge1xyXG4gICAgbGV0IG5ld0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lucHV0JyApXHJcbiAgICBuZXdGaWVsZC5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2hpZGRlbicgKVxyXG4gICAgbmV3RmllbGQuc2V0QXR0cmlidXRlKCAnbmFtZScsIG5hbWUgKVxyXG4gICAgbmV3RmllbGQuc2V0QXR0cmlidXRlKCAndmFsdWUnLCB2YWx1ZSApXHJcbiAgICByZXR1cm4gbmV3RmllbGRcclxufVxyXG5cclxuZXhwb3J0IHsgcG9zdERhdGEsIGFkZFBvc3RGaWVsZCB9XHJcbiIsIi8qKlxyXG4gKiBQbHVnaW4gdG8gYmluZCB0b2dnbGVhYmxlIHBhc3N3b3JkIGZpZWxkXHJcbiAqIEBwYXJhbSB7fVxyXG4gKiBAcmV0dXJuIHt9XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VG9nZ2xlRmllbGQoKSB7XHJcbiAgICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRpb25zKVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0aW9ucylcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkLXRvZ2dsZScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBwYXNzaXZlU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZVxyXG4gICAgICAgIGVsbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVUb2dnbGVGaWVsZCwgb3B0aW9ucylcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfaGFuZGxlVG9nZ2xlRmllbGQsIG9wdGlvbnMpXHJcbiAgICAgICAgX2JlaGF2aW9yVG9nZ2xlRmllbGQoZWxtKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gX2hhbmRsZVRvZ2dsZUZpZWxkKGV2dCkge1xyXG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JylcclxuICAgIF9iZWhhdmlvclRvZ2dsZUZpZWxkKGV2dC50YXJnZXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9iZWhhdmlvclRvZ2dsZUZpZWxkKGVsZW1lbnQpIHtcclxuICAgIGxldCBpbnB1dCA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG5cclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9uJykpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZicpKVxyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZicpKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbicpKVxyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRUb2dnbGVGaWVsZCB9IiwiLyoqXHJcbiAqIEF3YWl0IHVudGlsIG5leHQgcHJvY2VzcyBhdCBzcGVjaWZpYyBtaWxsaXNlY1xyXG4gKiBAcGFyYW0ge251bWJlcn0gW21zZWM9MTAwMF0gLSBNaWxsaXNlY29uZHNcclxuICogQHVzYWdlIGBzbGVlcCgyMDAwKS50aGVuKCgpID0+IHsgTmV4dCBQcm9jZXNzIH0pYFxyXG4gKi9cclxuZnVuY3Rpb24gc2xlZXAoIG1zZWMgPSAxMDAwICkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7IHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKCkgfSwgbXNlYykgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGV0aGVyIHZhcmlhYmxlIGlzIGFuIE9iamVjdFxyXG4gKiBAcGFyYW0geyEobnVtYmVyfHN0cmluZ3xPYmplY3R8Ym9vbGVhbil9IGl0ZW0gLSBWYXJpYWJsZSB5b3Ugd2FudCB0byBjaGVja1xyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QoIG8gKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBvLmNvbnN0cnVjdG9yID09PSBPYmplY3RcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB3aGV0aGVyIHZhcmlhYmxlIGlzIGFuIEVsZW1lbnRcclxuICogQHBhcmFtIHshKG51bWJlcnxzdHJpbmd8T2JqZWN0fGJvb2xlYW4pfSBub2RlIC0gVmFyaWFibGUgeW91IHdhbnQgdG8gY2hlY2tcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRWxlbWVudCggbm9kZSApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxyXG4gICAgfSBjYXRjaCggZSApIHtcclxuICAgICAgICBpZiAoICggdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICkgJiYgKCBub2RlLm5vZGVUeXBlID09PSAxICkgJiYgKCB0eXBlb2Ygbm9kZS5zdHlsZSA9PT0gJ29iamVjdCcgKSAmJiAoIHR5cGVvZiBub2RlLm93bmVyRG9jdW1lbnQgPT09ICdvYmplY3QnICkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhKCBub2RlICYmICggbm9kZS5ub2RlTmFtZSB8fCAoIG5vZGUucHJvcCAmJiBub2RlLmF0dHIgJiYgbm9kZS5maW5kICkgKSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2UgbXVsdGlwbGUgb2JqZWN0cyBnaXZlbiBhcyBhcmd1bWVudHMsIG1haW50YWluaW5nIGEgZGVlcCBoaWVyYXJjaHlcclxuICogQHBhcmFtIHshT2JqZWN0fSBhcmdzWzBdIC0gT2JqZWN0IHRvIG1lcmdlIGZyb21cclxuICogQHBhcmFtIHshT2JqZWN0fSBhcmdzW25dIC0gQW55IG9iamVjdHMgdG8gbWVyZ2VcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gZXh0ZW5kKCAuLi5hcmdzICkge1xyXG4gICAgY29uc3QgdG8gPSBPYmplY3QoIGFyZ3NbMF0gKVxyXG4gICAgZm9yICggbGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSApIHtcclxuICAgICAgICBjb25zdCBuZXh0U291cmNlID0gYXJnc1tpXVxyXG4gICAgICAgIGlmICggbmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKCBPYmplY3QoIG5leHRTb3VyY2UgKSApXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggbmV4dFNvdXJjZSwgbmV4dEtleSApXHJcbiAgICAgICAgICAgICAgICBpZiAoIGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpc09iamVjdCggdG9bbmV4dEtleV0gKSAmJiBpc09iamVjdCggbmV4dFNvdXJjZVtuZXh0S2V5XSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlbmQoIHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldIClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAhIGlzT2JqZWN0KCB0b1tuZXh0S2V5XSApICYmIGlzT2JqZWN0KCBuZXh0U291cmNlW25leHRLZXldICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKCB0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBwcm9wZXJ0eSBpbiBhbiBvYmplY3QgYXMgc2FtZSBgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKClgXHJcbiAqIEBwYXJhbSB7IXN0cmluZ30gcHJvcCAtIENoZWNrIHByb3BlcnR5IG5hbWVcclxuICogQHBhcmFtIHshT2JqZWN0fSBvYmogLSBUYXJnZXQgb2JqZWN0XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNQcm9wKCBwcm9wLCBvYmogKSB7XHJcbiAgICByZXR1cm4gISEob2JqKSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9iaiwgcHJvcCApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gZXhjZXB0aW9uIGxvZ2dpbmdcclxuICpcclxuICogQHBhcmFtIHshc3RyaW5nfSBtZXNzYWdlIC0gTWVzc2FnZSBib2R5IHRvIG5vdGlmeVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9XCJlcnJvclwiXSAtIE5vdGlmaWNhdGlvbiB0eXBlXHJcbiAqIEByZXR1cm4ge3ZvaWR9XHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dnZXIoIG1lc3NhZ2UsIHR5cGUgPSAnZXJyb3InICkge1xyXG4gICAgaWYgKCAnZXJyb3InID09PSB0eXBlICkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciggbWVzc2FnZSApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGVbdHlwZV0oIG1lc3NhZ2UgKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgdGhlIHN0cmluZyBsaWtlIEphdmFTY3JpcHQgb2JqZWN0IHRvIGFjdHVhbCBPYmplY3RcclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZU9iamVjdCggc3RyICkge1xyXG4gICAgbGV0IG5ld09iaiA9IHt9LFxyXG4gICAgICAgIF90bXBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG5ld09iaiA9IEpTT04ucGFyc2Uoc3RyKVxyXG4gICAgfSBjYXRjaCggZSApIHtcclxuICAgICAgICBfdG1wID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eKFxce3xcXFspK3woXFxdfFxcfSkrJC9nLCAnJykuc3BsaXQoJywnKVxyXG4gICAgICAgIC8vIF90bXAgPSBfdG1wLm1hcCgoeCkgPT4geC5zcGxpdCgvKD88PV5bXjpdKz8pOi8pLm1hcCgoeSkgPT4geS50cmltKCkpKSA8LSBpcyBDaHJvbWUgb25seVxyXG4gICAgICAgIF90bXAgPSBfdG1wLm1hcCgoZnJhZ21lbnRYKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfbWF0Y2hlcyA9IGZyYWdtZW50WC5tYXRjaCgvXlteOl0qOi8pLFxyXG4gICAgICAgICAgICAgICAgX3JldGFyciAgPSBfbWF0Y2hlcyA/IFsgX21hdGNoZXNbMF0ucmVwbGFjZSgnOicsICcnKSwgZnJhZ21lbnRYLnJlcGxhY2UoX21hdGNoZXNbMF0sICcnKSBdIDogWyBmcmFnbWVudFggXVxyXG4gICAgICAgICAgICByZXR1cm4gX3JldGFyclxyXG4gICAgICAgIH0pLm1hcCgoZnJhZ21lbnRZKSA9PiBmcmFnbWVudFkgfHwgZnJhZ21lbnRZLnRyaW0oKSlcclxuICAgICAgICBfdG1wID0gX3RtcC5yZWR1Y2UoKG9iaiwgeCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHhbMF0gJiYgeFsxXSApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wICA9IHhbMF0udHJpbSgpLnJlcGxhY2UoL14oJ3xcIikrfChcInwnKSskL2csICcnKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHhbMV0udHJpbSgpLnJlcGxhY2UoL14oJ3xcIikrfChcInwnKSskL2csICcnKVxyXG4gICAgICAgICAgICAgICAgaWYgKCAvXmNhbGxiYWNrJC9pLnRlc3QoIHByb3AgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBGdW5jdGlvbi5jYWxsKHRoaXMsIGByZXR1cm4gJHt2YWx1ZX1gKSgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAoIHgubGVuZ3RoID09IDEgJiYgeFswXSApIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHhbMF0udHJpbSgpLnJlcGxhY2UoL14oJ3xcIikrfChcInwnKSskL2csICcnKVxyXG4gICAgICAgICAgICAgICAgb2JqW2ldID0gdmFsdWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgICAgbmV3T2JqID0gX3RtcCA/IE9iamVjdC5hc3NpZ24obmV3T2JqLCBfdG1wKSA6IG5ld09ialxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09ialxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRXZlbnQoIGVsZW1lbnQsIGV2ZW50ICkge1xyXG4gICAgaWYgKCBkb2N1bWVudC5jcmVhdGVFdmVudCApIHtcclxuICAgICAgICBsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdIVE1MRXZlbnRzJyApXHJcbiAgICAgICAgZXZ0LmluaXRFdmVudCggZXZlbnQsIHRydWUsIHRydWUgKVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmRpc3BhdGNoRXZlbnQoIGV2dCApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZmlyZUV2ZW50KCBgb24ke2V2ZW50fWAsIGV2dCApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50RWxlbWVudHMoIHNlbGVjdG9yICkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkubGVuZ3RoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExhc3RJdGVtSWQoIHNlbGVjdG9yICkge1xyXG4gICAgbGV0IE51bWVyaWNJZHMgPSBbXVxyXG4gICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcnNlSWQgPSBlbG0uaWQuc3BsaXQoIC8tfF98XFwvfCwvIClcclxuICAgICAgICBOdW1lcmljSWRzLnB1c2goIHBhcnNlSW50KCBwYXJzZUlkW3BhcnNlSWQubGVuZ3RoIC0gMV0sIDEwICkgKVxyXG4gICAgfSApXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIC4uLk51bWVyaWNJZHMgKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb2FkZXIoIGlkPW51bGwsIGNvbG9yPScjY2NjJywgd2lkdGg9MTAwLCBoZWlnaHQ9MTAwLCBkb3RzPTQgKSB7XHJcbiAgICBsZXQgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgICAgIHN2Z0VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3N2ZycpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGRpYW1ldGVyID0gNixcclxuICAgICAgICBnYXAgPSAod2lkdGggLSBkb3RzICogZGlhbWV0ZXIpIC8gKGRvdHMgKyAxKVxyXG5cclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmVyc2lvbicsICcxLjEnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgneG1sbnMnLCBucylcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgJzBweCcpXHJcbiAgICBzdmdFbG0uc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCAnMHB4JylcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YClcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZW5hYmxlLWJhY2tncm91bmQnLCAnbmV3IDAgMCAwIDAnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgneG1sOnNwYWNlJywgJ3ByZXNlcnZlJylcclxuICAgIGZvciAoIGxldCBpID0gMTsgaSA8PSBkb3RzOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IGNpcmNsZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdjaXJjbGUnKSxcclxuICAgICAgICAgICAgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2FuaW1hdGUnKSxcclxuICAgICAgICAgICAgbXggPSBnYXAgKiBpICsgKDYgKiAoaSAtIDEpKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsIGNvbG9yKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlJywgJ25vbmUnKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCBteClcclxuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgKGhlaWdodCAtIGRpYW1ldGVyKSAvIDIpXHJcbiAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgZGlhbWV0ZXIpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnMXMnKVxyXG4gICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZhbHVlcycsICcwOzE7MCcpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncmVwZWF0Q291bnQnLCAnaW5kZWZpbml0ZScpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYmVnaW4nLCAwLjEgKyAoMC4xICogaSkpXHJcbiAgICAgICAgY2lyY2xlLmFwcGVuZENoaWxkKGFuaW1hdGUpXHJcbiAgICAgICAgc3ZnRWxtLmFwcGVuZENoaWxkKGNpcmNsZSlcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdFbG0pXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWNvbnRhaW5lcicpXHJcbiAgICBpZiAoIGlkICkge1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoICdpZCcsIGlkIClcclxuICAgIH1cclxuICAgIHJldHVybiBjb250YWluZXJcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTm90aWNlKCBtZXNzYWdlLCBiZWZvcmU9bnVsbCwgYWZ0ZXI9bnVsbCApIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgaWYgKCBiZWZvcmUgKSB7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCggYmVmb3JlIClcclxuICAgIH1cclxuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCAnbm90aWNlLW1lc3NhZ2UnIClcclxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IG1lc3NhZ2VcclxuICAgIHBhcmFncmFwaC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJ1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCggcGFyYWdyYXBoIClcclxuICAgIGlmICggYWZ0ZXIgKSB7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCggYWZ0ZXIgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdyYXBwZXJcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5Tm90aWNlKCBtZXNzYWdlICkge1xyXG4gICAgbGV0IHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpY2UtbWVzc2FnZScpXHJcblxyXG4gICAgaWYgKCB0YXJnZXRFbG0gKSB7XHJcbiAgICAgICAgdGFyZ2V0RWxtLnRleHRDb250ZW50ID0gbWVzc2FnZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgc2xlZXAsIGlzT2JqZWN0LCBpc0VsZW1lbnQsIGV4dGVuZCwgaGFzUHJvcCwgbG9nZ2VyLCBwYXJzZU9iamVjdCwgdHJpZ2dlckV2ZW50LCBjb3VudEVsZW1lbnRzLCBnZXRMYXN0SXRlbUlkLCByZW5kZXJMb2FkZXIsIGNyZWF0ZU5vdGljZSwgbW9kaWZ5Tm90aWNlIH1cclxuIiwiLyoqXHJcbiAqIFdQLUlnbml0b3IgcGx1Z2luXHJcbiAqIEBzaW5jZSAxLjAuMyAtPiAxLjEuMFxyXG4gKi9cclxuLy9pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xyXG5pbXBvcnQgeyBzbGVlcCwgaGFzUHJvcCwgbG9nZ2VyLCB0cmlnZ2VyRXZlbnQgfSBmcm9tICcuL191dGlscydcclxuaW1wb3J0IHsgcG9zdERhdGEsIGFkZFBvc3RGaWVsZCB9IGZyb20gJy4vX3Bvc3REYXRhJ1xyXG5pbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gJy4vX2NhbGxiYWNrJ1xyXG5pbXBvcnQgeyBpbml0RGlhbG9nLCBzaG93RGlhbG9nIH0gZnJvbSAnLi9fZGlhbG9nJ1xyXG5pbXBvcnQgeyBpbml0Rmx1Y3R1YXRpb24gfSBmcm9tICcuL19mbHVjdHVhdGlvbidcclxuaW1wb3J0IHsgaW5pdEZsdWN0dWF0aW9uVGVtcGxhdGUgfSBmcm9tICcuL19mbHVjdHVhdGlvblRlbXBsYXRlJ1xyXG5pbXBvcnQgeyBpbml0VG9nZ2xlRmllbGQgfSBmcm9tICcuL190b2dnbGVGaWVsZCdcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBBSkFYX1VSTCAgPSB3aW5kb3cuYWpheHVybCB8fCBudWxsLFxyXG4gICAgICAgICAgcGFyc2VkVVJMID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuXHJcbiAgICB3aW5kb3cuY2FsbGJhY2sgPSBjYWxsYmFja1xyXG5cclxuICAgIGluaXREaWFsb2coKVxyXG4gICAgaW5pdEZsdWN0dWF0aW9uKClcclxuICAgIGluaXRGbHVjdHVhdGlvblRlbXBsYXRlKClcclxuICAgIGluaXRUb2dnbGVGaWVsZCgpXHJcblxyXG4gICAgLy8gRm9jdXMgY3VycmVudCBoZWxwIHRhYlxyXG4gICAgaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGV4dHVhbC1oZWxwLXdyYXAnKSApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZXh0dWFsLWhlbHAtY29sdW1ucyB1bCBsaScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YWJMaW5rTmFtZSA9IGVsbS5pZC5zcGxpdCgnLScpWzJdLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcnNlZFVSTC5zZWFyY2hQYXJhbXMpLmdldCgndGFiJylcclxuXHJcbiAgICAgICAgICAgIGlmICggdGFiTGlua05hbWUgPT09IGN1cnJlbnRUYWIgKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoIGVsbS5xdWVyeVNlbGVjdG9yKCdhJyksICdjbGljaycgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBhbnNpb25hYmxlIEJsb2NrXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmF3ZXItY29udHJvbCcpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIF9sYWJlbCA9IF9zZWxmLnF1ZXJ5U2VsZWN0b3IoJy5kcmF3ZXItbGFiZWwtdGV4dCcpLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0QmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfc2VsZi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykpXHJcblxyXG4gICAgICAgICAgICBfc2VsZi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpXHJcbiAgICAgICAgICAgIGlmIChfc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEJsb2NrLnNjcm9sbEhlaWdodH1weGBcclxuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJylcclxuICAgICAgICAgICAgICAgIF9sYWJlbC50ZXh0Q29udGVudCA9IF9zZWxmLmdldEF0dHJpYnV0ZSgnZGF0YS1zdHJldGNoZWQnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0QmxvY2suc3R5bGUuaGVpZ2h0ID0gJzVlbSdcclxuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJylcclxuICAgICAgICAgICAgICAgIF9sYWJlbC50ZXh0Q29udGVudCA9IF9zZWxmLmdldEF0dHJpYnV0ZSgnZGF0YS1zaHJpbmtlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2xlZXAoMzAxKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGFyZ2V0QmxvY2suc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9jdXNpbmdFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJzZWRVUkwuaGFzaC5yZXBsYWNlKCcjJywgJycpKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUb3AgPSB0YXJnZXRCbG9jay5jbG9zZXN0KCd0cicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwYWRtaW5iYXInKS5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVkgID0gdGFyZ2V0VG9wICsgb2Zmc2V0VG9wIC0gYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBpZiAoZm9jdXNpbmdFbG0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlWSA9IGZvY3VzaW5nRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIG9mZnNldFRvcCAtIGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IG1vdmVZLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gV2F0Y2ggRE9NIGJ5IE11dGF0aW9uT2JzZXJ2ZXJcclxuICAgIGNvbnN0IG1vQ29uZmlnICAgID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSxcclxuICAgICAgICAgIG1vQ2FsbGJhY2sgID0gZnVuY3Rpb24obXV0YXRpb25zTGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja1VsSWRzID0gWyAnYWxsb3dlZC1ob3N0cycsICdhbGxvd2VkLWFkZHJlc3NlcycsICdhbGxvd2VkLXJlZmVyZXJzJywgJ2F1dGgtYWNjb3VudHMnIF0sXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrVGV4dGFyZWFJZHMgPSBbICdwcmV2aWV3LXdwLWNvbmZpZycsICdodGFjY2VzcycgXVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICgobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgY2hlY2tVbElkcy5pbmNsdWRlcyhtdXRhdGlvbi50YXJnZXQuaWQpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgY2hlY2tUZXh0YXJlYUlkcy5pbmNsdWRlcyhtdXRhdGlvbi50YXJnZXQuaWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRCbG9jayA9IG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcuZXhwYW5kZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCbG9jay5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvYnNlcnZlciAgID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobW9DYWxsYmFjaylcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuc2lvbmFibGUtYmxvY2snKSwgKG5vZGUpID0+IHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIG1vQ29uZmlnKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBVcGRhdGUgXCJ3cC1jb25maWcucGhwXCIgc2VjdGlvblxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLW9wdGlvbicpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kaWZ5Q29uZmlnUHJldmlldygpXHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICB9KVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lXj1cIndwX2NvbmZpZ1tcIl0nKSwgKGVsbSkgPT4ge1xyXG4gICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoay0ke2V2dC50YXJnZXQuaWR9YCkuY2hlY2tlZCApIHtcclxuICAgICAgICAgICAgICAgIG1vZGlmeUNvbmZpZ1ByZXZpZXcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICB9KVxyXG4gICAgbW9kaWZ5Q29uZmlnUHJldmlldygpXHJcblxyXG4gICAgLy8gVXBkYXRlIFwiLmh0YWNjZXNzXCIgc2VjdGlvblxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiYWR2YW5jZWQtb3B0aW9uLVwiXScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlbG9hZC1wcmV2aWV3LWh0YWNjZXNzJyksICdjbGljaycgKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBCaW5kIHRoZSBGb2xsb3cgQ29sb3JcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9sbG93LWNvbG9yXScpLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgbGV0IGlucHV0ICA9IGVsbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLFxyXG4gICAgICAgICAgICBmb2xsb3dDb2xvciA9ICggZWxtICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yICAgID0gZWxtLmRhdGFzZXQuZm9sbG93Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyAgPSBlbG0uY2xhc3NMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSAgID0gZWxtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgJiYgZWxtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggJ2luaGVyaXQnID09PSBjb2xvciApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFjdGl2ZSAmJiAhIGNsYXNzZXMuY29udGFpbnMoJ3R4dC1wcmltJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuYWRkKCd0eHQtcHJpbScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5yZW1vdmUoJ3R4dC1wcmltJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIGlmICggJycgIT09IGNvbG9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYWN0aXZlICYmIGVsbS5zdHlsZS5jb2xvciAhPT0gY29sb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlLmNvbG9yID0gJ3Vuc2V0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS8vIGVuZDogZm9sbG93Q29sb3IoKVxyXG5cclxuICAgICAgICBpZiAoIGlucHV0ID09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZm9sbG93Q29sb3IoZXZ0LnRhcmdldC5jbG9zZXN0KCdsYWJlbCcpKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG5cclxuICAgICAgICBmb2xsb3dDb2xvcihlbG0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldC1wYWdlLXBhdGgnKSApIHtcclxuICAgICAgICAvLyBVcGRhdGUgZnJvbnRlbmQgSFRNTCBzZWN0aW9uXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldC1wYWdlLXBhdGgnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX2tleSA9IHdpbmRvdy5ldmVudCA/IHdpbmRvdy5ldmVudC5rZXlDb2RlIDogZXZ0LndoaWNoXHJcblxyXG4gICAgICAgICAgICBpZiAoIF9rZXkgPT0gMTMgKSB7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNvbW1pdC10by1jbGVhbnVwJyksICdjbGljaycgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldC1wYWdlLXBhdGgnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudCggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jb21taXQtdG8tY2xlYW51cCcpLCAnY2xpY2snIClcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0LW5hbWVzcGFjZXMnKSApIHtcclxuICAgICAgICAvLyBIYW5kbGUgd2hlbiBjaGFuZ2VkIFJlc3QgQVBJIE5hbWVzcGFjZSBiZWhhdmlvclxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWVePVwibmFtZXNwYWNlc1tcIl0nKSwgKGVsbSkgPT4ge1xyXG4gICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNsdWdfbnMgPSBldnQudGFyZ2V0LmlkLnJlcGxhY2UoJ3Jlc3QtbmFtZXNwYWNlLScsICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBwYWlyX2ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGh0dHAtY29kZS0ke3NsdWdfbnN9YClcclxuICAgICAgICAgICAgICAgIGlmICggJ2FsbG93X2FsbCcgPT09IGV2dC50YXJnZXQudmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpcl9maWVsZC52YWx1ZSA9ICcyMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgcGFpcl9maWVsZC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpcl9maWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICBwYWlyX2ZpZWxkLnZhbHVlID0gJzQwNCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdXRvLWZvY3VzIHRvIHNwZWNpZmllZCBoYXNoIG9mIHNlbGYgVVJMXHJcbiAgICBpZiAoIHBhcnNlZFVSTC5oYXNoICE9PSAnJyApIHtcclxuICAgICAgICBsZXQgdGFyZ2V0RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyc2VkVVJMLmhhc2gucmVwbGFjZSgnIycsICcnKSlcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEVsbSkge1xyXG4gICAgICAgICAgICBsZXQgZXhwYW5kRWxtID0gdGFyZ2V0RWxtLmNsb3Nlc3QoJy5leHBhbnNpb25hYmxlLWJsb2NrJylcclxuICAgICAgICAgICAgaWYgKGV4cGFuZEVsbSAmJiAhZXhwYW5kRWxtLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KCBleHBhbmRFbG0ubmV4dEVsZW1lbnRTaWJsaW5nLCAnY2xpY2snIClcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRFbG0ub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRFbG0uY2xhc3NMaXN0LmFkZCgnZm9jdXMnLCAnZm9jdXMtYWN0aXZlJylcclxuICAgICAgICAgICAgdGFyZ2V0RWxtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy1hY3RpdmUnKVxyXG4gICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRhcmdldEVsbS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cy1hY3RpdmUnKSB9LCA1MDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmVudCBoYW5kbGVyIGZvciBlYWNoIGJ1dHRvbiBjbGlja2VkXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJidG4tXCJdJyksIChlbG0pID0+IHtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3BpZ25pdG9yLWZvcm0nKSxcclxuICAgICAgICAgICAgICAgIGZkICAgPSBuZXcgRm9ybURhdGEoIGZvcm0gKSxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB7fVxyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IFtfcCwgX3ZdIG9mIGZkLmVudHJpZXMoKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggX3YgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLmlkICE9PSAnYnRuLXVwZGF0ZS1odGFjY2VzcycgJiYgX3AgPT09ICdodGFjY2VzcycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtfcF0gPSBfdlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzd2l0Y2goIHNlbGYuaWQgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHbG9iYWxzIFRhYlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYnRuLW1vdmUtaW5zdGFsbC1wYXRoJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcigpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0J1dHRvblRleHQgPSAnQ2xvc2UnXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ21vdmUtaW5zdGFsbC1wYXRoJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhKCBBSkFYX1VSTCwgZGF0YSApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHJlc3BvbnNlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBoYXNQcm9wKCAnYnV0dG9uX3RleHQnLCByZXNwb25zZSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uVGV4dCA9IHJlc3BvbnNlLmJ1dHRvbl90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZS5yZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb25DbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coICdDbGlja2VkIFJlLWxvZ2luJywgbG9jYXRpb24uaG9zdG5hbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciggbGV0IGNvb2tpZV9uYW1lIG9mIHJlc3BvbnNlLmF1dGhfY29va2llcyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7Y29va2llX25hbWV9PTtkb21haW49JHtsb2NhdGlvbi5ob3N0bmFtZX07bWF4LWFnZT0wYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyZWN0X3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlEaWFsb2dCb2R5KCAnbW92ZS1pbnN0YWxsLXBhdGgnLCByZXNwb25zZS5tZXNzYWdlLCBbICd0ZXh0LXN1Y2Nlc3MnIF0sIHJlc3BvbnNlLmJ1dHRvbl90ZXh0LCBbICdidXR0b24tcHJpbWFyeScgXSwgb25DbGljayApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IHJlc3BvbnNlLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcihlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RGlhbG9nQm9keSggJ21vdmUtaW5zdGFsbC1wYXRoJywgYCR7ZXJyb3IubmFtZX06ICR7ZXJyb3IubWVzc2FnZX1gLCBbICd0ZXh0LWFsZXJ0JyBdLCBkaWFsb2dCdXR0b25UZXh0LCBbICdidXR0b24tc2Vjb25kYXJ5JyBdIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tbW92ZS13cC1jb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ21vdmUtd3AtY29uZmlnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhKCBBSkFYX1VSTCwgZGF0YSApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRDbGFzc2VzID0gcmVzcG9uc2UucmVzdWx0ID8gWyAndGV4dC1zdWNjZXNzJyBdIDogWyAndGV4dC1hbGVydCcgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlEaWFsb2dCb2R5KCAnbW92ZS13cC1jb25maWcnLCByZXNwb25zZS5tZXNzYWdlLCBhZGRDbGFzc2VzIClcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2J0bi11cGRhdGUtd3AtY29uZmlnJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHRhY2Nlc3MnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPW1ldGhvZF0nKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2VsZi5pZC5yZXBsYWNlKCdidG4tJywgJycpKVxyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZV49XCJ3cF9jb25maWdbXCJdJyksIChlbG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hrLSR7ZWxtLmlkfWApLmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZhbCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxtLnR5cGUgPT09ICdjaGVja2JveCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZhbCA9IGVsbS5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92YWwgPSBlbG0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFBvc3RGaWVsZCggZWxtLmdldEF0dHJpYnV0ZSgnbmFtZScpLCBfdmFsICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tcmVzdG9yZS13cC1jb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXdwLWNvbmZpZycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodGFjY2VzcycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9bWV0aG9kXScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzZWxmLmlkLnJlcGxhY2UoJ2J0bi0nLCAnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tcmVsb2FkLXByZXZpZXctaHRhY2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ3JlbG9hZC1wcmV2aWV3LWh0YWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBfayBpbiBkYXRhICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIF9rKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggL14oYWRkX2NvbmZpZ19mdWxsdGV4dHxvcHRpbWl6ZV9odGFjY2Vzc3x3aXRob3V0X3N1YmRpcnx3cF9jb25maWdcXFsuKlxcXSkkLy50ZXN0KF9rKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtfa11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YSggQUpBWF9VUkwsIGRhdGEgKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHRhY2Nlc3MnKS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmh0YWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2J0bi11cGRhdGUtaHRhY2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXdwLWNvbmZpZycpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9bWV0aG9kXScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzZWxmLmlkLnJlcGxhY2UoJ2J0bi0nLCAnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tcmVzdG9yZS1odGFjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tY2xlYXItYWxsLXNldHRpbmdzJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy13cC1jb25maWcnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHRhY2Nlc3MnKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPW1ldGhvZF0nKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2VsZi5pZC5yZXBsYWNlKCdidG4tJywgJycpKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgLy8gQ29uY2VhbHMgVGFiXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tY29tbWl0LXRvLWNsZWFudXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ2NsZWFudXAtaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXj1cImNsZWFudXBbXCJdJyksIChlbG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtlbG0uZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxtLmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhKCBBSkFYX1VSTCwgZGF0YSApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodG1sJykuaW5uZXJIVE1MID0gcmVzcG9uc2UuaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcihlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tc2F2ZS1yZXN0LWJlaGF2aW9yJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPW1ldGhvZF0nKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Jlc3QtYmVoYXZpb3InKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgLy8gQXV0aG9yaXphdGlvbnMgVGFiXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tY29tbWl0LWxvZ2luLXNldHRpbmdzJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBkYXRhLm5ld19sb2dpbl9vbiApID09IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggISBkYXRhLm5ld19sb2dpbl9wYXRoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVyckZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1sb2dpbi1wYXRoJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nT3B0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGA8bGFiZWwgY2xhc3M9XCJmdzYwMCB0ZXh0LWFsZXJ0IG15aFwiPiR7ZXJyRmllbGQuZGF0YXNldC5lcnJvclRpdGxlfTwvbGFiZWw+YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYDxkaXYgY2xhc3M9XCJ0ZXh0LWFsZXJ0IGFsaWduLWNlbnRlclwiPiR7ZXJyRmllbGQuZGF0YXNldC5ibGFua0Vycm9yfTwvZGl2PmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaW5pdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdtZWRpdW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJGaWVsZC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjYmIyMTI0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RpYWxvZyggZGlhbG9nT3B0cyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1tZXRob2RdJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb2dpbi1zZXR0aW5nJylcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIC8vIEhlbHRoIENoZWNrIFRhYlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYnRuLXVubG9jay1jb3JlLXVwZGF0ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9bWV0aG9kXScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzZWxmLmlkLnJlcGxhY2UoJ2J0bi0nLCAnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5RGlhbG9nQm9keSggdGFyZ2V0SWQsIG1lc3NhZ2UgPSAnJywgYWRkQ2xhc3NlcyA9IFtdLCBidXR0b25UZXh0ID0gbnVsbCwgYnRuQ2xhc3NlcyA9IFsgJ2J1dHRvbi1zZWNvbmRhcnknIF0sIG9uQ2xpY2sgPSBudWxsICkge1xyXG4gICAgbGV0IGRpYWxvZ0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xvc2VzdCgnLmRpYWxvZy1ib2R5JyksXHJcbiAgICAgICAgd3JhcHBlciAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIHBhcmFncmFwaCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgY29udGFpbmVyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGJ1dHRvbiAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoICdteGEnLCAnYWxpZ24tY2VudGVyJyApXHJcbiAgICBpZiAoIGFkZENsYXNzZXMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCggLi4uYWRkQ2xhc3NlcyApXHJcbiAgICB9XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gbWVzc2FnZVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpXHJcbiAgICBpZiAoIGJ1dHRvblRleHQgKSB7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ3R5cGUnLCAnYnV0dG9uJyApXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoICdidXR0b24nLCAnbXhhJyApXHJcbiAgICAgICAgaWYgKCBidG5DbGFzc2VzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCAuLi5idG5DbGFzc2VzIClcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dFxyXG4vL2NvbnNvbGUubG9nKCBvbkNsaWNrLCB0eXBlb2Ygb25DbGljayApXHJcbiAgICAgICAgaWYgKCBvbkNsaWNrICYmIHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLCBmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BpZ25pdG9yLWRpYWxvZycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoICdtdDEnLCAnYWxpZ24tY2VudGVyJyApXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCBidXR0b24gKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgZGlhbG9nQm9keS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgZGlhbG9nQm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlDb25maWdQcmV2aWV3KCkge1xyXG4gICAgbGV0IHByZXZpZXcgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctd3AtY29uZmlnJyksXHJcbiAgICAgICAgY29uZkxpbmUgPSBbICcjIEJFR0lOIFdQIElnbml0b3InIF1cclxuXHJcbiAgICBpZiAoICEgcHJldmlldyApIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1vcHRpb24nKSwgKGVsbSkgPT4ge1xyXG4gICAgICAgIGlmICggZWxtLmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRJZCAgID0gZWxtLmlkLnJlcGxhY2UoJ2Noay0nLCAnJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZEVsbSAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpLFxyXG4gICAgICAgICAgICAgICAgY29uc3ROYW1lICA9IHRhcmdldElkLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICBjb25zdFZhbHVlID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgaWYgKCBmaWVsZEVsbS50eXBlID09PSAnY2hlY2tib3gnICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RWYWx1ZSA9IGZpZWxkRWxtLmNoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnXHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAoIGZpZWxkRWxtLnR5cGUgPT09ICdudW1iZXInICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3RWYWx1ZSA9IFsgJ3dwX21lbW9yeV9saW1pdCcsICd3cF9tYXhfbWVtb3J5X2xpbWl0JyBdLmluY2x1ZGVzKCB0YXJnZXRJZCApID8gYCcke2ZpZWxkRWxtLnZhbHVlfU0nYCA6IHBhcnNlSW50KCBmaWVsZEVsbS52YWx1ZSwgMTAgKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3RWYWx1ZSA9IGAnJHtmaWVsZEVsbS52YWx1ZX0nYFxyXG4gICAgICAgICAgICAgICAgaWYgKCBmaWVsZEVsbS5kYXRhc2V0LnBhaXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RWYWx1ZSA9IGNvbnN0VmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnLycpLnJlcGxhY2UoL1xcLyQvLCAnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uZkxpbmUucHVzaCggYGRlZmluZWQoICcke2NvbnN0TmFtZX0nICkgb3IgZGVmaW5lKCAnJHtjb25zdE5hbWV9JywgJHtjb25zdFZhbHVlfSApO2AgKVxyXG4gICAgICAgICAgICBpZiAoIGZpZWxkRWxtLmRhdGFzZXQucGFpciApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWlyVmFsdWUgPSBjb25zdFZhbHVlLnJlcGxhY2UoIGZpZWxkRWxtLmRhdGFzZXQuZG9jcm9vdCwgYCR7bG9jYXRpb24ub3JpZ2lufWAgKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbmZMaW5lLnB1c2goIGBkZWZpbmVkKCAnJHtmaWVsZEVsbS5kYXRhc2V0LnBhaXJ9JyApIG9yIGRlZmluZSggJyR7ZmllbGRFbG0uZGF0YXNldC5wYWlyfScsICR7cGFpclZhbHVlfSApO2AgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbmZMaW5lLnB1c2goICcjIEVORCBXUCBJZ25pdG9yJyApXHJcbiAgICBwcmV2aWV3LnRleHRDb250ZW50ID0gJydcclxuICAgIHByZXZpZXcudGV4dENvbnRlbnQgPSBjb25mTGluZS5qb2luKCBcIlxcblwiIClcclxuICAgIHByZXZpZXcuc2V0QXR0cmlidXRlKCdyb3dzJywgTWF0aC5tYXgoY29uZkxpbmUubGVuZ3RoLCAzKSlcclxufVxyXG5cclxuXHJcbi8vIERpc3BhdGNoZXJcclxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8ICggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnICYmICEgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XHJcbiAgICBpbml0KClcclxufSBlbHNlXHJcbmlmICggZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciApIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UgKVxyXG59IGVsc2Uge1xyXG4gICAgd2luZG93Lm9ubG9hZCA9IGluaXRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9