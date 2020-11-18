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


function createNotify(message) {
  var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var wrapper = document.createElement('div'),
      paragraph = document.createElement('p');

  if (before) {
    wrapper.appendChild(before);
  }

  paragraph.textContent = message;
  paragraph.style.textAlign = 'center';
  wrapper.appendChild(paragraph);

  if (after) {
    wrapper.appendChild(after);
  }

  return wrapper;
}

var callback = {
  moveInstallPath: function moveInstallPath() {
    var message = 'Currently being processed, please wait.',
        loader = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["renderLoader"])('move-install-path', '#c0c0c0', 120, 60, 5);
    return createNotify(message, loader);
  },
  moveWpConfig: function moveWpConfig() {
    var message = 'Currently being processed, please wait.',
        loader = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["renderLoader"])('move-wp-config', '#c0c0c0', 120, 60, 5);
    return createNotify(message, null, loader);
  },
  selfRedirect: function selfRedirect() {},
  selfReload: function selfReload() {
    window.location.reload(true);
  },
  disableButton: function disableButton() {
    document.querySelector('.wpignitor-dialog .dialog-footer button').disabled = true;
  },
  test: function test() {//console.log( ...arguments )
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
                console.error('Error:', error);
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
              if (elm.classList.contains('dialog-content')) {
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
        params,
        key,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
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

            _context.next = 8;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
              //headers: { 'Content-Type': 'application/json' },
              redirect: 'follow',
              referrerPolicy: 'no-referrer-when-downgrade',
              //body: JSON.stringify( data )
              body: params
            });

          case 8:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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

/***/ "./src/scripts/_utils.js":
/*!*******************************!*\
  !*** ./src/scripts/_utils.js ***!
  \*******************************/
/*! exports provided: sleep, parseObject, isElement, triggerEvent, countElements, getLastItemId, renderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseObject", function() { return parseObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerEvent", function() { return triggerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countElements", function() { return countElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastItemId", function() { return getLastItemId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLoader", function() { return renderLoader; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Await until next process at specific millisec
 * @param {number} [msec=1] - Milliseconds
 */
function sleep() {
  var msec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return new Promise(function (resolve) {
    return setTimeout(resolve, msec);
  });
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



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_postData */ "./src/scripts/_postData.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_callback */ "./src/scripts/_callback.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_dialog */ "./src/scripts/_dialog.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WP-Ignitor plugin
 * @since 1.0.0
 */
//import '../styles/index.scss'
//import { sleep, renderLoader } from './_utils'




function init() {
  var AJAX_URL = window.ajaxurl || null,
      NOW_PAGE = window.pagenow || null;
  window.callback = _callback__WEBPACK_IMPORTED_MODULE_1__["callback"];
  Object(_dialog__WEBPACK_IMPORTED_MODULE_2__["initDialog"])();
  console.log(AJAX_URL, NOW_PAGE, window.callback);
  Array.prototype.forEach.call(document.querySelectorAll('[id^="btn-"]'), function (elm) {
    elm.addEventListener('click', function (evt) {
      var self = evt.target,
          form = document.getElementById('wpignitor-form'),
          fd = new FormData(form),
          data = {};

      var _iterator = _createForOfIteratorHelper(fd.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              _p = _step$value[0],
              _v = _step$value[1];

          if (_v) {
            if (self.id !== 'btn-update-htaccess' && _p === 'htaccess') {
              continue;
            } else {
              data[_p] = _v;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      switch (self.id) {
        // Globals Tab
        case 'btn-move-install-path':
          data.method = 'move-install-path';
          Object(_postData__WEBPACK_IMPORTED_MODULE_0__["postData"])(AJAX_URL, data).then(function (data) {
            var dialogBody = document.getElementById('move-install-path').closest('.dialog-body'),
                wrapper = document.createElement('div'),
                paragraph = document.createElement('p'),
                container = document.createElement('div'),
                button = document.createElement('button');
            paragraph.classList.add('mxa', 'align-center');
            paragraph.classList.add(data.result ? 'text-success' : 'text-alert');
            paragraph.textContent = data.message;
            button.setAttribute('type', 'button');
            button.classList.add('button', 'mxa', data.result ? 'button-primary' : 'button-secondary');
            button.textContent = data.button_text;
            button.addEventListener('click', function () {
              if (data.result) {
                window.location.href = data.redirect_to;
              } else {
                document.querySelector('.wpignitor-dialog').classList.remove('show');
              }
            }, false);
            container.classList.add('mt1', 'align-center');
            container.appendChild(button);
            wrapper.appendChild(paragraph);
            wrapper.appendChild(container);
            dialogBody.innerHTML = '';
            dialogBody.appendChild(wrapper);
            console.log(data);
          });
          break;

        case 'btn-move-wp-config':
          data.method = 'move-wp-config';
          Object(_postData__WEBPACK_IMPORTED_MODULE_0__["postData"])(AJAX_URL, data).then(function (data) {
            var dialogBody = document.getElementById('move-wp-config').closest('.dialog-body'),
                wrapper = document.createElement('div'),
                paragraph = document.createElement('p');
            paragraph.classList.add('mxa', 'align-center');
            paragraph.classList.add(data.result ? 'text-success' : 'text-alert');
            paragraph.textContent = data.message;
            wrapper.appendChild(paragraph);
            dialogBody.innerHTML = '';
            dialogBody.appendChild(wrapper);
          });
          break;

        case 'btn-update-wp-config':
        case 'btn-update-htaccess':
          document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''));
          form.submit();
          break;
        // Conceal Tab
        //case '':
        // Authorization Tab
        //case '':
        // Helth Check Tab
        //case '':

        default:
          return false;
      }
    }, false);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL19kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvX3Bvc3REYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL191dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVOb3RpZnkiLCJtZXNzYWdlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyYWdyYXBoIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwidGV4dEFsaWduIiwiY2FsbGJhY2siLCJtb3ZlSW5zdGFsbFBhdGgiLCJsb2FkZXIiLCJyZW5kZXJMb2FkZXIiLCJtb3ZlV3BDb25maWciLCJzZWxmUmVkaXJlY3QiLCJzZWxmUmVsb2FkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXNhYmxlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImRpc2FibGVkIiwidGVzdCIsImluaXREaWFsb2ciLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJzZWxmIiwidGFyZ2V0Iiwib3B0cyIsInRpdGxlIiwiZGF0YXNldCIsImNvbnRlbnQiLCJmb290IiwiYnV0dG9uIiwiZWZmZWN0Iiwic2l6ZSIsImRpYWxvZ1NpemUiLCJyZWluaXQiLCJwZXJzaXN0ZW50Iiwic2hvd24iLCJoaWRkZW4iLCJiZWZvcmVTaG93IiwiYmVmb3JlSGlkZSIsIk9iamVjdCIsImhhc093blByb3BlcnR5Iiwic2hvd0RpYWxvZyIsImZpeGVkQmFja2Ryb3AiLCJpc0ZpeGVkIiwiaXNJT1MiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJub3dZIiwicGFnZVlPZmZzZXQiLCJub3dYIiwicGFnZVhPZmZzZXQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0WCIsImxlZnQiLCJ0YXJnZXRZIiwidG9wIiwiZW5hYmxlZCIsInRhcmdldFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsInBhcnNlSW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1hcmdpbkxlZnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzY3JvbGxUbyIsImdlbmVyYXRlRGlhbG9nIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGlhbG9ncyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJiYWNrZHJvcHMiLCJsZW5ndGgiLCJkaWFsb2ciLCJiYWNrZHJvcCIsImNvbnRhaW5lciIsInZpZXdXaWR0aCIsImlubmVyV2lkdGgiLCJpbnNlcnRUaXRsZSIsInRvU3RyaW5nIiwiZGlhbG9nSGVhZGVyIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiaW5zZXJ0Q29udGVudCIsInBhcnNlT2JqZWN0IiwiZGlhbG9nQm9keSIsInJlcGxhY2UiLCJpc0VsZW1lbnQiLCJrZXlzIiwicmVtb3RlIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInZhbHVlcyIsImpvaW4iLCJpbnNlcnRGb290IiwiZGlhbG9nRm9vdGVyIiwiZGlhbG9nQnV0dG9uIiwiZGlhbG9nQ2FsbGJhY2siLCJidXR0b25DbGFzcyIsIm5vUmVuZGVyIiwiaXNPdXRzaWRlIiwic2V0QXR0cmlidXRlIiwic3BsaXQiLCJjbGFzcyIsImxhYmVsIiwibXV0YXRpb25zTGlzdCIsIm9ic2VydmVyIiwibXV0YXRpb24iLCJ0eXBlIiwiYWRkZWROb2RlcyIsImNvbnRhaW5zIiwib2xkVmFsdWUiLCJkaXNjb25uZWN0IiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYm9keSIsInB1dERpYWxvZyIsImRpYWxvZ1N0YWNrVGltZXIiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwidGltZXJJZCIsInB1c2giLCJsb29wIiwiaSIsImNsZWFyVGltZW91dCIsInNoaWZ0IiwicG9zdERhdGEiLCJkYXRhIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImtleSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYWRkUG9zdEZpZWxkIiwibmFtZSIsIm5ld0ZpZWxkIiwic2xlZXAiLCJtc2VjIiwic3RyIiwibmV3T2JqIiwiX3RtcCIsIkpTT04iLCJwYXJzZSIsImUiLCJ0cmltIiwibWFwIiwiZnJhZ21lbnRYIiwiX21hdGNoZXMiLCJtYXRjaCIsIl9yZXRhcnIiLCJmcmFnbWVudFkiLCJyZWR1Y2UiLCJvYmoiLCJ4IiwicHJvcCIsIkZ1bmN0aW9uIiwiYXNzaWduIiwibm9kZSIsIkhUTUxFbGVtZW50Iiwibm9kZVR5cGUiLCJvd25lckRvY3VtZW50Iiwibm9kZU5hbWUiLCJhdHRyIiwiZmluZCIsInRyaWdnZXJFdmVudCIsImVsZW1lbnQiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUV2ZW50T2JqZWN0IiwiZmlyZUV2ZW50IiwiY291bnRFbGVtZW50cyIsInNlbGVjdG9yIiwiZ2V0TGFzdEl0ZW1JZCIsIk51bWVyaWNJZHMiLCJwYXJzZUlkIiwiaWQiLCJNYXRoIiwibWF4IiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImRvdHMiLCJucyIsInN2Z0VsbSIsImNyZWF0ZUVsZW1lbnROUyIsImRpYW1ldGVyIiwiZ2FwIiwic2V0QXR0cmlidXRlTlMiLCJjaXJjbGUiLCJhbmltYXRlIiwibXgiLCJpbml0IiwiQUpBWF9VUkwiLCJhamF4dXJsIiwiTk9XX1BBR0UiLCJwYWdlbm93IiwibG9nIiwiZm9ybSIsImZkIiwiRm9ybURhdGEiLCJlbnRyaWVzIiwiX3AiLCJfdiIsImNsb3Nlc3QiLCJyZXN1bHQiLCJidXR0b25fdGV4dCIsImhyZWYiLCJyZWRpcmVjdF90byIsInN1Ym1pdCIsInJlYWR5U3RhdGUiLCJkb2N1bWVudEVsZW1lbnQiLCJkb1Njcm9sbCIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxZQUFULENBQXVCQyxPQUF2QixFQUEwRDtBQUFBLE1BQTFCQyxNQUEwQix1RUFBbkIsSUFBbUI7QUFBQSxNQUFiQyxLQUFhLHVFQUFQLElBQU87QUFDdEQsTUFBSUMsT0FBTyxHQUFH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QUExRFI7QUE0REgsS0EzRUQsRUEyRUcsS0EzRUg7QUE0RUgsR0E3RUQ7QUErRUgsQyxDQUVEOzs7QUFDQSxJQUFLaFAsUUFBUSxDQUFDaVAsVUFBVCxLQUF3QixVQUF4QixJQUF3Q2pQLFFBQVEsQ0FBQ2lQLFVBQVQsS0FBd0IsU0FBeEIsSUFBcUMsQ0FBRWpQLFFBQVEsQ0FBQ2tQLGVBQVQsQ0FBeUJDLFFBQTdHLEVBQTBIO0FBQ3RIcEIsTUFBSTtBQUNQLENBRkQsTUFHQSxJQUFLL04sUUFBUSxDQUFDNEIsZ0JBQWQsRUFBaUM7QUFDN0I1QixVQUFRLENBQUM0QixnQkFBVCxDQUEyQixrQkFBM0IsRUFBK0NtTSxJQUEvQyxFQUFxRCxLQUFyRDtBQUNILENBRkQsTUFFTztBQUNIak4sUUFBTSxDQUFDc08sTUFBUCxHQUFnQnJCLElBQWhCO0FBQ0gsQyIsImZpbGUiOiJqcy93cC1pZ25pdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgcmVuZGVyTG9hZGVyIH0gZnJvbSAnLi9fdXRpbHMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb3RpZnkoIG1lc3NhZ2UsIGJlZm9yZT1udWxsLCBhZnRlcj1udWxsICkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICBpZiAoIGJlZm9yZSApIHtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBiZWZvcmUgKVxyXG4gICAgfVxyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gbWVzc2FnZVxyXG4gICAgcGFyYWdyYXBoLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBwYXJhZ3JhcGggKVxyXG4gICAgaWYgKCBhZnRlciApIHtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKCBhZnRlciApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd3JhcHBlclxyXG59XHJcblxyXG5jb25zdCBjYWxsYmFjayA9IHtcclxuICAgIG1vdmVJbnN0YWxsUGF0aDogKCkgPT4ge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ0N1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQsIHBsZWFzZSB3YWl0LicsXHJcbiAgICAgICAgICAgIGxvYWRlciAgPSByZW5kZXJMb2FkZXIoICdtb3ZlLWluc3RhbGwtcGF0aCcsICcjYzBjMGMwJywgMTIwLCA2MCwgNSApXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vdGlmeSggbWVzc2FnZSwgbG9hZGVyIClcclxuICAgIH0sXHJcbiAgICBtb3ZlV3BDb25maWc6ICgpID0+IHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICdDdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLCBwbGVhc2Ugd2FpdC4nLFxyXG4gICAgICAgICAgICBsb2FkZXIgID0gcmVuZGVyTG9hZGVyKCAnbW92ZS13cC1jb25maWcnLCAnI2MwYzBjMCcsIDEyMCwgNjAsIDUgKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVOb3RpZnkoIG1lc3NhZ2UsIG51bGwsIGxvYWRlciApXHJcbiAgICB9LFxyXG4gICAgc2VsZlJlZGlyZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2VsZlJlbG9hZDogKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlQnV0dG9uOiAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndwaWduaXRvci1kaWFsb2cgLmRpYWxvZy1mb290ZXIgYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIHRlc3Q6ICgpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCAuLi5hcmd1bWVudHMgKVxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNhbGxiYWNrIH0iLCJpbXBvcnQgeyBwYXJzZU9iamVjdCwgaXNFbGVtZW50IH0gZnJvbSAnLi9fdXRpbHMnXHJcblxyXG4vKipcclxuICogQWRkIGhhbmRsZXIgb2YgdGhlIGRpYWxvZ1xyXG4gKiBAcGFyYW0ge31cclxuICogQHJldHVybiB7fVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdERpYWxvZygpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYmluZD1kaWFsb2ddJyksIChlbG0pID0+IHtcclxuICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgICAgICAgIG9wdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNlbGYuZGF0YXNldC50aXRsZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHNlbGYuZGF0YXNldC5jb250ZW50IHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdDogc2VsZi5kYXRhc2V0LmZvb3QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b246IHNlbGYuZGF0YXNldC5idXR0b24gfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IHNlbGYuZGF0YXNldC5lZmZlY3QgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBzZWxmLmRhdGFzZXQuZGlhbG9nU2l6ZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlaW5pdDogc2VsZi5kYXRhc2V0LnJlaW5pdCB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBzZWxmLmRhdGFzZXQucGVyc2lzdGVudCB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93bjogc2VsZi5kYXRhc2V0LnNob3duIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBzZWxmLmRhdGFzZXQuaGlkZGVuIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2hvdzogc2VsZi5kYXRhc2V0LmJlZm9yZVNob3cgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVIaWRlOiBzZWxmLmRhdGFzZXQuYmVmb3JlSGlkZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBvcHRzLmNvbnRlbnQgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdy5jYWxsYmFjaywgb3B0cy5jb250ZW50KSApIHtcclxuICAgICAgICAgICAgICAgIG9wdHMuY29udGVudCA9IHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0cy5jb250ZW50XSA9PT0gJ2Z1bmN0aW9uJyA/IHdpbmRvdy5jYWxsYmFja1tvcHRzLmNvbnRlbnRdKCkgOiB3aW5kb3cuY2FsbGJhY2tbb3B0cy5jb250ZW50XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coIG9wdHMgKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgfSlcclxufVxyXG5cclxuLypcclxuICogRml4IHRoZSBwb3NpdGlvbiBvZiBiYWNrZHJvcCB1bmRlciB0aGUgb3ZlcmxheSBmaWx0ZXJcclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRml4ZWRcclxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5mdW5jdGlvbiBmaXhlZEJhY2tkcm9wKCBpc0ZpeGVkLCBjYWxsYmFjayA9IG51bGwgKSB7XHJcbiAgICBsZXQgaXNJT1MgPSAvaVAoaG9uZXwob3xhKWQpLy50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZml4ZWQtYmFja2Ryb3BdJyksIChlbG0pID0+IHtcclxuICAgICAgICBsZXQgbm93WSAgICAgICA9IHdpbmRvdy5wYWdlWU9mZnNldCxcclxuICAgICAgICAgICAgbm93WCAgICAgICA9IHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICAgICAgdGFyZ2V0UmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgdGFyZ2V0WCAgICA9IHRhcmdldFJlY3QubGVmdCArIG5vd1gsXHJcbiAgICAgICAgICAgIHRhcmdldFkgICAgPSB0YXJnZXRSZWN0LnRvcCArIG5vd1ksXHJcbiAgICAgICAgICAgIGVuYWJsZWQgICAgPSAvXih0cnVlfDEpJC9pLnRlc3QoIGVsbS5kYXRhc2V0LmZpeGVkQmFja2Ryb3AgKSxcclxuICAgICAgICAgICAgdGFyZ2V0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxtICksXHJcbiAgICAgICAgICAgIG1hcmdpblRvcCAgPSBwYXJzZUludCggdGFyZ2V0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpLCAxMCApLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoIHRhcmdldFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JyksIDEwIClcclxuICAgICAgICBcclxuICAgICAgICBpZiAoICEgZW5hYmxlZCB8fCBpc0lPUyApIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggaXNGaXhlZCApIHtcclxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLWJhY2tkcm9wJylcclxuICAgICAgICAgICAgZWxtLnN0eWxlLnRvcCAgPSBgJHt0YXJnZXRZIC0gbWFyZ2luVG9wfXB4YC8vYCR7LTEgKiBub3dZfXB4YFxyXG4gICAgICAgICAgICBlbG0uc3R5bGUubGVmdCA9IGAke3RhcmdldFggLSBtYXJnaW5MZWZ0fXB4YC8vYCR7LTEgKiBub3dYfXB4YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC1iYWNrZHJvcCcpXHJcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKC0xICogdGFyZ2V0WCwgLTEgKiB0YXJnZXRZKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZml4ZWRCYWNrZHJvcDpjYWxsYmFjayAtIGFmdGVyIERpYWxvZzpiZWZvcmVIaWRlIGFuZCBiZWZvcmUgRGlhbG9nOmhpZGRlbicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKlxyXG4gKiBDcmVhdGUgbmV3IGVsZW1lbnQgb2YgZGlhbG9nIGZvciBhbnkgbm90aWZpY2F0aW9uc1xyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURpYWxvZyggb3B0aW9ucyApIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGxldCBkaWFsb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3BpZ25pdG9yLWRpYWxvZycpLFxyXG4gICAgICAgICAgICBiYWNrZHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaWFsb2ctYmFja2Ryb3AnKVxyXG5cclxuICAgICAgICBpZiAoIGRpYWxvZ3MubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkaWFsb2dzLCAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBiYWNrZHJvcHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChiYWNrZHJvcHMsIChiYWNrZHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3AucmVtb3ZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaWFsb2cgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgYmFja2Ryb3AgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICB2aWV3V2lkdGggID0gd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgIGluc2VydFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gb3B0aW9ucy50aXRsZSA/IG9wdGlvbnMudGl0bGUudG9TdHJpbmcoKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIGlmICggdGl0bGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1oZWFkZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0hlYWRlci5pbm5lckhUTUwgPSB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGlhbG9nSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnNlcnRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQgPyAodHlwZW9mIG9wdGlvbnMuY29udGVudCA9PT0gJ3N0cmluZycgJiYgL15cXHsrLipcXH0kLy50ZXN0KG9wdGlvbnMuY29udGVudCkgPyBwYXJzZU9iamVjdChvcHRpb25zLmNvbnRlbnQpIDogb3B0aW9ucy5jb250ZW50KSA6IG51bGxcclxuICAgICAgICAgICAgICAgIGlmICggY29udGVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlhbG9nQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWJvZHknKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9IGNvbnRlbnQucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGlzRWxlbWVudCggY29udGVudCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQm9keS5hcHBlbmQoY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoICE9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnRlbnQucmVtb3RlICYmIGNvbnRlbnQudXJsICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY29udGVudC5sb2FkZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gY29udGVudC5sb2FkZXIucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZGRkO1wiPk5vdyBMb2FkaW5nLi4uPC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChjb250ZW50LnVybCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGNvbnRlbnQucmVtb3RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBjb250ZW50Lm1vZGUgfHwgJ2NvcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gcmVzcG9uc2UuY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnRlbnRbMF0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQm9keS5pbm5lckhUTUwgPSBjb250ZW50WzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpYWxvZ0JvZHkudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuaW5uZXJIVE1MID0gT2JqZWN0LnZhbHVlcyhjb250ZW50KS5qb2luKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQm9keS50ZXh0Q29udGVudCA9IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaWFsb2dCb2R5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnNlcnRGb290ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvb3QgPSBvcHRpb25zLmZvb3QgPyAodHlwZW9mIG9wdGlvbnMuZm9vdCA9PT0gJ3N0cmluZycgJiYgL15cXHsrLipcXH0kLy50ZXN0KG9wdGlvbnMuZm9vdCkgPyBwYXJzZU9iamVjdChvcHRpb25zLmZvb3QpIDogb3B0aW9ucy5mb290KSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nQ2FsbGJhY2sgPSBmdW5jdGlvbigpeyByZXR1cm4gdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzID0gb3B0aW9ucy5idXR0b24gfHwgJ2J1dHRvbiBidXR0b24tc2Vjb25kYXJ5JywvL2RvY3VtZW50LmJvZHkuZGF0YXNldC5kaWFsb2dCdXR0b24gfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vUmVuZGVyICA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBmb290ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvb3Rlci5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctZm9vdGVyJylcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBidXR0b25DbGFzcyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmNsYXNzTGlzdC5hZGQoLi4uYnV0dG9uQ2xhc3Muc3BsaXQoJyAnKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgZm9vdCA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoIHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIC9ebm9uZSQvaS50ZXN0KCBmb290ICk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZW5kZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgL15kaXNtaXNzLW91dHNpZGUkL2kudGVzdCggZm9vdCApOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uY2xhc3NMaXN0LmFkZChmb290KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5pbm5lckhUTUwgPSAnPHNwYW4gdGl0bGU9XCJDbG9zZVwiPjwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmlubmVySFRNTCA9IGZvb3QucmVwbGFjZSgvXFxcXCguKS9tZywgXCIkMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBmb290ID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0VsZW1lbnQoIGZvb3QgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbiA9IGZvb3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LmtleXMoZm9vdCkubGVuZ3RoICE9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb290LCAnY2xhc3MnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLmNsYXNzTGlzdC5hZGQoIC4uLmZvb3QuY2xhc3Muc3BsaXQoJyAnKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb290LCAnbGFiZWwnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uaW5uZXJIVE1MID0gZm9vdC5sYWJlbC5yZXBsYWNlKC9cXFxcKC4pL21nLCBcIiQxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb290LCAnY2FsbGJhY2snKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dDYWxsYmFjayA9IGZvb3QuY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvb3QsICcwJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICggdHJ1ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAvXm5vbmUkL2kudGVzdCggZm9vdFswXSApOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZW5kZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIC9eZGlzbWlzcy1vdXRzaWRlJC9pLnRlc3QoIGZvb3RbMF0gKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKGZvb3RbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIHRpdGxlPVwiQ2xvc2VcIj48L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5pbm5lckhUTUwgPSBmb290WzBdLnJlcGxhY2UoL1xcXFwoLikvbWcsIFwiJDFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICEgbm9SZW5kZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0NhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkQmFja2Ryb3AoZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhIGlzT3V0c2lkZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0Zvb3Rlci5hcHBlbmQoZGlhbG9nQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaWFsb2dGb290ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpYWxvZ0J1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2sgID0gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnNMaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKG11dGF0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobXV0YXRpb24uYWRkZWROb2RlcywgKGVsbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxtLmNsYXNzTGlzdC5jb250YWlucygnZGlhbG9nLWNvbnRlbnQnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGl0bGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb250ZW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Rm9vdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGlhbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbXV0YXRpb24ub2xkVmFsdWUgJiYgbXV0YXRpb24udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpYWxvZzpzaG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5zaG93biAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwod2luZG93LmNhbGxiYWNrLCBvcHRpb25zLnNob3duKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygd2luZG93LmNhbGxiYWNrW29wdGlvbnMuc2hvd25dID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuc2hvd25dKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbXV0YXRpb24ub2xkVmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlhbG9nOmhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5oaWRkZW4gJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdy5jYWxsYmFjaywgb3B0aW9ucy5oaWRkZW4pICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0aW9ucy5oaWRkZW5dID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuaGlkZGVuXSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaWFsb2c6YmVmb3JlU2hvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5iZWZvcmVTaG93ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3aW5kb3cuY2FsbGJhY2ssIG9wdGlvbnMuYmVmb3JlU2hvdykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIHdpbmRvdy5jYWxsYmFja1tvcHRpb25zLmJlZm9yZVNob3ddID09PSAnZnVuY3Rpb24nICkgd2luZG93LmNhbGxiYWNrW29wdGlvbnMuYmVmb3JlU2hvd10oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaylcclxuXHJcbiAgICAgICAgLy8gU2V0IGNsYXNzIG9mIGRpYWxvZyB0cmFuc2l0aW9uIGVmZmVjdFxyXG4gICAgICAgIGxldCBlZmZlY3RcclxuICAgICAgICBzd2l0Y2godHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIC9eKDJ8c2xpZGUtP2luLXJpZ2h0KSQvaS50ZXN0KCBvcHRpb25zLmVmZmVjdCApOlxyXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gJ2VmZmVjdC0yJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXigzfHNsaWRlLT9pbi1ib3R0b20pJC9pLnRlc3QoIG9wdGlvbnMuZWZmZWN0ICk6XHJcbiAgICAgICAgICAgICAgICBlZmZlY3QgPSAnZWZmZWN0LTMnXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIC9eKDR8c3RpY2t5LT91cCkkL2kudGVzdCggb3B0aW9ucy5lZmZlY3QgKTpcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdlZmZlY3QtNCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgL14oNXxmdWxsLT93aWRlKSQvaS50ZXN0KCBvcHRpb25zLmVmZmVjdCApOlxyXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gJ2VmZmVjdC01J1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdlZmZlY3QtMSdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgY2xhc3Mgb2YgZGlhbG9nIHNpemVcclxuICAgICAgICBsZXQgc2l6ZVxyXG4gICAgICAgIHN3aXRjaCh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgL14oeGx8eGxhcmdlKSQvaS50ZXN0KCBvcHRpb25zLnNpemUgKTpcclxuICAgICAgICAgICAgICAgIHNpemUgPSAnc2l6ZS14bCdcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgL14obGd8bGFyZ2UpJC9pLnRlc3QoIG9wdGlvbnMuc2l6ZSApOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9ICdzaXplLWxnJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXihtZHxtZWRpdW0pJC9pLnRlc3QoIG9wdGlvbnMuc2l6ZSApOlxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9ICdzaXplLW1kJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAvXihzbXxzbWFsbCkkL2kudGVzdCggb3B0aW9ucy5zaXplICk6XHJcbiAgICAgICAgICAgICAgICBzaXplID0gJ3NpemUtc20nXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIC9eYXV0byQvaS50ZXN0KCBvcHRpb25zLnNpemUgKTpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmICggdmlld1dpZHRoIDwgNDgxICkgeyAvLyBTbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSAnc2l6ZS14bCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKCB2aWV3V2lkdGggPiA3NjggKSB7IC8vIExhcmdlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gJ3NpemUtbGcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkaWFsb2csIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxyXG4gICAgICAgIC8vb2JzZXJ2ZXIub2JzZXJ2ZShkaWFsb2csIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXHJcblxyXG4gICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCd3cGlnbml0b3ItZGlhbG9nJywgZWZmZWN0KVxyXG4gICAgICAgIGlmICggc2l6ZSAhPT0gJycgKSB7XHJcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKHNpemUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXHJcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWJhY2tkcm9wJylcclxuICAgICAgICBkaWFsb2cuYXBwZW5kKGNvbnRhaW5lcilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaWFsb2cpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFja2Ryb3ApXHJcbiAgICAgICAgaWYgKCAhIG9wdGlvbnMucGVyc2lzdGVudCApIHtcclxuICAgICAgICAgICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRpYWxvZy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZEJhY2tkcm9wKGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpYWxvZzpiZWZvcmVIaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3B0aW9ucy5iZWZvcmVIaWRlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3aW5kb3cuY2FsbGJhY2ssIG9wdGlvbnMuYmVmb3JlSGlkZSkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cuY2FsbGJhY2tbb3B0aW9ucy5iZWZvcmVIaWRlXSA9PT0gJ2Z1bmN0aW9uJyApIHdpbmRvdy5jYWxsYmFja1tvcHRpb25zLmJlZm9yZUhpZGVdKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qXHJcbiAqIER5bmFtaWNhbGx5IGNyZWF0ZSBkaWFsb2cgZm9yIG5vdGlmaWNhdGlvbiBhbmQgc2hvd1xyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBwdXREaWFsb2coIG9wdGlvbnMgKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VuZXJhdGVEaWFsb2coIG9wdGlvbnMgKVxyXG59XHJcblxyXG53aW5kb3cuZGlhbG9nU3RhY2tUaW1lciA9IFtdXHJcbi8qXHJcbiAqIFNob3cgZGlhbG9nIGFzIHdyYXBwZXIgb2YgcHV0RGlhbG9nXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coIG9wdGlvbnMgKSB7XHJcbiAgICBwdXREaWFsb2coIG9wdGlvbnMgKS50aGVuKChkaWFsb2cpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZS1pbml0IHRoaXMgZXh0ZW5zaW9uIHNjcmlwdHNcclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLnJlaW5pdCA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5yZWluaXQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRGVsYXkgYnkgdHJhbnNpdGlvbiBhbmltYXRpb24gaW50ZXJ2YWxcclxuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgICAgICBmaXhlZEJhY2tkcm9wKHRydWUpXHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgKS50aGVuKCh0aW1lcklkKSA9PiB7XHJcbiAgICAgICAgLy8gUHJldmVudCB0aGUgbWVtb3J5IGxlYWsgZHVlIHRvIGNvbnRpbnVlIHRpbWVyIGJ5IHNldFRpbWVvdXRcclxuICAgICAgICB3aW5kb3cuZGlhbG9nU3RhY2tUaW1lci5wdXNoKCB0aW1lcklkIClcclxuICAgICAgICBsZXQgbG9vcCA9IHdpbmRvdy5kaWFsb2dTdGFja1RpbWVyLmxlbmd0aCAtIDEsIGlcclxuICAgICAgICBmb3IoIGkgPSAwOyBpIDwgbG9vcDsgaSsrICkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHdpbmRvdy5kaWFsb2dTdGFja1RpbWVyLnNoaWZ0KCkgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXREaWFsb2csIHNob3dEaWFsb2cgfSIsIi8qKlxyXG4gKiBBc3luY2hyb25vdXNseSBwb3N0IGFzIGEgd3JhcHBlciBmb3IgdGhlIEZldGNoIEFQSVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFt1cmw9JyddICAtIFVSTCBvZiB0aGUgcmVxdWVzdCBkZXN0aW5hdGlvblxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IFtkYXRhPXt9XSAtIFRoZSBrZXktdmFsdWUgdHlwZSBvYmplY3Qgb2YgZGF0YSB0byBzZW5kXHJcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3BvbnNlIG9mIGZldGNoIHJlcXVlc3QgaXMgcmV0dXJuZWQgYXMgYSBwcm9taXNlIG9iamVjdFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEoIHVybCA9ICcnLCBkYXRhID0ge30gKSB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICBwYXJhbXMuYXBwZW5kKCAnYWN0aW9uJywgJ3dwaWduaXRvcl9hamF4JyApXHJcbiAgICBwYXJhbXMuYXBwZW5kKCAnbm9uY2UnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ193cG5vbmNlJyApLnZhbHVlIClcclxuICAgIGlmICggZGF0YSApIHtcclxuICAgICAgICBmb3IgKCBsZXQga2V5IGluIGRhdGEgKSB7XHJcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBkYXRhLCBrZXkgKSApIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoIGtleSwgZGF0YVtrZXldIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICBjYWNoZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgIC8vaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxyXG4gICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnLFxyXG4gICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkoIGRhdGEgKVxyXG4gICAgICAgIGJvZHk6IHBhcmFtc1xyXG4gICAgfSApXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBoaWRkZW4gZmllbGQgZm9yIGZvcm1cclxuICogQHBhcmFtICB7IXN0cmluZ30gLSBOYW1lIGF0dHJpYnV0ZSBvZiBpbnB1dCB0YWdcclxuICogQHBhcmFtICB7IXN0cmluZ30gLSBWYWx1ZSBhdHRyaWJ1dGUgb2YgaW5wdXQgdGFnXHJcbiAqIEByZXR1cm4ge09iamVjdH0gRE9NIE9iamVjdCBvZiBpbnB1dCB0YWdcclxuICovXHJcbmZ1bmN0aW9uIGFkZFBvc3RGaWVsZCggbmFtZSwgdmFsdWUgKSB7XHJcbiAgICBsZXQgbmV3RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnIClcclxuICAgIG5ld0ZpZWxkLnNldEF0dHJpYnV0ZSggJ3R5cGUnLCAnaGlkZGVuJyApXHJcbiAgICBuZXdGaWVsZC5zZXRBdHRyaWJ1dGUoICduYW1lJywgbmFtZSApXHJcbiAgICBuZXdGaWVsZC5zZXRBdHRyaWJ1dGUoICd2YWx1ZScsIHZhbHVlIClcclxuICAgIHJldHVybiBuZXdGaWVsZFxyXG59XHJcblxyXG5leHBvcnQgeyBwb3N0RGF0YSwgYWRkUG9zdEZpZWxkIH1cclxuIiwiLyoqXHJcbiAqIEF3YWl0IHVudGlsIG5leHQgcHJvY2VzcyBhdCBzcGVjaWZpYyBtaWxsaXNlY1xyXG4gKiBAcGFyYW0ge251bWJlcn0gW21zZWM9MV0gLSBNaWxsaXNlY29uZHNcclxuICovXHJcbmZ1bmN0aW9uIHNsZWVwKCBtc2VjID0gMSApIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHNldFRpbWVvdXQoIHJlc29sdmUsIG1zZWMgKSApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZSB0aGUgc3RyaW5nIGxpa2UgSmF2YVNjcmlwdCBvYmplY3QgdG8gYWN0dWFsIE9iamVjdFxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlT2JqZWN0KCBzdHIgKSB7XHJcbiAgICBsZXQgbmV3T2JqID0ge30sXHJcbiAgICAgICAgX3RtcFxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbmV3T2JqID0gSlNPTi5wYXJzZShzdHIpXHJcbiAgICB9IGNhdGNoKCBlICkge1xyXG4gICAgICAgIF90bXAgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFx7fFxcWykrfChcXF18XFx9KSskL2csICcnKS5zcGxpdCgnLCcpXHJcbiAgICAgICAgLy8gX3RtcCA9IF90bXAubWFwKCh4KSA9PiB4LnNwbGl0KC8oPzw9XlteOl0rPyk6LykubWFwKCh5KSA9PiB5LnRyaW0oKSkpIDwtIGlzIENocm9tZSBvbmx5XHJcbiAgICAgICAgX3RtcCA9IF90bXAubWFwKChmcmFnbWVudFgpID0+IHtcclxuICAgICAgICAgICAgbGV0IF9tYXRjaGVzID0gZnJhZ21lbnRYLm1hdGNoKC9eW146XSo6LyksXHJcbiAgICAgICAgICAgICAgICBfcmV0YXJyICA9IF9tYXRjaGVzID8gWyBfbWF0Y2hlc1swXS5yZXBsYWNlKCc6JywgJycpLCBmcmFnbWVudFgucmVwbGFjZShfbWF0Y2hlc1swXSwgJycpIF0gOiBbIGZyYWdtZW50WCBdXHJcbiAgICAgICAgICAgIHJldHVybiBfcmV0YXJyXHJcbiAgICAgICAgfSkubWFwKChmcmFnbWVudFkpID0+IGZyYWdtZW50WSB8fCBmcmFnbWVudFkudHJpbSgpKVxyXG4gICAgICAgIF90bXAgPSBfdG1wLnJlZHVjZSgob2JqLCB4LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggeFswXSAmJiB4WzFdICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3AgID0geFswXS50cmltKCkucmVwbGFjZSgvXignfFwiKSt8KFwifCcpKyQvZywgJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0geFsxXS50cmltKCkucmVwbGFjZSgvXignfFwiKSt8KFwifCcpKyQvZywgJycpXHJcbiAgICAgICAgICAgICAgICBpZiAoIC9eY2FsbGJhY2skL2kudGVzdCggcHJvcCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IEZ1bmN0aW9uLmNhbGwodGhpcywgYHJldHVybiAke3ZhbHVlfWApKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICggeC5sZW5ndGggPT0gMSAmJiB4WzBdICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0geFswXS50cmltKCkucmVwbGFjZSgvXignfFwiKSt8KFwifCcpKyQvZywgJycpXHJcbiAgICAgICAgICAgICAgICBvYmpbaV0gPSB2YWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgICBuZXdPYmogPSBfdG1wID8gT2JqZWN0LmFzc2lnbihuZXdPYmosIF90bXApIDogbmV3T2JqXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRWxlbWVudCggbm9kZSApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxyXG4gICAgfSBjYXRjaCggZSApIHtcclxuICAgICAgICBpZiAoICggdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICkgJiYgKCBub2RlLm5vZGVUeXBlID09PSAxICkgJiYgKCB0eXBlb2Ygbm9kZS5zdHlsZSA9PT0gJ29iamVjdCcgKSAmJiAoIHR5cGVvZiBub2RlLm93bmVyRG9jdW1lbnQgPT09ICdvYmplY3QnICkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhKCBub2RlICYmICggbm9kZS5ub2RlTmFtZSB8fCAoIG5vZGUucHJvcCAmJiBub2RlLmF0dHIgJiYgbm9kZS5maW5kICkgKSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRXZlbnQoIGVsZW1lbnQsIGV2ZW50ICkge1xyXG4gICAgaWYgKCBkb2N1bWVudC5jcmVhdGVFdmVudCApIHtcclxuICAgICAgICBsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdIVE1MRXZlbnRzJyApXHJcbiAgICAgICAgZXZ0LmluaXRFdmVudCggZXZlbnQsIHRydWUsIHRydWUgKVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmRpc3BhdGNoRXZlbnQoIGV2dCApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZmlyZUV2ZW50KCBgb24ke2V2ZW50fWAsIGV2dCApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50RWxlbWVudHMoIHNlbGVjdG9yICkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkubGVuZ3RoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExhc3RJdGVtSWQoIHNlbGVjdG9yICkge1xyXG4gICAgbGV0IE51bWVyaWNJZHMgPSBbXVxyXG4gICAgaWYgKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApLCAoZWxtKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcnNlSWQgPSBlbG0uaWQuc3BsaXQoIC8tfF98XFwvfCwvIClcclxuICAgICAgICBOdW1lcmljSWRzLnB1c2goIHBhcnNlSW50KCBwYXJzZUlkW3BhcnNlSWQubGVuZ3RoIC0gMV0sIDEwICkgKVxyXG4gICAgfSApXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIC4uLk51bWVyaWNJZHMgKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb2FkZXIoIGlkPW51bGwsIGNvbG9yPScjY2NjJywgd2lkdGg9MTAwLCBoZWlnaHQ9MTAwLCBkb3RzPTQgKSB7XHJcbiAgICBsZXQgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgICAgIHN2Z0VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ3N2ZycpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGRpYW1ldGVyID0gNixcclxuICAgICAgICBnYXAgPSAod2lkdGggLSBkb3RzICogZGlhbWV0ZXIpIC8gKGRvdHMgKyAxKVxyXG5cclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmVyc2lvbicsICcxLjEnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgneG1sbnMnLCBucylcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgJzBweCcpXHJcbiAgICBzdmdFbG0uc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCAnMHB4JylcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YClcclxuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZW5hYmxlLWJhY2tncm91bmQnLCAnbmV3IDAgMCAwIDAnKVxyXG4gICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgneG1sOnNwYWNlJywgJ3ByZXNlcnZlJylcclxuICAgIGZvciAoIGxldCBpID0gMTsgaSA8PSBkb3RzOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IGNpcmNsZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsICdjaXJjbGUnKSxcclxuICAgICAgICAgICAgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgJ2FuaW1hdGUnKSxcclxuICAgICAgICAgICAgbXggPSBnYXAgKiBpICsgKDYgKiAoaSAtIDEpKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsIGNvbG9yKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlJywgJ25vbmUnKVxyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCBteClcclxuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgKGhlaWdodCAtIGRpYW1ldGVyKSAvIDIpXHJcbiAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgZGlhbWV0ZXIpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnMXMnKVxyXG4gICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZhbHVlcycsICcwOzE7MCcpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncmVwZWF0Q291bnQnLCAnaW5kZWZpbml0ZScpXHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYmVnaW4nLCAwLjEgKyAoMC4xICogaSkpXHJcbiAgICAgICAgY2lyY2xlLmFwcGVuZENoaWxkKGFuaW1hdGUpXHJcbiAgICAgICAgc3ZnRWxtLmFwcGVuZENoaWxkKGNpcmNsZSlcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdFbG0pXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWNvbnRhaW5lcicpXHJcbiAgICBpZiAoIGlkICkge1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoICdpZCcsIGlkIClcclxuICAgIH1cclxuICAgIHJldHVybiBjb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHsgc2xlZXAsIHBhcnNlT2JqZWN0LCBpc0VsZW1lbnQsIHRyaWdnZXJFdmVudCwgY291bnRFbGVtZW50cywgZ2V0TGFzdEl0ZW1JZCwgcmVuZGVyTG9hZGVyIH1cclxuIiwiLyoqXHJcbiAqIFdQLUlnbml0b3IgcGx1Z2luXHJcbiAqIEBzaW5jZSAxLjAuMFxyXG4gKi9cclxuLy9pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xyXG4vL2ltcG9ydCB7IHNsZWVwLCByZW5kZXJMb2FkZXIgfSBmcm9tICcuL191dGlscydcclxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tICcuL19wb3N0RGF0YSdcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuL19jYWxsYmFjaydcclxuaW1wb3J0IHsgaW5pdERpYWxvZyB9IGZyb20gJy4vX2RpYWxvZydcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCBBSkFYX1VSTCA9IHdpbmRvdy5hamF4dXJsIHx8IG51bGwsXHJcbiAgICAgICAgICBOT1dfUEFHRSA9IHdpbmRvdy5wYWdlbm93IHx8IG51bGxcclxuICAgIFxyXG4gICAgd2luZG93LmNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIFxyXG4gICAgaW5pdERpYWxvZygpXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCBBSkFYX1VSTCwgTk9XX1BBR0UsIHdpbmRvdy5jYWxsYmFjayApXHJcbiAgICBcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cImJ0bi1cIl0nKSwgKGVsbSkgPT4ge1xyXG4gICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSBldnQudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cGlnbml0b3ItZm9ybScpLFxyXG4gICAgICAgICAgICAgICAgZmQgICA9IG5ldyBGb3JtRGF0YSggZm9ybSApLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHt9XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgW19wLCBfdl0gb2YgZmQuZW50cmllcygpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBfdiApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYuaWQgIT09ICdidG4tdXBkYXRlLWh0YWNjZXNzJyAmJiBfcCA9PT0gJ2h0YWNjZXNzJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW19wXSA9IF92XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaCggc2VsZi5pZCApIHtcclxuICAgICAgICAgICAgICAgIC8vIEdsb2JhbHMgVGFiXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tbW92ZS1pbnN0YWxsLXBhdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ21vdmUtaW5zdGFsbC1wYXRoJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhKCBBSkFYX1VSTCwgZGF0YSApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZS1pbnN0YWxsLXBhdGgnKS5jbG9zZXN0KCcuZGlhbG9nLWJvZHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoICdteGEnLCAnYWxpZ24tY2VudGVyJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCBkYXRhLnJlc3VsdCA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtYWxlcnQnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICd0eXBlJywgJ2J1dHRvbicgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCggJ2J1dHRvbicsICdteGEnLCBkYXRhLnJlc3VsdCA/ICdidXR0b24tcHJpbWFyeScgOiAnYnV0dG9uLXNlY29uZGFyeScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBkYXRhLmJ1dHRvbl90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhLnJlc3VsdCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RfdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndwaWduaXRvci1kaWFsb2cnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAnbXQxJywgJ2FsaWduLWNlbnRlcicgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIGJ1dHRvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nQm9keS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCb2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBkYXRhIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tbW92ZS13cC1jb25maWcnOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWV0aG9kID0gJ21vdmUtd3AtY29uZmlnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhKCBBSkFYX1VSTCwgZGF0YSApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpYWxvZ0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZS13cC1jb25maWcnKS5jbG9zZXN0KCcuZGlhbG9nLWJvZHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoICdteGEnLCAnYWxpZ24tY2VudGVyJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCBkYXRhLnJlc3VsdCA/ICd0ZXh0LXN1Y2Nlc3MnIDogJ3RleHQtYWxlcnQnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dCb2R5LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tdXBkYXRlLXdwLWNvbmZpZyc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdidG4tdXBkYXRlLWh0YWNjZXNzJzpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPW1ldGhvZF0nKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2VsZi5pZC5yZXBsYWNlKCdidG4tJywgJycpKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgLy8gQ29uY2VhbCBUYWJcclxuICAgICAgICAgICAgICAgIC8vY2FzZSAnJzpcclxuICAgICAgICAgICAgICAgIC8vIEF1dGhvcml6YXRpb24gVGFiXHJcbiAgICAgICAgICAgICAgICAvL2Nhc2UgJyc6XHJcbiAgICAgICAgICAgICAgICAvLyBIZWx0aCBDaGVjayBUYWJcclxuICAgICAgICAgICAgICAgIC8vY2FzZSAnJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyBEaXNwYXRjaGVyXHJcbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCAoIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJyAmJiAhIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xyXG4gICAgaW5pdCgpXHJcbn0gZWxzZVxyXG5pZiAoIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGluaXQsIGZhbHNlIClcclxufSBlbHNlIHtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSBpbml0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==