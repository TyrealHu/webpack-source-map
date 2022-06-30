/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
    /* *
     定义好webpack_modules，里面包含了fun.js以及hello.js，这两个js都是含有export和import的，
     除了入口文件index.js其他参与编译的文件都会放在modules里面
     */
    /******/ 	var __webpack_modules__ = ({

        /***/ "./src/fun.js":
        /*!********************!*\
          !*** ./src/fun.js ***!
          \********************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "getInfo": () => (/* binding */ getInfo)
                /* harmony export */ });
            /* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ "./src/hello.js");


            function getInfo() {
                console.log(_hello__WEBPACK_IMPORTED_MODULE_0__["default"].age)
                console.log(_hello__WEBPACK_IMPORTED_MODULE_0__["default"].name)

                return `name: ${_hello__WEBPACK_IMPORTED_MODULE_0__["default"].name};age: ${_hello__WEBPACK_IMPORTED_MODULE_0__["default"].age}`
            }

            /***/ }),

        /***/ "./src/hello.js":
        /*!**********************!*\
          !*** ./src/hello.js ***!
          \**********************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                /* harmony export */ });
            const name = 'tyreal'
            const age = 18

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
                name,
                age
            });

            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /**
     * 重点函数，webpack_require，所有的Import以及require都会被替换成webpack_require，在这个函数中，先会从cache中判断，是否执行过
     * require，如果执行过那么会直接拿到cache中的export，如果没有执行过那么就会从module当中去获取，然后在exports出去，并且储存在cache当中
     * */
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
                        /**
                         * 目前看到是给exports上面定义属性与值，然后这个exports是在cache中获取到的
                         * */
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = (exports, definition) => {
            /******/ 			for(var key in definition) {
                /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ 				}
                /******/ 			}
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
                        /**
                         * 这就是hasOwnProperty的简写而已，并没有别的内容
                         * */
        /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
        /******/ 		// define __esModule on exports
                        /**
                         * 这里是给exports定义__esModule属性，这些在以后的导入导出中有作用，标识其为esm
                         * */
        /******/ 		__webpack_require__.r = (exports) => {
            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 			}
            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 		};
        /******/ 	})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fun */ "./src/fun.js");


        const info = (0,_fun__WEBPACK_IMPORTED_MODULE_0__.getInfo)()

        function getDiv() {
            const element = document.createElement("div")

            element.innerHTML = info

            return element
        }

        document.body.appendChild(getDiv())

    })();

 })()
;