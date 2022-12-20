/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadAbout() {
    const contentDiv = document.createElement('div');
    contentDiv.textContent = "Contact us by: \nPhone: 123-456-789 \nEmail: \
    james.smith@gmail.com";

    contentDiv.id = "about-div";
    contentDiv.classList.add('hidden');

    return contentDiv;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    const home = document.createElement('div');
    home.classList.add('unhidden');
    home.id = "home-div";
    home.textContent = "Welcome to Los Pollos Hermanos with Chef Gustavo Fring";

    return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadMenu() {
    const contentDiv = document.createElement('div');
    contentDiv.textContent = "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit. Etiam ligula odio, faucibus \
    vel mattis vel, suscipit in ipsum. Ut molestie hendrerit \
    odio vitae lacinia. Curabitur rhoncus lorem a tellus congue,\
     quis maximus dolor elementum. Duis placerat posuere urna a \
     semper. Donec tempor ullamcorper accumsan. Quisque luctus luctus tempor.";

    contentDiv.id = "menu-div";
    contentDiv.classList.add('hidden');

    return contentDiv;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




const contentDiv = document.querySelector("#content");
const btnsDiv = document.createElement('div');
const textDiv = document.createElement('div');
const homeDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
const menuDiv = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
const aboutDiv = (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const aboutBtn = document.createElement('button');

homeBtn.addEventListener('click', updatePage);
menuBtn.addEventListener('click', updatePage);
aboutBtn.addEventListener('click', updatePage);

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
aboutBtn.textContent = "About";

homeBtn.id = "home";
menuBtn.id = "menu";
aboutBtn.id = "about";

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
aboutBtn.textContent = "About";

btnsDiv.appendChild(homeBtn);
btnsDiv.appendChild(menuBtn);
btnsDiv.appendChild(aboutBtn);

textDiv.appendChild(homeDiv);
textDiv.appendChild(menuDiv);
textDiv.appendChild(aboutDiv);

contentDiv.appendChild(btnsDiv);
contentDiv.appendChild(textDiv);

function updatePage(e) {
    let divID = e.target.id + '-div';
    let divOfInterest = document.getElementById(divID);

    if (divOfInterest.classList[0] === 'hidden') {
        let unhiddenDiv = document.querySelector(".unhidden");
        unhiddenDiv.classList.remove('unhidden');
        unhiddenDiv.classList.add('hidden');

        divOfInterest.classList.remove('hidden');
        divOfInterest.classList.add('unhidden');
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1pmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1RmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ2hCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFRO0FBQ3hCLGdCQUFnQixpREFBUTtBQUN4QixpQkFBaUIsa0RBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1wbGUtcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGJ5OiBcXG5QaG9uZTogMTIzLTQ1Ni03ODkgXFxuRW1haWw6IFxcXHJcbiAgICBqYW1lcy5zbWl0aEBnbWFpbC5jb21cIjtcclxuXHJcbiAgICBjb250ZW50RGl2LmlkID0gXCJhYm91dC1kaXZcIjtcclxuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQiLCJmdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgndW5oaWRkZW4nKTtcclxuICAgIGhvbWUuaWQgPSBcImhvbWUtZGl2XCI7XHJcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIExvcyBQb2xsb3MgSGVybWFub3Mgd2l0aCBDaGVmIEd1c3Rhdm8gRnJpbmdcIjtcclxuXHJcbiAgICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWUiLCJmdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcXFxyXG4gICAgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBsaWd1bGEgb2RpbywgZmF1Y2lidXMgXFxcclxuICAgIHZlbCBtYXR0aXMgdmVsLCBzdXNjaXBpdCBpbiBpcHN1bS4gVXQgbW9sZXN0aWUgaGVuZHJlcml0IFxcXHJcbiAgICBvZGlvIHZpdGFlIGxhY2luaWEuIEN1cmFiaXR1ciByaG9uY3VzIGxvcmVtIGEgdGVsbHVzIGNvbmd1ZSxcXFxyXG4gICAgIHF1aXMgbWF4aW11cyBkb2xvciBlbGVtZW50dW0uIER1aXMgcGxhY2VyYXQgcG9zdWVyZSB1cm5hIGEgXFxcclxuICAgICBzZW1wZXIuIERvbmVjIHRlbXBvciB1bGxhbWNvcnBlciBhY2N1bXNhbi4gUXVpc3F1ZSBsdWN0dXMgbHVjdHVzIHRlbXBvci5cIjtcclxuXHJcbiAgICBjb250ZW50RGl2LmlkID0gXCJtZW51LWRpdlwiO1xyXG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudERpdjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5jb25zdCBidG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaG9tZURpdiA9IGxvYWRIb21lKCk7XHJcbmNvbnN0IG1lbnVEaXYgPSBsb2FkTWVudSgpO1xyXG5jb25zdCBhYm91dERpdiA9IGxvYWRBYm91dCgpO1xyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVQYWdlKTtcclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVBhZ2UpO1xyXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVBhZ2UpO1xyXG5cclxuaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5tZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbmFib3V0QnRuLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5cclxuaG9tZUJ0bi5pZCA9IFwiaG9tZVwiO1xyXG5tZW51QnRuLmlkID0gXCJtZW51XCI7XHJcbmFib3V0QnRuLmlkID0gXCJhYm91dFwiO1xyXG5cclxuaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5tZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbmFib3V0QnRuLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5cclxuYnRuc0Rpdi5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuYnRuc0Rpdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuYnRuc0Rpdi5hcHBlbmRDaGlsZChhYm91dEJ0bik7XHJcblxyXG50ZXh0RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xyXG50ZXh0RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xyXG50ZXh0RGl2LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcclxuXHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnRuc0Rpdik7XHJcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQYWdlKGUpIHtcclxuICAgIGxldCBkaXZJRCA9IGUudGFyZ2V0LmlkICsgJy1kaXYnO1xyXG4gICAgbGV0IGRpdk9mSW50ZXJlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJRCk7XHJcblxyXG4gICAgaWYgKGRpdk9mSW50ZXJlc3QuY2xhc3NMaXN0WzBdID09PSAnaGlkZGVuJykge1xyXG4gICAgICAgIGxldCB1bmhpZGRlbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5oaWRkZW5cIik7XHJcbiAgICAgICAgdW5oaWRkZW5EaXYuY2xhc3NMaXN0LnJlbW92ZSgndW5oaWRkZW4nKTtcclxuICAgICAgICB1bmhpZGRlbkRpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgZGl2T2ZJbnRlcmVzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBkaXZPZkludGVyZXN0LmNsYXNzTGlzdC5hZGQoJ3VuaGlkZGVuJyk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=