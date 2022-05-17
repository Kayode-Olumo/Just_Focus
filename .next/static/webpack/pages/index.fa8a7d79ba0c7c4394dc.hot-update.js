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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar/index.js\");\n/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ \"./components/Timer/index.js\");\n/* harmony import */ var _components_MediaNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaNav */ \"./components/MediaNav/index.js\");\n/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ \"./components/InfoSection/index.js\");\n/* harmony import */ var _components_Alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Alarm */ \"./components/Alarm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),\n      pomodoro = _useState[0],\n      setPomodoro = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),\n      shortBreak = _useState2[0],\n      setShortBreak = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n      longBreak = _useState3[0],\n      setLongBreak = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      second = _useState4[0],\n      setSecond = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      tab = _useState5[0],\n      setTab = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timeCounter = _useState6[0],\n      setTimeCounter = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      checkSecond = _useState7[0],\n      setCheckSecond = _useState7[1];\n\n  var alarmRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var toggle = function toggle(index) {\n    var isSecond = checkSecond && tab !== index ? confirm(\"Are you sure you want to Switch tabs\") : false;\n\n    if (isSecond) {\n      reset();\n      setTab(index);\n    } else if (!checkSecond) {\n      setTab(index);\n    }\n  };\n\n  var getTime = function getTime() {\n    var timeTab = {\n      0: pomodoro,\n      1: shortBreak,\n      2: longBreak\n    };\n    return timeTab[tab];\n  };\n\n  var updateMinute = function updateMinute() {\n    var updateTab = {\n      0: setPomodoro,\n      1: setShortBreak,\n      2: setLongBreak\n    };\n    return updateTab[tab];\n  };\n\n  var reset = function reset() {\n    setCheckSecond(0);\n    setTimeCounter(false);\n    setSecond(0);\n    setPomodoro(25);\n    setShortBreak(5);\n    setLongBreak(10);\n  };\n\n  var timeUp = function timeUp() {\n    reset();\n    alarmRef.current.play();\n  };\n\n  var muteAlarm = function muteAlarm() {\n    alarmRef.current.pause();\n  };\n\n  var runTime = function runTime() {\n    var mins = getTime();\n    var setMins = updateMinute();\n\n    if (mins === 0 && second === 0) {\n      timeUp();\n    } else if (second === 0) {\n      setMins(function (min) {\n        return min - 1;\n      });\n      setSecond(59);\n    } else {\n      setSecond(function (second) {\n        return second - 1;\n      });\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.onbeforeunload = function () {\n      return checkSecond ? \"Show warning\" : null;\n    };\n\n    var timer = setInterval(function () {\n      if (timeCounter) {\n        setCheckSecond(function (value) {\n          return value + 1;\n        });\n        runTime();\n      }\n    }, 1000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n  var styles = {\n    minScreen: \"min-h-screen\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"bg-gray-900 \".concat(styles.minScreen, \" font-inter \"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"max-w-1xl \".concat(styles.minScreen, \" mx-auto\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Timer__WEBPACK_IMPORTED_MODULE_2__.Timer, {\n        tab: tab,\n        toggle: toggle,\n        getTime: getTime,\n        second: second,\n        timeCounter: timeCounter,\n        setTimeCounter: setTimeCounter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_MediaNav__WEBPACK_IMPORTED_MODULE_3__.MediaNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__.InfoSection, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Alarm__WEBPACK_IMPORTED_MODULE_5__.Alarm, {\n        alarmRef: alarmRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 104,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"633Agr9FKtEfGLqVxoSNSxUSmRg=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFNBQXhCLGlCQUFkO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLHNCQUFlRCxNQUFNLENBQUNDLFNBQXRCLGFBQWQ7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxvREFBRDtBQUFPLFdBQUcsRUFBRWhDLEdBQVo7QUFBaUIsY0FBTSxFQUFFTyxNQUF6QjtBQUFpQyxlQUFPLEVBQUVLLE9BQTFDO0FBQW1ELGNBQU0sRUFBRWQsTUFBM0Q7QUFBbUUsbUJBQVcsRUFBRUksV0FBaEY7QUFBNkYsc0JBQWMsRUFBRUM7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0osOERBQUMsb0RBQUQ7QUFBTyxnQkFBUSxFQUFFRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBMUd1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgeyBUaW1lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyXCI7XG5pbXBvcnQgeyBNZWRpYU5hdiB9IGZyb20gXCIuLi9jb21wb25lbnRzL01lZGlhTmF2XCI7XG5pbXBvcnQgeyBJbmZvU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9TZWN0aW9uXCI7XG5pbXBvcnQgeyBBbGFybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FsYXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwb21vZG9ybywgc2V0UG9tb2Rvcm9dID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbc2hvcnRCcmVhaywgc2V0U2hvcnRCcmVha10gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW2xvbmdCcmVhaywgc2V0TG9uZ0JyZWFrXSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lQ291bnRlcixzZXRUaW1lQ291bnRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NoZWNrU2Vjb25kLCBzZXRDaGVja1NlY29uZF0gPSB1c2VTdGF0ZSgwKVxuXG5cdGNvbnN0IGFsYXJtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgdG9nZ2xlID0gKGluZGV4KSA9PiB7XG5cdGNvbnN0IGlzU2Vjb25kID0gY2hlY2tTZWNvbmQgJiYgdGFiICE9PSBpbmRleCA/IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gU3dpdGNoIHRhYnNcIikgOiBmYWxzZTtcblx0aWYoaXNTZWNvbmQpe1xuXHRcdHJlc2V0KCk7XG5cdFx0c2V0VGFiKGluZGV4KVxuXHR9ZWxzZSBpZighY2hlY2tTZWNvbmQpIHtcblx0XHRzZXRUYWIoaW5kZXgpO1xuXHR9XG4gIH07XG5cbiAgY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lVGFiID0ge1xuICAgICAgMDogcG9tb2Rvcm8sXG4gICAgICAxOiBzaG9ydEJyZWFrLFxuICAgICAgMjogbG9uZ0JyZWFrLFxuICAgIH07XG4gICAgcmV0dXJuIHRpbWVUYWJbdGFiXTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVNaW51dGUgPSAoKSA9PiB7XG5cdGNvbnN0IHVwZGF0ZVRhYiA9IHtcblx0XHQwOiBzZXRQb21vZG9ybyxcblx0XHQxOiBzZXRTaG9ydEJyZWFrLFxuXHRcdDI6IHNldExvbmdCcmVhayxcblx0ICB9O1xuXHQgIHJldHVybiB1cGRhdGVUYWJbdGFiXTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuXHQgIHNldENoZWNrU2Vjb25kKDApXG5cdCAgc2V0VGltZUNvdW50ZXIoZmFsc2UpO1xuXHQgIHNldFNlY29uZCgwKTtcblx0ICBzZXRQb21vZG9ybygyNSk7XG5cdCAgc2V0U2hvcnRCcmVhayg1KTtcblx0ICBzZXRMb25nQnJlYWsoMTApXG4gIH1cblxuICBjb25zdCB0aW1lVXAgPSAoKSA9PiB7XG5cdHJlc2V0KCk7XG5cdGFsYXJtUmVmLmN1cnJlbnQucGxheSgpO1xuICB9XG5cbiAgY29uc3QgbXV0ZUFsYXJtID0gKCkgPT4ge1xuXHRhbGFybVJlZi5jdXJyZW50LnBhdXNlKCk7XG5cbiAgfVxuXG4gIGNvbnN0IHJ1blRpbWUgPSAoKSA9PiB7XG5cdCAgY29uc3QgbWlucyA9IGdldFRpbWUoKTtcblx0ICBjb25zdCBzZXRNaW5zID0gdXBkYXRlTWludXRlKCk7XG5cblx0ICBpZihtaW5zID09PSAwICYmIHNlY29uZCA9PT0gMCkge1xuXHRcdCAgdGltZVVwKCk7XG5cdCAgfWVsc2UgaWYoc2Vjb25kID09PSAwICl7XG5cdFx0ICBzZXRNaW5zKChtaW4pID0+IG1pbiAtIDEpXG5cdFx0ICBzZXRTZWNvbmQoNTkpO1xuXHQgIH1lbHNle1xuXHRcdCAgc2V0U2Vjb25kKChzZWNvbmQpID0+IHNlY29uZCAtICAxKVxuXHQgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcblx0XHRyZXR1cm4gY2hlY2tTZWNvbmQgPyBcIlNob3cgd2FybmluZ1wiIDogbnVsbDtcblx0fVxuXG5cdGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdGlmKHRpbWVDb3VudGVyKXtcblx0XHRcdHNldENoZWNrU2Vjb25kKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKVxuXHRcdFx0cnVuVGltZSgpO1xuXHRcdH1cblx0XHRcblx0fSwgMTAwMCk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRjbGVhckludGVydmFsKHRpbWVyKVxuXHR9XG4gIH0sW3NlY29uZCwgcG9tb2Rvcm8sIHNob3J0QnJlYWssIGxvbmdCcmVhaywgdGltZUNvdW50ZXJdKVxuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBtaW5TY3JlZW46IFwibWluLWgtc2NyZWVuXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLWdyYXktOTAwICR7c3R5bGVzLm1pblNjcmVlbn0gZm9udC1pbnRlciBgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctMXhsICR7c3R5bGVzLm1pblNjcmVlbn0gbXgtYXV0b2B9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxUaW1lciB0YWI9e3RhYn0gdG9nZ2xlPXt0b2dnbGV9IGdldFRpbWU9e2dldFRpbWV9IHNlY29uZD17c2Vjb25kfSB0aW1lQ291bnRlcj17dGltZUNvdW50ZXJ9IHNldFRpbWVDb3VudGVyPXtzZXRUaW1lQ291bnRlcn0vPlxuICAgICAgICA8TWVkaWFOYXYgLz5cbiAgICAgICAgPEluZm9TZWN0aW9uIC8+XG5cdFx0PEFsYXJtIGFsYXJtUmVmPXthbGFybVJlZn0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk5hdkJhciIsIlRpbWVyIiwiTWVkaWFOYXYiLCJJbmZvU2VjdGlvbiIsIkFsYXJtIiwiSG9tZSIsInBvbW9kb3JvIiwic2V0UG9tb2Rvcm8iLCJzaG9ydEJyZWFrIiwic2V0U2hvcnRCcmVhayIsImxvbmdCcmVhayIsInNldExvbmdCcmVhayIsInNlY29uZCIsInNldFNlY29uZCIsInRhYiIsInNldFRhYiIsInRpbWVDb3VudGVyIiwic2V0VGltZUNvdW50ZXIiLCJjaGVja1NlY29uZCIsInNldENoZWNrU2Vjb25kIiwiYWxhcm1SZWYiLCJ0b2dnbGUiLCJpbmRleCIsImlzU2Vjb25kIiwiY29uZmlybSIsInJlc2V0IiwiZ2V0VGltZSIsInRpbWVUYWIiLCJ1cGRhdGVNaW51dGUiLCJ1cGRhdGVUYWIiLCJ0aW1lVXAiLCJjdXJyZW50IiwicGxheSIsIm11dGVBbGFybSIsInBhdXNlIiwicnVuVGltZSIsIm1pbnMiLCJzZXRNaW5zIiwibWluIiwid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJ0aW1lciIsInNldEludGVydmFsIiwidmFsdWUiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibWluU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});