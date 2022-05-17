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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar/index.js\");\n/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ \"./components/Timer/index.js\");\n/* harmony import */ var _components_MediaNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaNav */ \"./components/MediaNav/index.js\");\n/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ \"./components/InfoSection/index.js\");\n/* harmony import */ var _components_Alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Alarm */ \"./components/Alarm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(25),\n      pomodoro = _useState[0],\n      setPomodoro = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),\n      shortBreak = _useState2[0],\n      setShortBreak = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n      longBreak = _useState3[0],\n      setLongBreak = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      second = _useState4[0],\n      setSecond = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      tab = _useState5[0],\n      setTab = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timeCounter = _useState6[0],\n      setTimeCounter = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      checkSecond = _useState7[0],\n      setCheckSecond = _useState7[1];\n\n  var alarmRef = useRef();\n\n  var toggle = function toggle(index) {\n    var isSecond = checkSecond && tab !== index ? confirm(\"Are you sure you want to Switch tabs\") : false;\n\n    if (isSecond) {\n      reset();\n      setTab(index);\n    } else if (!checkSecond) {\n      setTab(index);\n    }\n  };\n\n  var getTime = function getTime() {\n    var timeTab = {\n      0: pomodoro,\n      1: shortBreak,\n      2: longBreak\n    };\n    return timeTab[tab];\n  };\n\n  var updateMinute = function updateMinute() {\n    var updateTab = {\n      0: setPomodoro,\n      1: setShortBreak,\n      2: setLongBreak\n    };\n    return updateTab[tab];\n  };\n\n  var reset = function reset() {\n    setCheckSecond(0);\n    setTimeCounter(false);\n    setSecond(0);\n    setPomodoro(25);\n    setShortBreak(5);\n    setLongBreak(10);\n  };\n\n  var runTime = function runTime() {\n    var mins = getTime();\n    var setMins = updateMinute();\n\n    if (mins === 0 && second === 0) {\n      reset();\n    } else if (second === 0) {\n      setMins(function (min) {\n        return min - 1;\n      });\n      setSecond(59);\n    } else {\n      setSecond(function (second) {\n        return second - 1;\n      });\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.onbeforeunload = function () {\n      return checkSecond ? \"Show warning\" : null;\n    };\n\n    var timer = setInterval(function () {\n      if (timeCounter) {\n        setCheckSecond(function (value) {\n          return value + 1;\n        });\n        runTime();\n      }\n    }, 1000);\n    return function () {\n      clearInterval(timer);\n    };\n  }, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n  var styles = {\n    minScreen: \"min-h-screen\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"bg-gray-900 \".concat(styles.minScreen, \" font-inter \"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"max-w-1xl \".concat(styles.minScreen, \" mx-auto\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Timer__WEBPACK_IMPORTED_MODULE_2__.Timer, {\n        tab: tab,\n        toggle: toggle,\n        getTime: getTime,\n        second: second,\n        timeCounter: timeCounter,\n        setTimeCounter: setTimeCounter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_MediaNav__WEBPACK_IMPORTED_MODULE_3__.MediaNav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__.InfoSection, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Alarm__WEBPACK_IMPORTED_MODULE_5__.Alarm, {\n        ref: alarmRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"633Agr9FKtEfGLqVxoSNSxUSmRg=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBbUQsY0FBTSxFQUFFZixNQUEzRDtBQUFtRSxtQkFBVyxFQUFFSSxXQUFoRjtBQUE2RixzQkFBYyxFQUFFQztBQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLSiw4REFBQyxvREFBRDtBQUFPLFdBQUcsRUFBRUc7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBaEd1QmY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaW1lclwiO1xuaW1wb3J0IHsgTWVkaWFOYXYgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZWRpYU5hdlwiO1xuaW1wb3J0IHsgSW5mb1NlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvU2VjdGlvblwiO1xuaW1wb3J0IHsgQWxhcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGFybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9tb2Rvcm8sIHNldFBvbW9kb3JvXSA9IHVzZVN0YXRlKDI1KTtcbiAgY29uc3QgW3Nob3J0QnJlYWssIHNldFNob3J0QnJlYWtdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtsb25nQnJlYWssIHNldExvbmdCcmVha10gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZUNvdW50ZXIsc2V0VGltZUNvdW50ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtjaGVja1NlY29uZCwgc2V0Q2hlY2tTZWNvbmRdID0gdXNlU3RhdGUoMClcblxuXHRjb25zdCBhbGFybVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9IChpbmRleCkgPT4ge1xuXHRjb25zdCBpc1NlY29uZCA9IGNoZWNrU2Vjb25kICYmIHRhYiAhPT0gaW5kZXggPyBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFN3aXRjaCB0YWJzXCIpIDogZmFsc2U7XG5cdGlmKGlzU2Vjb25kKXtcblx0XHRyZXNldCgpO1xuXHRcdHNldFRhYihpbmRleClcblx0fWVsc2UgaWYoIWNoZWNrU2Vjb25kKSB7XG5cdFx0c2V0VGFiKGluZGV4KTtcblx0fVxuICB9O1xuXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZVRhYiA9IHtcbiAgICAgIDA6IHBvbW9kb3JvLFxuICAgICAgMTogc2hvcnRCcmVhayxcbiAgICAgIDI6IGxvbmdCcmVhayxcbiAgICB9O1xuICAgIHJldHVybiB0aW1lVGFiW3RhYl07XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTWludXRlID0gKCkgPT4ge1xuXHRjb25zdCB1cGRhdGVUYWIgPSB7XG5cdFx0MDogc2V0UG9tb2Rvcm8sXG5cdFx0MTogc2V0U2hvcnRCcmVhayxcblx0XHQyOiBzZXRMb25nQnJlYWssXG5cdCAgfTtcblx0ICByZXR1cm4gdXBkYXRlVGFiW3RhYl07XG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcblx0ICBzZXRDaGVja1NlY29uZCgwKVxuXHQgIHNldFRpbWVDb3VudGVyKGZhbHNlKTtcblx0ICBzZXRTZWNvbmQoMCk7XG5cdCAgc2V0UG9tb2Rvcm8oMjUpO1xuXHQgIHNldFNob3J0QnJlYWsoNSk7XG5cdCAgc2V0TG9uZ0JyZWFrKDEwKVxuICB9XG5cbiAgY29uc3QgcnVuVGltZSA9ICgpID0+IHtcblx0ICBjb25zdCBtaW5zID0gZ2V0VGltZSgpO1xuXHQgIGNvbnN0IHNldE1pbnMgPSB1cGRhdGVNaW51dGUoKTtcblxuXHQgIGlmKG1pbnMgPT09IDAgJiYgc2Vjb25kID09PSAwKSB7XG5cdFx0ICByZXNldCgpO1xuXHQgIH1lbHNlIGlmKHNlY29uZCA9PT0gMCApe1xuXHRcdCAgc2V0TWlucygobWluKSA9PiBtaW4gLSAxKVxuXHRcdCAgc2V0U2Vjb25kKDU5KTtcblx0ICB9ZWxzZXtcblx0XHQgIHNldFNlY29uZCgoc2Vjb25kKSA9PiBzZWNvbmQgLSAgMSlcblx0ICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGNoZWNrU2Vjb25kID8gXCJTaG93IHdhcm5pbmdcIiA6IG51bGw7XG5cdH1cblxuXHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRpZih0aW1lQ291bnRlcil7XG5cdFx0XHRzZXRDaGVja1NlY29uZCgodmFsdWUpID0+IHZhbHVlICsgMSlcblx0XHRcdHJ1blRpbWUoKTtcblx0XHR9XG5cdFx0XG5cdH0sIDEwMDApO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcilcblx0fVxuICB9LFtzZWNvbmQsIHBvbW9kb3JvLCBzaG9ydEJyZWFrLCBsb25nQnJlYWssIHRpbWVDb3VudGVyXSlcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgbWluU2NyZWVuOiBcIm1pbi1oLXNjcmVlblwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BiZy1ncmF5LTkwMCAke3N0eWxlcy5taW5TY3JlZW59IGZvbnQtaW50ZXIgYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LTF4bCAke3N0eWxlcy5taW5TY3JlZW59IG14LWF1dG9gfT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8VGltZXIgdGFiPXt0YWJ9IHRvZ2dsZT17dG9nZ2xlfSBnZXRUaW1lPXtnZXRUaW1lfSBzZWNvbmQ9e3NlY29uZH0gdGltZUNvdW50ZXI9e3RpbWVDb3VudGVyfSBzZXRUaW1lQ291bnRlcj17c2V0VGltZUNvdW50ZXJ9Lz5cbiAgICAgICAgPE1lZGlhTmF2IC8+XG4gICAgICAgIDxJbmZvU2VjdGlvbiAvPlxuXHRcdDxBbGFybSByZWY9e2FsYXJtUmVmfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2QmFyIiwiVGltZXIiLCJNZWRpYU5hdiIsIkluZm9TZWN0aW9uIiwiQWxhcm0iLCJIb21lIiwicG9tb2Rvcm8iLCJzZXRQb21vZG9ybyIsInNob3J0QnJlYWsiLCJzZXRTaG9ydEJyZWFrIiwibG9uZ0JyZWFrIiwic2V0TG9uZ0JyZWFrIiwic2Vjb25kIiwic2V0U2Vjb25kIiwidGFiIiwic2V0VGFiIiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsImNoZWNrU2Vjb25kIiwic2V0Q2hlY2tTZWNvbmQiLCJhbGFybVJlZiIsInVzZVJlZiIsInRvZ2dsZSIsImluZGV4IiwiaXNTZWNvbmQiLCJjb25maXJtIiwicmVzZXQiLCJnZXRUaW1lIiwidGltZVRhYiIsInVwZGF0ZU1pbnV0ZSIsInVwZGF0ZVRhYiIsInJ1blRpbWUiLCJtaW5zIiwic2V0TWlucyIsIm1pbiIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInZhbHVlIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsIm1pblNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});