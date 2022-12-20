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

homeBtn.classList.add('unhidden');
homeBtn.classList.add('hidden');
homeBtn.classList.add('hidden');

btnsDiv.appendChild(homeBtn);
btnsDiv.appendChild(menuBtn);
btnsDiv.appendChild(aboutBtn);

btnsDiv.style.textAlign = 'center'
btnsDiv.style.padding = '10px'

textDiv.appendChild(homeDiv);
textDiv.appendChild(menuDiv);
textDiv.appendChild(aboutDiv);

textDiv.style.padding = "10px"

contentDiv.appendChild(btnsDiv);
contentDiv.appendChild(textDiv);


function updatePage(e) {
    let divID = e.target.id + '-div';
    let divOfInterest = document.getElementById(divID);

    if (divOfInterest.classList[0] === 'hidden') {
        let unhiddenDiv = document.querySelector("div.unhidden");
        unhiddenDiv.classList.remove('unhidden');
        unhiddenDiv.classList.add('hidden');

        divOfInterest.classList.remove('hidden');
        divOfInterest.classList.add('unhidden');

        let unhiddenBtn = document.querySelector("button.unhidden");
        unhiddenBtn.classList.add('hidden');
        unhiddenBtn.classList.remove('unhidden');

        e.target.classList.remove('hidden');
        e.target.classList.add('unhidden');
    }


}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1pmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ1RmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ2hCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNFO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFRO0FBQ3hCLGdCQUFnQixpREFBUTtBQUN4QixpQkFBaUIsa0RBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtcmVzdHVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbXBsZS1yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FtcGxlLXJlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMgYnk6IFxcblBob25lOiAxMjMtNDU2LTc4OSBcXG5FbWFpbDogXFxcclxuICAgIGphbWVzLnNtaXRoQGdtYWlsLmNvbVwiO1xyXG5cclxuICAgIGNvbnRlbnREaXYuaWQgPSBcImFib3V0LWRpdlwiO1xyXG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudERpdjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dCIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCd1bmhpZGRlbicpO1xyXG4gICAgaG9tZS5pZCA9IFwiaG9tZS1kaXZcIjtcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTG9zIFBvbGxvcyBIZXJtYW5vcyB3aXRoIENoZWYgR3VzdGF2byBGcmluZ1wiO1xyXG5cclxuICAgIHJldHVybiBob21lO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZSIsImZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIFxcXHJcbiAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGxpZ3VsYSBvZGlvLCBmYXVjaWJ1cyBcXFxyXG4gICAgdmVsIG1hdHRpcyB2ZWwsIHN1c2NpcGl0IGluIGlwc3VtLiBVdCBtb2xlc3RpZSBoZW5kcmVyaXQgXFxcclxuICAgIG9kaW8gdml0YWUgbGFjaW5pYS4gQ3VyYWJpdHVyIHJob25jdXMgbG9yZW0gYSB0ZWxsdXMgY29uZ3VlLFxcXHJcbiAgICAgcXVpcyBtYXhpbXVzIGRvbG9yIGVsZW1lbnR1bS4gRHVpcyBwbGFjZXJhdCBwb3N1ZXJlIHVybmEgYSBcXFxyXG4gICAgIHNlbXBlci4gRG9uZWMgdGVtcG9yIHVsbGFtY29ycGVyIGFjY3Vtc2FuLiBRdWlzcXVlIGx1Y3R1cyBsdWN0dXMgdGVtcG9yLlwiO1xyXG5cclxuICAgIGNvbnRlbnREaXYuaWQgPSBcIm1lbnUtZGl2XCI7XHJcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50RGl2O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBob21lRGl2ID0gbG9hZEhvbWUoKTtcclxuY29uc3QgbWVudURpdiA9IGxvYWRNZW51KCk7XHJcbmNvbnN0IGFib3V0RGl2ID0gbG9hZEFib3V0KCk7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVBhZ2UpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlUGFnZSk7XHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlUGFnZSk7XHJcblxyXG5ob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbm1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuYWJvdXRCdG4udGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcblxyXG5ob21lQnRuLmlkID0gXCJob21lXCI7XHJcbm1lbnVCdG4uaWQgPSBcIm1lbnVcIjtcclxuYWJvdXRCdG4uaWQgPSBcImFib3V0XCI7XHJcblxyXG5ob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbm1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuYWJvdXRCdG4udGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcblxyXG5ob21lQnRuLmNsYXNzTGlzdC5hZGQoJ3VuaGlkZGVuJyk7XHJcbmhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbmhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG5idG5zRGl2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG5idG5zRGl2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG5idG5zRGl2LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcclxuXHJcbmJ0bnNEaXYuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcidcclxuYnRuc0Rpdi5zdHlsZS5wYWRkaW5nID0gJzEwcHgnXHJcblxyXG50ZXh0RGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xyXG50ZXh0RGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xyXG50ZXh0RGl2LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcclxuXHJcbnRleHREaXYuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiXHJcblxyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGJ0bnNEaXYpO1xyXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UoZSkge1xyXG4gICAgbGV0IGRpdklEID0gZS50YXJnZXQuaWQgKyAnLWRpdic7XHJcbiAgICBsZXQgZGl2T2ZJbnRlcmVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklEKTtcclxuXHJcbiAgICBpZiAoZGl2T2ZJbnRlcmVzdC5jbGFzc0xpc3RbMF0gPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgbGV0IHVuaGlkZGVuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi51bmhpZGRlblwiKTtcclxuICAgICAgICB1bmhpZGRlbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCd1bmhpZGRlbicpO1xyXG4gICAgICAgIHVuaGlkZGVuRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBkaXZPZkludGVyZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGRpdk9mSW50ZXJlc3QuY2xhc3NMaXN0LmFkZCgndW5oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgbGV0IHVuaGlkZGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi51bmhpZGRlblwiKTtcclxuICAgICAgICB1bmhpZGRlbkJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB1bmhpZGRlbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1bmhpZGRlbicpO1xyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd1bmhpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=