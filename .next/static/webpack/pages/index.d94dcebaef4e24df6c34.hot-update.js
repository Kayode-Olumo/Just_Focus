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

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),\n    pomodoro = _useState[0],\n    setPomodoro = _useState[1];\n\nvar _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),\n    shortBreak = _useState2[0],\n    setShortBreak = _useState2[1];\n\nvar _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n    longBreak = _useState3[0],\n    setLongBreak = _useState3[1];\n\nvar _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    second = _useState4[0],\n    setSecond = _useState4[1];\n\nvar _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    tab = _useState5[0],\n    setTab = _useState5[1];\n\nvar _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    timeCounter = _useState6[0],\n    setTimeCounter = _useState6[1];\n\nvar _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    checkSecond = _useState7[0],\n    setCheckSecond = _useState7[1];\n\nvar toggle = function toggle(index) {\n  var isSecond = checkSecond && tab !== index ? confirm(\"Are you sure you want to Switch tabs\") : false;\n\n  if (isSecond) {\n    reset();\n    setTab(index);\n  } else if (!checkSecond) {\n    setTab(index);\n  }\n};\n\nvar getTime = function getTime() {\n  var timeTab = {\n    0: pomodoro,\n    1: shortBreak,\n    2: longBreak\n  };\n  return timeTab[tab];\n};\n\nvar updateMinute = function updateMinute() {\n  var updateTab = {\n    0: setPomodoro,\n    1: setShortBreak,\n    2: setLongBreak\n  };\n  return updateTab[tab];\n};\n\nvar reset = function reset() {\n  setCheckSecond(0);\n  setTimeCounter(false);\n  setSecond(0);\n  setPomodoro(25);\n  setShortBreak(5);\n  setLongBreak(10);\n};\n\nvar runTime = function runTime() {\n  var mins = getTime();\n  var setMins = updateMinute();\n\n  if (mins === 0 && second === 0) {\n    reset();\n  } else if (second === 0) {\n    setMins(function (min) {\n      return min - 1;\n    });\n    setSecond(59);\n  } else {\n    setSecond(function (second) {\n      return second - 1;\n    });\n  }\n};\n\n(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n  window.onbeforeunload = function () {\n    return checkSecond ? \"Show warning\" : null;\n  };\n\n  var timer = setInterval(function () {\n    if (timeCounter) {\n      setCheckSecond(function (value) {\n        return value + 1;\n      });\n      runTime();\n    }\n  }, 1000);\n  return function () {\n    clearInterval(timer);\n  };\n}, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxHQUFJLENBQXRCO0FBQUEsS0FBRCxDQUFUO0FBQ0g7QUFDSixDQVpEOztBQWNBUixnREFBUyxDQUFDLFlBQU07QUFDZDZCLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxHQUF3QixZQUFNO0FBQzFCLFdBQU9oQixXQUFXLEdBQUcsY0FBSCxHQUFvQixJQUF0QztBQUNILEdBRkQ7O0FBSUEsTUFBTWlCLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDNUIsUUFBR3BCLFdBQUgsRUFBZTtBQUNYRyxNQUFBQSxjQUFjLENBQUMsVUFBQ2tCLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLEdBQUcsQ0FBbkI7QUFBQSxPQUFELENBQWQ7QUFDQVIsTUFBQUEsT0FBTztBQUNWO0FBRUosR0FOd0IsRUFNdEIsSUFOc0IsQ0FBekI7QUFPQSxTQUFPLFlBQU07QUFDWFMsSUFBQUEsYUFBYSxDQUFDSCxLQUFELENBQWI7QUFDSCxHQUZDO0FBR0QsQ0FmUSxFQWVQLENBQUN2QixNQUFELEVBQVNOLFFBQVQsRUFBbUJFLFVBQW5CLEVBQStCRSxTQUEvQixFQUEwQ00sV0FBMUMsQ0FmTyxDQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Z1bmN0aW9ucy9pbmRleC5qcz9mOTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgW3BvbW9kb3JvLCBzZXRQb21vZG9yb10gPSB1c2VTdGF0ZSgyNSk7XG5jb25zdCBbc2hvcnRCcmVhaywgc2V0U2hvcnRCcmVha10gPSB1c2VTdGF0ZSg1KTtcbmNvbnN0IFtsb25nQnJlYWssIHNldExvbmdCcmVha10gPSB1c2VTdGF0ZSgxMCk7XG5jb25zdCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoMCk7XG5jb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XG5jb25zdCBbdGltZUNvdW50ZXIsc2V0VGltZUNvdW50ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5jb25zdCBbY2hlY2tTZWNvbmQsIHNldENoZWNrU2Vjb25kXSA9IHVzZVN0YXRlKDApXG5cbmNvbnN0IHRvZ2dsZSA9IChpbmRleCkgPT4ge1xuICBjb25zdCBpc1NlY29uZCA9IGNoZWNrU2Vjb25kICYmIHRhYiAhPT0gaW5kZXggPyBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFN3aXRjaCB0YWJzXCIpIDogZmFsc2U7XG4gIGlmKGlzU2Vjb25kKXtcbiAgICAgIHJlc2V0KCk7XG4gICAgICBzZXRUYWIoaW5kZXgpXG4gIH1lbHNlIGlmKCFjaGVja1NlY29uZCkge1xuICAgICAgc2V0VGFiKGluZGV4KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgY29uc3QgdGltZVRhYiA9IHtcbiAgICAwOiBwb21vZG9ybyxcbiAgICAxOiBzaG9ydEJyZWFrLFxuICAgIDI6IGxvbmdCcmVhayxcbiAgfTtcbiAgcmV0dXJuIHRpbWVUYWJbdGFiXTtcbn07XG5cbmNvbnN0IHVwZGF0ZU1pbnV0ZSA9ICgpID0+IHtcbiAgY29uc3QgdXBkYXRlVGFiID0ge1xuICAgICAgMDogc2V0UG9tb2Rvcm8sXG4gICAgICAxOiBzZXRTaG9ydEJyZWFrLFxuICAgICAgMjogc2V0TG9uZ0JyZWFrLFxuICAgIH07XG4gICAgcmV0dXJuIHVwZGF0ZVRhYlt0YWJdO1xufVxuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBzZXRDaGVja1NlY29uZCgwKVxuICAgIHNldFRpbWVDb3VudGVyKGZhbHNlKTtcbiAgICBzZXRTZWNvbmQoMCk7XG4gICAgc2V0UG9tb2Rvcm8oMjUpO1xuICAgIHNldFNob3J0QnJlYWsoNSk7XG4gICAgc2V0TG9uZ0JyZWFrKDEwKVxufVxuXG5jb25zdCBydW5UaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbnMgPSBnZXRUaW1lKCk7XG4gICAgY29uc3Qgc2V0TWlucyA9IHVwZGF0ZU1pbnV0ZSgpO1xuXG4gICAgaWYobWlucyA9PT0gMCAmJiBzZWNvbmQgPT09IDApIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICB9ZWxzZSBpZihzZWNvbmQgPT09IDAgKXtcbiAgICAgICAgc2V0TWlucygobWluKSA9PiBtaW4gLSAxKVxuICAgICAgICBzZXRTZWNvbmQoNTkpO1xuICAgIH1lbHNle1xuICAgICAgICBzZXRTZWNvbmQoKHNlY29uZCkgPT4gc2Vjb25kIC0gIDEpXG4gICAgfVxufVxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gY2hlY2tTZWNvbmQgPyBcIlNob3cgd2FybmluZ1wiIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYodGltZUNvdW50ZXIpe1xuICAgICAgICAgIHNldENoZWNrU2Vjb25kKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKVxuICAgICAgICAgIHJ1blRpbWUoKTtcbiAgICAgIH1cbiAgICAgIFxuICB9LCAxMDAwKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxufVxufSxbc2Vjb25kLCBwb21vZG9ybywgc2hvcnRCcmVhaywgbG9uZ0JyZWFrLCB0aW1lQ291bnRlcl0pXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicG9tb2Rvcm8iLCJzZXRQb21vZG9ybyIsInNob3J0QnJlYWsiLCJzZXRTaG9ydEJyZWFrIiwibG9uZ0JyZWFrIiwic2V0TG9uZ0JyZWFrIiwic2Vjb25kIiwic2V0U2Vjb25kIiwidGFiIiwic2V0VGFiIiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsImNoZWNrU2Vjb25kIiwic2V0Q2hlY2tTZWNvbmQiLCJ0b2dnbGUiLCJpbmRleCIsImlzU2Vjb25kIiwiY29uZmlybSIsInJlc2V0IiwiZ2V0VGltZSIsInRpbWVUYWIiLCJ1cGRhdGVNaW51dGUiLCJ1cGRhdGVUYWIiLCJydW5UaW1lIiwibWlucyIsInNldE1pbnMiLCJtaW4iLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ2YWx1ZSIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./functions/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar/index.js\");\n/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ \"./components/Timer/index.js\");\n/* harmony import */ var _components_MediaNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaNav */ \"./components/MediaNav/index.js\");\n/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ \"./components/InfoSection/index.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions */ \"./functions/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),\n      pomodoro = _useState[0],\n      setPomodoro = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),\n      shortBreak = _useState2[0],\n      setShortBreak = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n      longBreak = _useState3[0],\n      setLongBreak = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      second = _useState4[0],\n      setSecond = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      tab = _useState5[0],\n      setTab = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timeCounter = _useState6[0],\n      setTimeCounter = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      checkSecond = _useState7[0],\n      setCheckSecond = _useState7[1];\n\n  var toggle = function toggle(index) {\n    var isSecond = checkSecond && tab !== index ? confirm(\"Are you sure you want to Switch tabs\") : false;\n\n    if (isSecond) {\n      reset();\n      setTab(index);\n    } else if (!checkSecond) {\n      setTab(index);\n    }\n  };\n\n  var getTime = function getTime() {\n    var timeTab = {\n      0: pomodoro,\n      1: shortBreak,\n      2: longBreak\n    };\n    return timeTab[tab];\n  };\n\n  var updateMinute = function updateMinute() {\n    var updateTab = {\n      0: setPomodoro,\n      1: setShortBreak,\n      2: setLongBreak\n    };\n    return updateTab[tab];\n  };\n\n  var reset = function reset() {\n    setCheckSecond(0);\n    setTimeCounter(false);\n    setSecond(0);\n    setPomodoro(25);\n    setShortBreak(5);\n    setLongBreak(10);\n  };\n\n  var runTime = function runTime() {\n    var mins = getTime();\n    var setMins = updateMinute();\n\n    if (mins === 0 && second === 0) {\n      reset();\n    } else if (second === 0) {\n      setMins(function (min) {\n        return min - 1;\n      });\n      setSecond(59);\n    } else {\n      setSecond(function (second) {\n        return second - 1;\n      });\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.onbeforeunload = function () {\n      return checkSecond ? \"Show warning\" : null;\n    };\n\n    var timer = setInterval(function () {\n      if (timeCounter) {\n        setCheckSecond(function (value) {\n          return value + 1;\n        });\n        runTime();\n      }\n    }, 1000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n  var styles = {\n    minScreen: \"min-h-screen\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"bg-gray-900 \".concat(styles.minScreen, \" font-inter \"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"max-w-1xl \".concat(styles.minScreen, \" mx-auto\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Timer__WEBPACK_IMPORTED_MODULE_2__.Timer, {\n        tab: tab,\n        toggle: toggle,\n        getTime: getTime,\n        second: second,\n        timeCounter: timeCounter,\n        setTimeCounter: setTimeCounter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_MediaNav__WEBPACK_IMPORTED_MODULE_3__.MediaNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__.InfoSection, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"Gq7PJyn/5OBv5jnj+YUjHf4xkKs=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLGtCQUFnQ04sK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT08sUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBb0NSLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQWtDViwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPVyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXNCZCwrQ0FBUSxDQUFDLENBQUQsQ0FBOUI7QUFBQSxNQUFPZSxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxtQkFBcUNoQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFBQSxNQUFPaUIsV0FBUDtBQUFBLE1BQW1CQyxjQUFuQjs7QUFFQSxtQkFBc0NsQiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPbUIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFDM0IsUUFBTUMsUUFBUSxHQUFHSixXQUFXLElBQUlKLEdBQUcsS0FBS08sS0FBdkIsR0FBK0JFLE9BQU8sQ0FBQyxzQ0FBRCxDQUF0QyxHQUFpRixLQUFsRzs7QUFDQSxRQUFHRCxRQUFILEVBQVk7QUFDWEUsTUFBQUEsS0FBSztBQUNMVCxNQUFBQSxNQUFNLENBQUNNLEtBQUQsQ0FBTjtBQUNBLEtBSEQsTUFHTSxJQUFHLENBQUNILFdBQUosRUFBaUI7QUFDdEJILE1BQUFBLE1BQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0E7QUFDQyxHQVJEOztBQVVBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsUUFBTUMsT0FBTyxHQUFHO0FBQ2QsU0FBR3BCLFFBRFc7QUFFZCxTQUFHRSxVQUZXO0FBR2QsU0FBR0U7QUFIVyxLQUFoQjtBQUtBLFdBQU9nQixPQUFPLENBQUNaLEdBQUQsQ0FBZDtBQUNELEdBUEQ7O0FBU0EsTUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM1QixRQUFNQyxTQUFTLEdBQUc7QUFDakIsU0FBR3JCLFdBRGM7QUFFakIsU0FBR0UsYUFGYztBQUdqQixTQUFHRTtBQUhjLEtBQWxCO0FBS0UsV0FBT2lCLFNBQVMsQ0FBQ2QsR0FBRCxDQUFoQjtBQUNBLEdBUEQ7O0FBU0EsTUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNuQkwsSUFBQUEsY0FBYyxDQUFDLENBQUQsQ0FBZDtBQUNBRixJQUFBQSxjQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FKLElBQUFBLFNBQVMsQ0FBQyxDQUFELENBQVQ7QUFDQU4sSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxJQUFBQSxhQUFhLENBQUMsQ0FBRCxDQUFiO0FBQ0FFLElBQUFBLFlBQVksQ0FBQyxFQUFELENBQVo7QUFDQSxHQVBEOztBQVNBLE1BQU1rQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3JCLFFBQU1DLElBQUksR0FBR0wsT0FBTyxFQUFwQjtBQUNBLFFBQU1NLE9BQU8sR0FBR0osWUFBWSxFQUE1Qjs7QUFFQSxRQUFHRyxJQUFJLEtBQUssQ0FBVCxJQUFjbEIsTUFBTSxLQUFLLENBQTVCLEVBQStCO0FBQzlCWSxNQUFBQSxLQUFLO0FBQ0wsS0FGRCxNQUVNLElBQUdaLE1BQU0sS0FBSyxDQUFkLEVBQWlCO0FBQ3RCbUIsTUFBQUEsT0FBTyxDQUFDLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLEdBQUcsQ0FBZjtBQUFBLE9BQUQsQ0FBUDtBQUNBbkIsTUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBLEtBSEssTUFHRDtBQUNKQSxNQUFBQSxTQUFTLENBQUMsVUFBQ0QsTUFBRDtBQUFBLGVBQVlBLE1BQU0sR0FBSSxDQUF0QjtBQUFBLE9BQUQsQ0FBVDtBQUNBO0FBQ0QsR0FaRDs7QUFjQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2pCaUMsSUFBQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXdCLFlBQU07QUFDN0IsYUFBT2hCLFdBQVcsR0FBRyxjQUFILEdBQW9CLElBQXRDO0FBQ0EsS0FGRDs7QUFJQSxRQUFNaUIsS0FBSyxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUMvQixVQUFHcEIsV0FBSCxFQUFlO0FBQ2RHLFFBQUFBLGNBQWMsQ0FBQyxVQUFDa0IsS0FBRDtBQUFBLGlCQUFXQSxLQUFLLEdBQUcsQ0FBbkI7QUFBQSxTQUFELENBQWQ7QUFDQVIsUUFBQUEsT0FBTztBQUNQO0FBRUQsS0FOd0IsRUFNdEIsSUFOc0IsQ0FBekI7QUFRQSxXQUFPLFlBQU07QUFDWlMsTUFBQUEsYUFBYSxDQUFDSCxLQUFELENBQWI7QUFDQSxLQUZEO0FBR0UsR0FoQlEsRUFnQlAsQ0FBQ3ZCLE1BQUQsRUFBU04sUUFBVCxFQUFtQkUsVUFBbkIsRUFBK0JFLFNBQS9CLEVBQTBDTSxXQUExQyxDQWhCTyxDQUFUO0FBa0JBLE1BQU11QixNQUFNLEdBQUc7QUFDYkMsSUFBQUEsU0FBUyxFQUFFO0FBREUsR0FBZjtBQUlBLHNCQUNFO0FBQUssYUFBUyx3QkFBaUJELE1BQU0sQ0FBQ0MsU0FBeEIsaUJBQWQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsc0JBQWVELE1BQU0sQ0FBQ0MsU0FBdEIsYUFBZDtBQUFBLDhCQUNFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLG9EQUFEO0FBQU8sV0FBRyxFQUFFMUIsR0FBWjtBQUFpQixjQUFNLEVBQUVNLE1BQXpCO0FBQWlDLGVBQU8sRUFBRUssT0FBMUM7QUFBbUQsY0FBTSxFQUFFYixNQUEzRDtBQUFtRSxtQkFBVyxFQUFFSSxXQUFoRjtBQUE2RixzQkFBYyxFQUFFQztBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBN0Z1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaW1lclwiO1xuaW1wb3J0IHsgTWVkaWFOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZWRpYU5hdlwiO1xuaW1wb3J0IHsgSW5mb1NlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvU2VjdGlvblwiO1xuaW1wb3J0IHt9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwb21vZG9ybywgc2V0UG9tb2Rvcm9dID0gdXNlU3RhdGUoMjUpO1xuICBjb25zdCBbc2hvcnRCcmVhaywgc2V0U2hvcnRCcmVha10gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW2xvbmdCcmVhaywgc2V0TG9uZ0JyZWFrXSA9IHVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lQ291bnRlcixzZXRUaW1lQ291bnRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NoZWNrU2Vjb25kLCBzZXRDaGVja1NlY29uZF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHRvZ2dsZSA9IChpbmRleCkgPT4ge1xuXHRjb25zdCBpc1NlY29uZCA9IGNoZWNrU2Vjb25kICYmIHRhYiAhPT0gaW5kZXggPyBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFN3aXRjaCB0YWJzXCIpIDogZmFsc2U7XG5cdGlmKGlzU2Vjb25kKXtcblx0XHRyZXNldCgpO1xuXHRcdHNldFRhYihpbmRleClcblx0fWVsc2UgaWYoIWNoZWNrU2Vjb25kKSB7XG5cdFx0c2V0VGFiKGluZGV4KTtcblx0fVxuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZVRhYiA9IHtcbiAgICAgIDA6IHBvbW9kb3JvLFxuICAgICAgMTogc2hvcnRCcmVhayxcbiAgICAgIDI6IGxvbmdCcmVhayxcbiAgICB9O1xuICAgIHJldHVybiB0aW1lVGFiW3RhYl07XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTWludXRlID0gKCkgPT4ge1xuXHRjb25zdCB1cGRhdGVUYWIgPSB7XG5cdFx0MDogc2V0UG9tb2Rvcm8sXG5cdFx0MTogc2V0U2hvcnRCcmVhayxcblx0XHQyOiBzZXRMb25nQnJlYWssXG5cdCAgfTtcblx0ICByZXR1cm4gdXBkYXRlVGFiW3RhYl07XG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcblx0ICBzZXRDaGVja1NlY29uZCgwKVxuXHQgIHNldFRpbWVDb3VudGVyKGZhbHNlKTtcblx0ICBzZXRTZWNvbmQoMCk7XG5cdCAgc2V0UG9tb2Rvcm8oMjUpO1xuXHQgIHNldFNob3J0QnJlYWsoNSk7XG5cdCAgc2V0TG9uZ0JyZWFrKDEwKVxuICB9XG5cbiAgY29uc3QgcnVuVGltZSA9ICgpID0+IHtcblx0ICBjb25zdCBtaW5zID0gZ2V0VGltZSgpO1xuXHQgIGNvbnN0IHNldE1pbnMgPSB1cGRhdGVNaW51dGUoKTtcblxuXHQgIGlmKG1pbnMgPT09IDAgJiYgc2Vjb25kID09PSAwKSB7XG5cdFx0ICByZXNldCgpO1xuXHQgIH1lbHNlIGlmKHNlY29uZCA9PT0gMCApe1xuXHRcdCAgc2V0TWlucygobWluKSA9PiBtaW4gLSAxKVxuXHRcdCAgc2V0U2Vjb25kKDU5KTtcblx0ICB9ZWxzZXtcblx0XHQgIHNldFNlY29uZCgoc2Vjb25kKSA9PiBzZWNvbmQgLSAgMSlcblx0ICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGNoZWNrU2Vjb25kID8gXCJTaG93IHdhcm5pbmdcIiA6IG51bGw7XG5cdH1cblxuXHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRpZih0aW1lQ291bnRlcil7XG5cdFx0XHRzZXRDaGVja1NlY29uZCgodmFsdWUpID0+IHZhbHVlICsgMSlcblx0XHRcdHJ1blRpbWUoKTtcblx0XHR9XG5cdFx0XG5cdH0sIDEwMDApO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcilcblx0fVxuICB9LFtzZWNvbmQsIHBvbW9kb3JvLCBzaG9ydEJyZWFrLCBsb25nQnJlYWssIHRpbWVDb3VudGVyXSlcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgbWluU2NyZWVuOiBcIm1pbi1oLXNjcmVlblwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BiZy1ncmF5LTkwMCAke3N0eWxlcy5taW5TY3JlZW59IGZvbnQtaW50ZXIgYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LTF4bCAke3N0eWxlcy5taW5TY3JlZW59IG14LWF1dG9gfT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8VGltZXIgdGFiPXt0YWJ9IHRvZ2dsZT17dG9nZ2xlfSBnZXRUaW1lPXtnZXRUaW1lfSBzZWNvbmQ9e3NlY29uZH0gdGltZUNvdW50ZXI9e3RpbWVDb3VudGVyfSBzZXRUaW1lQ291bnRlcj17c2V0VGltZUNvdW50ZXJ9Lz5cbiAgICAgICAgPE1lZGlhTmF2IC8+XG4gICAgICAgIDxJbmZvU2VjdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkJhciIsIlRpbWVyIiwiTWVkaWFOYXYiLCJJbmZvU2VjdGlvbiIsIkhvbWUiLCJwb21vZG9ybyIsInNldFBvbW9kb3JvIiwic2hvcnRCcmVhayIsInNldFNob3J0QnJlYWsiLCJsb25nQnJlYWsiLCJzZXRMb25nQnJlYWsiLCJzZWNvbmQiLCJzZXRTZWNvbmQiLCJ0YWIiLCJzZXRUYWIiLCJ0aW1lQ291bnRlciIsInNldFRpbWVDb3VudGVyIiwiY2hlY2tTZWNvbmQiLCJzZXRDaGVja1NlY29uZCIsInRvZ2dsZSIsImluZGV4IiwiaXNTZWNvbmQiLCJjb25maXJtIiwicmVzZXQiLCJnZXRUaW1lIiwidGltZVRhYiIsInVwZGF0ZU1pbnV0ZSIsInVwZGF0ZVRhYiIsInJ1blRpbWUiLCJtaW5zIiwic2V0TWlucyIsIm1pbiIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsIm1pblNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});