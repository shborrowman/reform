/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/features.js":
/*!*********************************!*\
  !*** ./app/scripts/features.js ***!
  \*********************************/
/***/ (function() {

var features = document.querySelector('.features');
var featureBoxes = features.querySelectorAll('.features-box');
var featuresObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var animateDelay = function animateDelay(box, delay) {
        setTimeout(function () {
          box.classList.add('slide-in');
        }, delay);
      };

      featureBoxes.forEach(function (box, index) {
        animateDelay(box, index * 200);
      });
      featuresObserver.unobserve(features);
    }
  });
}, {
  rootMargin: '0% 0% -25%'
});
var featureBoxObserever = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
      featureBoxObserever.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0% 0% -25%'
});

if (window.innerWidth >= 768) {
  featuresObserver.observe(features);
} else {
  featureBoxes.forEach(function (box) {
    featureBoxObserever.observe(box);
  });
}

/***/ }),

/***/ "./app/scripts/slider.js":
/*!*******************************!*\
  !*** ./app/scripts/slider.js ***!
  \*******************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slider = document.querySelector('.slider');
var slides = slider.querySelectorAll('.slide');
var slideLength = slides.length;
var sliderButtons = slider.querySelectorAll('.button-arrow');
var sliderObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      slider.classList.add('animate');
      setTimeout(function () {
        slides[0].classList.add('active');
      }, 600);
      sliderObserver.unobserve(slider);
    }
  });
}, {
  rootMargin: '0% 0% -25%'
});
sliderObserver.observe(slider);
sliderButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var activeSlide = slider.querySelector('.active');

    var activeIndex = _toConsumableArray(activeSlide.parentElement.children).indexOf(activeSlide);

    var slideInPosition = '50%';
    var slideOutPosition = '-50%';
    var nextSlide = activeIndex == slideLength - 1 ? slides[0] : activeSlide.nextElementSibling;

    if (this.classList.contains('previous')) {
      nextSlide = activeIndex == 0 ? slides[slideLength - 1] : activeSlide.previousElementSibling;
    }

    activeSlide.style.setProperty('--image-position', slideOutPosition);
    activeSlide.style.setProperty('--slide-content', slideOutPosition);
    activeSlide.classList.remove('active');
    nextSlide.style.setProperty('--image-position', slideInPosition);
    nextSlide.classList.add('active');
    setTimeout(function () {
      activeSlide.removeAttribute('style');
      nextSlide.removeAttribute('style');
    }, 300);
  });
});

/***/ }),

/***/ "./app/styles/style.scss":
/*!*******************************!*\
  !*** ./app/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./app/styles/style.scss");
/* harmony import */ var _scripts_features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/features.js */ "./app/scripts/features.js");
/* harmony import */ var _scripts_features_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_features_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/slider.js */ "./app/scripts/slider.js");
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_2__);



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBTixJQUFBQSxXQUFXLENBQUNsQixTQUFaLENBQXNCK0IsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDQU4sSUFBQUEsU0FBUyxDQUFDSSxLQUFWLENBQWdCQyxXQUFoQixDQUE0QixrQkFBNUIsRUFBZ0RQLGVBQWhEO0FBQ0FFLElBQUFBLFNBQVMsQ0FBQ3pCLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0FGLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2hCbUIsTUFBQUEsV0FBVyxDQUFDYyxlQUFaLENBQTRCLE9BQTVCO0FBQ0FQLE1BQUFBLFNBQVMsQ0FBQ08sZUFBVixDQUEwQixPQUExQjtBQUNBLEtBSFMsRUFHUCxHQUhPLENBQVY7QUFJQSxHQXBCRDtBQXFCQSxDQXRCRDs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlYXR1cmVzJylcbmNvbnN0IGZlYXR1cmVCb3hlcyA9IGZlYXR1cmVzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWF0dXJlcy1ib3gnKVxuY29uc3QgZmVhdHVyZXNPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG5cdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRjb25zdCBhbmltYXRlRGVsYXkgPSAoYm94LCBkZWxheSkgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRib3guY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4nKVxuXHRcdFx0XHR9LCBkZWxheSlcblx0XHRcdH1cblx0XHRcdGZlYXR1cmVCb3hlcy5mb3JFYWNoKChib3gsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGFuaW1hdGVEZWxheShib3gsIGluZGV4ICogMjAwKVxuXHRcdFx0fSlcblx0XHRcdGZlYXR1cmVzT2JzZXJ2ZXIudW5vYnNlcnZlKGZlYXR1cmVzKVxuXHRcdH1cblx0fSlcbn0sIHtcblx0cm9vdE1hcmdpbjogJzAlIDAlIC0yNSUnXG59KVxuY29uc3QgZmVhdHVyZUJveE9ic2VyZXZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG5cdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4nKVxuXHRcdFx0ZmVhdHVyZUJveE9ic2VyZXZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuXHRcdH1cblx0fSlcbn0sIHtcblx0cm9vdE1hcmdpbjogJzAlIDAlIC0yNSUnXG59KVxuXG5pZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG5cdGZlYXR1cmVzT2JzZXJ2ZXIub2JzZXJ2ZShmZWF0dXJlcylcbn0gZWxzZSB7XG5cdGZlYXR1cmVCb3hlcy5mb3JFYWNoKGJveCA9PiB7XG5cdFx0ZmVhdHVyZUJveE9ic2VyZXZlci5vYnNlcnZlKGJveClcblx0fSlcbn1cbiIsImNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKVxuY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpXG5jb25zdCBzbGlkZUxlbmd0aCA9IHNsaWRlcy5sZW5ndGhcbmNvbnN0IHNsaWRlckJ1dHRvbnMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1hcnJvdycpXG5jb25zdCBzbGlkZXJPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG5cdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRzbGlkZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2xpZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0XHR9LCA2MDApXG5cdFx0XHRzbGlkZXJPYnNlcnZlci51bm9ic2VydmUoc2xpZGVyKVxuXHRcdH1cblx0fSlcbn0sIHtcblx0cm9vdE1hcmdpbjogJzAlIDAlIC0yNSUnXG59KVxuXG5zbGlkZXJPYnNlcnZlci5vYnNlcnZlKHNsaWRlcilcblxuc2xpZGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxuXHRcdGNvbnN0IGFjdGl2ZUluZGV4ID0gWy4uLmFjdGl2ZVNsaWRlLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpXG5cdFx0Y29uc3Qgc2xpZGVJblBvc2l0aW9uID0gJzUwJSdcblx0XHRjb25zdCBzbGlkZU91dFBvc2l0aW9uID0gJy01MCUnXG5cdFx0bGV0IG5leHRTbGlkZSA9IGFjdGl2ZUluZGV4ID09IChzbGlkZUxlbmd0aCAtIDEpID8gc2xpZGVzWzBdIDogYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nXG5cdFx0XG5cdFx0aWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmV2aW91cycpKSB7XG5cdFx0XHRuZXh0U2xpZGUgPSBhY3RpdmVJbmRleCA9PSAwID8gc2xpZGVzW3NsaWRlTGVuZ3RoIC0gMV0gOiBhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cdFx0fVxuXG5cdFx0YWN0aXZlU2xpZGUuc3R5bGUuc2V0UHJvcGVydHkoJy0taW1hZ2UtcG9zaXRpb24nLCBzbGlkZU91dFBvc2l0aW9uKVxuXHRcdGFjdGl2ZVNsaWRlLnN0eWxlLnNldFByb3BlcnR5KCctLXNsaWRlLWNvbnRlbnQnLCBzbGlkZU91dFBvc2l0aW9uKVxuXHRcdGFjdGl2ZVNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFx0bmV4dFNsaWRlLnN0eWxlLnNldFByb3BlcnR5KCctLWltYWdlLXBvc2l0aW9uJywgc2xpZGVJblBvc2l0aW9uKVxuXHRcdG5leHRTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0YWN0aXZlU2xpZGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG5cdFx0XHRuZXh0U2xpZGUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG5cdFx0fSwgMzAwKVxuXHR9KVxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgJy4vc2NyaXB0cy9mZWF0dXJlcy5qcyc7IGltcG9ydCAnLi9zY3JpcHRzL3NsaWRlci5qcyc7Il0sIm5hbWVzIjpbImZlYXR1cmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmVhdHVyZUJveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImZlYXR1cmVzT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFuaW1hdGVEZWxheSIsImJveCIsImRlbGF5Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsImFkZCIsImluZGV4IiwidW5vYnNlcnZlIiwicm9vdE1hcmdpbiIsImZlYXR1cmVCb3hPYnNlcmV2ZXIiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib2JzZXJ2ZSIsInNsaWRlciIsInNsaWRlcyIsInNsaWRlTGVuZ3RoIiwibGVuZ3RoIiwic2xpZGVyQnV0dG9ucyIsInNsaWRlck9ic2VydmVyIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjdGl2ZVNsaWRlIiwiYWN0aXZlSW5kZXgiLCJwYXJlbnRFbGVtZW50IiwiY2hpbGRyZW4iLCJpbmRleE9mIiwic2xpZGVJblBvc2l0aW9uIiwic2xpZGVPdXRQb3NpdGlvbiIsIm5leHRTbGlkZSIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRhaW5zIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9