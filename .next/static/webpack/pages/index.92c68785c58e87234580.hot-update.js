"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar/index.js\");\n/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ \"./components/Timer/index.js\");\n/* harmony import */ var _components_MediaNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaNav */ \"./components/MediaNav/index.js\");\n/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ \"./components/InfoSection/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),\n      pomodoro = _useState[0],\n      setPomodoro = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),\n      shortBreak = _useState2[0],\n      setShortBreak = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n      longBreak = _useState3[0],\n      setLongBreak = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      second = _useState4[0],\n      setSecond = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      tab = _useState5[0],\n      setTab = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timeCounter = _useState6[0],\n      setTimeCounter = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      checkSecond = _useState7[0],\n      setCheckSecond = _useState7[1];\n\n  var toggle = function toggle(index) {\n    var isSecond = checkSecond && tab === index ? alert(\"Are you sure you want to Switch tabs\") : false;\n\n    if (isSecond) {\n      reset();\n      setTab(index);\n    } else if (!checkSecond) {\n      setTab(index);\n    }\n  };\n\n  var getTime = function getTime() {\n    var timeTab = {\n      0: pomodoro,\n      1: shortBreak,\n      2: longBreak\n    };\n    return timeTab[tab];\n  };\n\n  var updateMinute = function updateMinute() {\n    var updateTab = {\n      0: setPomodoro,\n      1: setShortBreak,\n      2: setLongBreak\n    };\n    return updateTab[tab];\n  };\n\n  var reset = function reset() {\n    setTimeCounter(false);\n    setPomodoro(25);\n    setShortBreak(5);\n    setLongBreak(10);\n  };\n\n  var runTime = function runTime() {\n    var mins = getTime();\n    var setMins = updateMinute();\n\n    if (mins === 0 && second === 0) {\n      reset();\n    } else if (second === 0) {\n      setMins(function (min) {\n        return min - 1;\n      });\n      setSecond(59);\n    } else {\n      setSecond(function (second) {\n        return second - 1;\n      });\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer = setInterval(function () {\n      if (timeCounter) {\n        setCheckSecond(function (value) {\n          return value + 1;\n        });\n        runTime();\n      }\n    }, 1000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n  var styles = {\n    minScreen: \"min-h-screen\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"bg-gray-900 \".concat(styles.minScreen, \" font-inter \"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"max-w-1xl \".concat(styles.minScreen, \" mx-auto\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Timer__WEBPACK_IMPORTED_MODULE_2__.Timer, {\n        tab: tab,\n        toggle: toggle,\n        getTime: getTime,\n        second: second,\n        timeCounter: timeCounter,\n        setTimeCounter: setTimeCounter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_MediaNav__WEBPACK_IMPORTED_MODULE_3__.MediaNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__.InfoSection, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"Gq7PJyn/5OBv5jnj+YUjHf4xkKs=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLGtCQUFnQ04sK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBb0NSLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQWtDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXNCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUI7QUFBQSxNQUFPZSxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxtQkFBcUNoQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFBQSxNQUFPaUIsV0FBUDtBQUFBLE1BQW1CQyxjQUFuQjs7QUFFQSxtQkFBc0NsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPbUIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBTUMsUUFBUSxHQUFHSixXQUFXLElBQUlKLEdBQUcsS0FBS08sS0FBdkIsR0FBK0JFLEtBQUssQ0FBQyxzQ0FBRCxDQUFwQyxHQUErRSxLQUFoRzs7QUFDQSxRQUFHRCxRQUFILEVBQVk7QUFDWEUsTUFBQUEsS0FBSztBQUNMVCxNQUFBQSxNQUFNLENBQUNNLEtBQUQsQ0FBTjtBQUNBLEtBSEQsTUFHTSxJQUFHLENBQUNILFdBQUosRUFBaUI7QUFDdEJILE1BQUFBLE1BQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0E7QUFDQyxHQVJEOztBQVVBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsUUFBTUMsT0FBTyxHQUFHO0FBQ2QsU0FBR3BCLFFBRFc7QUFFZCxTQUFHRSxVQUZXO0FBR2QsU0FBR0U7QUFIVyxLQUFoQjtBQUtBLFdBQU9nQixPQUFPLENBQUNaLEdBQUQsQ0FBZDtBQUNELEdBUEQ7O0FBU0EsTUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM1QixRQUFNQyxTQUFTLEdBQUc7QUFDakIsU0FBR3JCLFdBRGM7QUFFakIsU0FBR0UsYUFGYztBQUdqQixTQUFHRTtBQUhjLEtBQWxCO0FBS0UsV0FBT2lCLFNBQVMsQ0FBQ2QsR0FBRCxDQUFoQjtBQUNBLEdBUEQ7O0FBU0EsTUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNuQlAsSUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBVixJQUFBQSxXQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLElBQUFBLGFBQWEsQ0FBQyxDQUFELENBQWI7QUFDQUUsSUFBQUEsWUFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBLEdBTEQ7O0FBT0EsTUFBTWtCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDckIsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLEVBQXBCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHSixZQUFZLEVBQTVCOztBQUVBLFFBQUdHLElBQUksS0FBSyxDQUFULElBQWNsQixNQUFNLEtBQUssQ0FBNUIsRUFBK0I7QUFDOUJZLE1BQUFBLEtBQUs7QUFDTCxLQUZELE1BRU0sSUFBR1osTUFBTSxLQUFLLENBQWQsRUFBaUI7QUFDdEJtQixNQUFBQSxPQUFPLENBQUMsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsR0FBRyxDQUFmO0FBQUEsT0FBRCxDQUFQO0FBQ0FuQixNQUFBQSxTQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0EsS0FISyxNQUdEO0FBQ0pBLE1BQUFBLFNBQVMsQ0FBQyxVQUFDRCxNQUFEO0FBQUEsZUFBWUEsTUFBTSxHQUFJLENBQXRCO0FBQUEsT0FBRCxDQUFUO0FBQ0E7QUFDRCxHQVpEOztBQWNBWixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDakIsUUFBTWlDLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDL0IsVUFBR2xCLFdBQUgsRUFBZTtBQUNkRyxRQUFBQSxjQUFjLENBQUMsVUFBQ2dCLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxHQUFHLENBQW5CO0FBQUEsU0FBRCxDQUFkO0FBQ0FOLFFBQUFBLE9BQU87QUFDUDtBQUVELEtBTndCLEVBTXRCLElBTnNCLENBQXpCO0FBUUEsV0FBTyxZQUFNO0FBQ1pPLE1BQUFBLGFBQWEsQ0FBQ0gsS0FBRCxDQUFiO0FBQ0EsS0FGRDtBQUdFLEdBWlEsRUFZUCxDQUFDckIsTUFBRCxFQUFTTixRQUFULEVBQW1CRSxVQUFuQixFQUErQkUsU0FBL0IsRUFBMENNLFdBQTFDLENBWk8sQ0FBVDtBQWNBLE1BQU1xQixNQUFNLEdBQUc7QUFDYkMsSUFBQUEsU0FBUyxFQUFFO0FBREUsR0FBZjtBQUlBLHNCQUNFO0FBQUssYUFBUyx3QkFBaUJELE1BQU0sQ0FBQ0MsU0FBeEIsaUJBQWQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsc0JBQWVELE1BQU0sQ0FBQ0MsU0FBdEIsYUFBZDtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLG9EQUFEO0FBQU8sV0FBRyxFQUFFeEIsR0FBWjtBQUFpQixjQUFNLEVBQUVNLE1BQXpCO0FBQWlDLGVBQU8sRUFBRUssT0FBMUM7QUFBbUQsY0FBTSxFQUFFYixNQUEzRDtBQUFtRSxtQkFBVyxFQUFFSSxXQUFoRjtBQUE2RixzQkFBYyxFQUFFQztBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBdkZ1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaW1lclwiO1xuaW1wb3J0IHsgTWVkaWFOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZWRpYU5hdlwiO1xuaW1wb3J0IHsgSW5mb1NlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvU2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9tb2Rvcm8sIHNldFBvbW9kb3JvXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3Nob3J0QnJlYWssIHNldFNob3J0QnJlYWtdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtsb25nQnJlYWssIHNldExvbmdCcmVha10gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZUNvdW50ZXIsc2V0VGltZUNvdW50ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtjaGVja1NlY29uZCwgc2V0Q2hlY2tTZWNvbmRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCB0b2dnbGUgPSAoaW5kZXgpID0+IHtcblx0Y29uc3QgaXNTZWNvbmQgPSBjaGVja1NlY29uZCAmJiB0YWIgPT09IGluZGV4ID8gYWxlcnQoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gU3dpdGNoIHRhYnNcIikgOiBmYWxzZTtcblx0aWYoaXNTZWNvbmQpe1xuXHRcdHJlc2V0KCk7XG5cdFx0c2V0VGFiKGluZGV4KVxuXHR9ZWxzZSBpZighY2hlY2tTZWNvbmQpIHtcblx0XHRzZXRUYWIoaW5kZXgpO1xuXHR9XG4gIH07XG5cbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lVGFiID0ge1xuICAgICAgMDogcG9tb2Rvcm8sXG4gICAgICAxOiBzaG9ydEJyZWFrLFxuICAgICAgMjogbG9uZ0JyZWFrLFxuICAgIH07XG4gICAgcmV0dXJuIHRpbWVUYWJbdGFiXTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVNaW51dGUgPSAoKSA9PiB7XG5cdGNvbnN0IHVwZGF0ZVRhYiA9IHtcblx0XHQwOiBzZXRQb21vZG9ybyxcblx0XHQxOiBzZXRTaG9ydEJyZWFrLFxuXHRcdDI6IHNldExvbmdCcmVhayxcblx0ICB9O1xuXHQgIHJldHVybiB1cGRhdGVUYWJbdGFiXTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuXHQgIHNldFRpbWVDb3VudGVyKGZhbHNlKTtcblx0ICBzZXRQb21vZG9ybygyNSk7XG5cdCAgc2V0U2hvcnRCcmVhayg1KTtcblx0ICBzZXRMb25nQnJlYWsoMTApXG4gIH1cblxuICBjb25zdCBydW5UaW1lID0gKCkgPT4ge1xuXHQgIGNvbnN0IG1pbnMgPSBnZXRUaW1lKCk7XG5cdCAgY29uc3Qgc2V0TWlucyA9IHVwZGF0ZU1pbnV0ZSgpO1xuXG5cdCAgaWYobWlucyA9PT0gMCAmJiBzZWNvbmQgPT09IDApIHtcblx0XHQgIHJlc2V0KCk7XG5cdCAgfWVsc2UgaWYoc2Vjb25kID09PSAwICl7XG5cdFx0ICBzZXRNaW5zKChtaW4pID0+IG1pbiAtIDEpXG5cdFx0ICBzZXRTZWNvbmQoNTkpO1xuXHQgIH1lbHNle1xuXHRcdCAgc2V0U2Vjb25kKChzZWNvbmQpID0+IHNlY29uZCAtICAxKVxuXHQgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdGlmKHRpbWVDb3VudGVyKXtcblx0XHRcdHNldENoZWNrU2Vjb25kKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKVxuXHRcdFx0cnVuVGltZSgpO1xuXHRcdH1cblx0XHRcblx0fSwgMTAwMCk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRjbGVhckludGVydmFsKHRpbWVyKVxuXHR9XG4gIH0sW3NlY29uZCwgcG9tb2Rvcm8sIHNob3J0QnJlYWssIGxvbmdCcmVhaywgdGltZUNvdW50ZXJdKVxuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBtaW5TY3JlZW46IFwibWluLWgtc2NyZWVuXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLWdyYXktOTAwICR7c3R5bGVzLm1pblNjcmVlbn0gZm9udC1pbnRlciBgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctMXhsICR7c3R5bGVzLm1pblNjcmVlbn0gbXgtYXV0b2B9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxUaW1lciB0YWI9e3RhYn0gdG9nZ2xlPXt0b2dnbGV9IGdldFRpbWU9e2dldFRpbWV9IHNlY29uZD17c2Vjb25kfSB0aW1lQ291bnRlcj17dGltZUNvdW50ZXJ9IHNldFRpbWVDb3VudGVyPXtzZXRUaW1lQ291bnRlcn0vPlxuICAgICAgICA8TWVkaWFOYXYgLz5cbiAgICAgICAgPEluZm9TZWN0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2QmFyIiwiVGltZXIiLCJNZWRpYU5hdiIsIkluZm9TZWN0aW9uIiwiSG9tZSIsInBvbW9kb3JvIiwic2V0UG9tb2Rvcm8iLCJzaG9ydEJyZWFrIiwic2V0U2hvcnRCcmVhayIsImxvbmdCcmVhayIsInNldExvbmdCcmVhayIsInNlY29uZCIsInNldFNlY29uZCIsInRhYiIsInNldFRhYiIsInRpbWVDb3VudGVyIiwic2V0VGltZUNvdW50ZXIiLCJjaGVja1NlY29uZCIsInNldENoZWNrU2Vjb25kIiwidG9nZ2xlIiwiaW5kZXgiLCJpc1NlY29uZCIsImFsZXJ0IiwicmVzZXQiLCJnZXRUaW1lIiwidGltZVRhYiIsInVwZGF0ZU1pbnV0ZSIsInVwZGF0ZVRhYiIsInJ1blRpbWUiLCJtaW5zIiwic2V0TWlucyIsIm1pbiIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ2YWx1ZSIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZXMiLCJtaW5TY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});