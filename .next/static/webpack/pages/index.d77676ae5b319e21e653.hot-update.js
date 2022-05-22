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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar/index.js\");\n/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ \"./components/Timer/index.js\");\n/* harmony import */ var _components_MediaNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaNav */ \"./components/MediaNav/index.js\");\n/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ \"./components/InfoSection/index.js\");\n/* harmony import */ var _components_Alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Alarm */ \"./components/Alarm/index.js\");\n/* harmony import */ var _components_SettingsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SettingsModal */ \"./components/SettingsModal/index.js\");\n/* harmony import */ var _components_Spotify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Spotify */ \"./components/Spotify/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var POMODORO = 25,\n      SHORTBREAK = 5,\n      LONGBREAK = 10;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      openSetting = _useState[0],\n      setOpenSetting = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      openSpotify = _useState2[0],\n      setOpenSpotify = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      timeCounter = _useState3[0],\n      setTimeCounter = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isTimeUp = _useState4[0],\n      setIsTimeUp = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(POMODORO),\n      pomodoro = _useState5[0],\n      setPomodoro = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SHORTBREAK),\n      shortBreak = _useState6[0],\n      setShortBreak = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(LONGBREAK),\n      longBreak = _useState7[0],\n      setLongBreak = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      second = _useState8[0],\n      setSecond = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      tab = _useState9[0],\n      setTab = _useState9[1];\n\n  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      checkSecond = _useState10[0],\n      setCheckSecond = _useState10[1];\n\n  var alarmRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var pomodoroRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var shortBreakRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var longBreakRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var updateTimeDefaultValue = function updateTimeDefaultValue() {\n    setPomodoro(pomodoroRef.current.value);\n    setShortBreak(shortBreakRef.current.value);\n    setLongBreak(longBreakRef.current.value);\n  };\n\n  var getTime = function getTime() {\n    var timeTab = {\n      0: pomodoro,\n      1: shortBreak,\n      2: longBreak\n    };\n    return timeTab[tab];\n  };\n\n  var updateMinute = function updateMinute() {\n    var updateTab = {\n      0: setPomodoro,\n      1: setShortBreak,\n      2: setLongBreak\n    };\n    return updateTab[tab];\n  };\n\n  var toggle = function toggle(index) {\n    var isSecond = checkSecond && tab !== index ? confirm(\"Are you sure you want to Switch tabs\") : false;\n\n    if (isSecond) {\n      reset();\n      setTab(index);\n    } else if (!checkSecond) {\n      setTab(index);\n    }\n  };\n\n  var reset = function reset() {\n    setCheckSecond(0);\n    setTimeCounter(false);\n    setSecond(0);\n    setPomodoro(POMODORO);\n    setShortBreak(SHORTBREAK);\n    setLongBreak(LONGBREAK);\n  };\n\n  var timeUp = function timeUp() {\n    reset();\n    setIsTimeUp(true);\n    alarmRef.current.play();\n  };\n\n  var runTime = function runTime() {\n    var mins = getTime();\n    var setMins = updateMinute();\n\n    if (mins === 0 && second === 0) {\n      timeUp();\n    } else if (second === 0) {\n      setMins(function (min) {\n        return min - 1;\n      });\n      setSecond(59);\n    } else {\n      setSecond(function (second) {\n        return second - 1;\n      });\n    }\n  };\n\n  var startTimer = function startTimer() {\n    setIsTimeUp(false);\n    muteAlarm();\n    setTimeCounter(function (timeCounter) {\n      return !timeCounter;\n    });\n  };\n\n  var muteAlarm = function muteAlarm() {\n    alarmRef.current.pause();\n    alarmRef.current.currentTime = 0;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.onbeforeunload = function () {\n      return checkSecond ? \"Show warning\" : null;\n    };\n\n    var timer = setInterval(function () {\n      if (timeCounter) {\n        setCheckSecond(function (value) {\n          return value + 1;\n        });\n        runTime();\n      }\n    }, 1000);\n\n    if (isTimeUp) {\n      clearInterval(timer);\n    }\n\n    return function () {\n      clearInterval(timer);\n    };\n  }, [second, pomodoro, shortBreak, longBreak, timeCounter]);\n  var styles = {\n    minScreen: \"min-h-screen\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    className: \"bg-white-900 \".concat(styles.minScreen, \" font-inter \"),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"head\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Just Focus\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        ref: \"icon\",\n        href: \"../public/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"max-w-1xl \".concat(styles.minScreen, \" mx-auto\"),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Spotify__WEBPACK_IMPORTED_MODULE_7__.Spotify, {\n        openSpotify: openSpotify\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__.default, {\n        setOpenSetting: setOpenSetting\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Timer__WEBPACK_IMPORTED_MODULE_2__.default, {\n        tab: tab,\n        toggle: toggle,\n        getTime: getTime,\n        second: second,\n        timeCounter: timeCounter,\n        startTimer: startTimer,\n        muteAlarm: muteAlarm,\n        isTimeUp: isTimeUp,\n        reset: reset\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_MediaNav__WEBPACK_IMPORTED_MODULE_3__.default, {\n        setOpenSpotify: setOpenSpotify\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Alarm__WEBPACK_IMPORTED_MODULE_5__.Alarm, {\n        alarmRef: alarmRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_6__.default, {\n        pomodoroRef: pomodoroRef,\n        shortBreakRef: shortBreakRef,\n        longBreakRef: longBreakRef,\n        openSetting: openSetting,\n        setOpenSetting: setOpenSetting,\n        updateTimeDefaultValue: updateTimeDefaultValue\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 130,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"Uxq/xNkE5iTq+zjWLlbuB9d0qJ0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGNBTkksZUFPSiw4REFBQyw4REFBRDtBQUFlLG1CQUFXLEVBQUVDLFdBQTVCO0FBQXlDLHFCQUFhLEVBQUVDLGFBQXhEO0FBQXVFLG9CQUFZLEVBQUVDLFlBQXJGO0FBQW1HLG1CQUFXLEVBQUV2QixXQUFoSDtBQUE2SCxzQkFBYyxFQUFFQyxjQUE3STtBQUE2Siw4QkFBc0IsRUFBRXdCO0FBQXJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0F6SXVCN0I7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi4vY29tcG9uZW50cy9UaW1lclwiO1xuaW1wb3J0IE1lZGlhTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL01lZGlhTmF2XCI7XG5pbXBvcnQgSW5mb1NlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb1NlY3Rpb25cIjtcbmltcG9ydCB7IEFsYXJtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWxhcm1cIjtcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzTW9kYWxcIjtcbmltcG9ydCB7IFNwb3RpZnkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TcG90aWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtQT01PRE9STywgU0hPUlRCUkVBSywgTE9OR0JSRUFLXSA9IFsyNSwgNSwgMTBdO1xuXG4gIGNvbnN0IFtvcGVuU2V0dGluZywgc2V0T3BlblNldHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlblNwb3RpZnksIHNldE9wZW5TcG90aWZ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpbWVDb3VudGVyLHNldFRpbWVDb3VudGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVGltZVVwLCBzZXRJc1RpbWVVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW3BvbW9kb3JvLCBzZXRQb21vZG9yb10gPSB1c2VTdGF0ZShQT01PRE9STyk7XG4gIGNvbnN0IFtzaG9ydEJyZWFrLCBzZXRTaG9ydEJyZWFrXSA9IHVzZVN0YXRlKFNIT1JUQlJFQUspO1xuICBjb25zdCBbbG9uZ0JyZWFrLCBzZXRMb25nQnJlYWtdID0gdXNlU3RhdGUoTE9OR0JSRUFLKTtcbiAgY29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjaGVja1NlY29uZCwgc2V0Q2hlY2tTZWNvbmRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBhbGFybVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwb21vZG9yb1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzaG9ydEJyZWFrUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxvbmdCcmVha1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpY29uID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgdXBkYXRlVGltZURlZmF1bHRWYWx1ZSA9ICgpID0+IHtcblx0c2V0UG9tb2Rvcm8ocG9tb2Rvcm9SZWYuY3VycmVudC52YWx1ZSk7XG5cdHNldFNob3J0QnJlYWsoc2hvcnRCcmVha1JlZi5jdXJyZW50LnZhbHVlKTtcblx0c2V0TG9uZ0JyZWFrKGxvbmdCcmVha1JlZi5jdXJyZW50LnZhbHVlKTtcbn07XG4gIFxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVUYWIgPSB7XG4gICAgICAwOiBwb21vZG9ybyxcbiAgICAgIDE6IHNob3J0QnJlYWssXG4gICAgICAyOiBsb25nQnJlYWssXG4gICAgfTtcbiAgICByZXR1cm4gdGltZVRhYlt0YWJdO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU1pbnV0ZSA9ICgpID0+IHtcblx0Y29uc3QgdXBkYXRlVGFiID0ge1xuXHRcdDA6IHNldFBvbW9kb3JvLFxuXHRcdDE6IHNldFNob3J0QnJlYWssXG5cdFx0Mjogc2V0TG9uZ0JyZWFrLFxuXHQgIH07XG5cdCAgcmV0dXJuIHVwZGF0ZVRhYlt0YWJdO1xuICB9XG5cbmNvbnN0IHRvZ2dsZSA9IChpbmRleCkgPT4ge1xuXHRjb25zdCBpc1NlY29uZCA9IGNoZWNrU2Vjb25kICYmIHRhYiAhPT0gaW5kZXggPyBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIFN3aXRjaCB0YWJzXCIpIDogZmFsc2U7XG5cdGlmKGlzU2Vjb25kKXtcblx0XHRyZXNldCgpO1xuXHRcdHNldFRhYihpbmRleClcblx0fWVsc2UgaWYoIWNoZWNrU2Vjb25kKSB7XG5cdFx0c2V0VGFiKGluZGV4KTtcblx0fVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuXHQgIHNldENoZWNrU2Vjb25kKDApXG5cdCAgc2V0VGltZUNvdW50ZXIoZmFsc2UpO1xuXHQgIHNldFNlY29uZCgwKTtcblx0ICBzZXRQb21vZG9ybyhQT01PRE9STyk7XG5cdCAgc2V0U2hvcnRCcmVhayhTSE9SVEJSRUFLKTtcblx0ICBzZXRMb25nQnJlYWsoTE9OR0JSRUFLKVxuICB9XG5cbiAgY29uc3QgdGltZVVwID0gKCkgPT4ge1xuXHRyZXNldCgpO1xuXHRzZXRJc1RpbWVVcCh0cnVlKTtcblx0YWxhcm1SZWYuY3VycmVudC5wbGF5KCk7XG4gIH1cblxuICBjb25zdCBydW5UaW1lID0gKCkgPT4ge1xuXHQgIGNvbnN0IG1pbnMgPSBnZXRUaW1lKCk7XG5cdCAgY29uc3Qgc2V0TWlucyA9IHVwZGF0ZU1pbnV0ZSgpO1xuXG5cdCAgaWYobWlucyA9PT0gMCAmJiBzZWNvbmQgPT09IDApIHtcblx0XHQgIHRpbWVVcCgpO1xuXHQgIH1lbHNlIGlmKHNlY29uZCA9PT0gMCApe1xuXHRcdCAgc2V0TWlucygobWluKSA9PiBtaW4gLSAxKVxuXHRcdCAgc2V0U2Vjb25kKDU5KTtcblx0ICB9ZWxzZXtcblx0XHQgIHNldFNlY29uZCgoc2Vjb25kKSA9PiBzZWNvbmQgLSAgMSlcblx0ICB9XG4gIH1cblxuICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuXHQgIHNldElzVGltZVVwKGZhbHNlKTtcblx0ICBtdXRlQWxhcm0oKTtcblx0ICBzZXRUaW1lQ291bnRlcigodGltZUNvdW50ZXIpID0+ICF0aW1lQ291bnRlcilcbiAgfVxuXG4gIGNvbnN0IG11dGVBbGFybSA9ICgpID0+IHtcblx0YWxhcm1SZWYuY3VycmVudC5wYXVzZSgpO1xuXHRhbGFybVJlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gMCA7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXHR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGNoZWNrU2Vjb25kID8gXCJTaG93IHdhcm5pbmdcIiA6IG51bGw7XG5cdH1cblxuXHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRpZih0aW1lQ291bnRlcil7XG5cdFx0XHRzZXRDaGVja1NlY29uZCgodmFsdWUpID0+IHZhbHVlICsgMSk7XG5cdFx0XHRydW5UaW1lKCk7XG5cdFx0fVxuXHRcdFxuXHR9LCAxMDAwKTtcblx0aWYgKGlzVGltZVVwKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdH1cblx0cmV0dXJuICgpID0+IHtcblx0XHRjbGVhckludGVydmFsKHRpbWVyKVxuXHR9XG4gIH0sW3NlY29uZCwgcG9tb2Rvcm8sIHNob3J0QnJlYWssIGxvbmdCcmVhaywgdGltZUNvdW50ZXJdKVxuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBtaW5TY3JlZW46IFwibWluLWgtc2NyZWVuXCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLXdoaXRlLTkwMCAke3N0eWxlcy5taW5TY3JlZW59IGZvbnQtaW50ZXIgYH0+XG5cdFx0PGhlYWQ+XG5cdFx0XHQ8dGl0bGU+SnVzdCBGb2N1czwvdGl0bGU+XG5cdFx0XHQ8bGluayByZWY9XCJpY29uXCIgaHJlZj1cIi4uL3B1YmxpYy9mYXZpY29uLmljb1wiLz5cblx0XHQ8L2hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LTF4bCAke3N0eWxlcy5taW5TY3JlZW59IG14LWF1dG9gfT5cblx0XHQ8U3BvdGlmeSBvcGVuU3BvdGlmeT17b3BlblNwb3RpZnl9IC8+XG4gICAgICAgIDxOYXZCYXIgc2V0T3BlblNldHRpbmc9e3NldE9wZW5TZXR0aW5nfSAvPlxuICAgICAgICA8VGltZXIgdGFiPXt0YWJ9IHRvZ2dsZT17dG9nZ2xlfSBnZXRUaW1lPXtnZXRUaW1lfSBzZWNvbmQ9e3NlY29uZH0gdGltZUNvdW50ZXI9e3RpbWVDb3VudGVyfSBzdGFydFRpbWVyPXtzdGFydFRpbWVyfSBtdXRlQWxhcm09e211dGVBbGFybX0gaXNUaW1lVXA9e2lzVGltZVVwfSByZXNldD17cmVzZXR9Lz5cbiAgICAgICAgPE1lZGlhTmF2IHNldE9wZW5TcG90aWZ5PXtzZXRPcGVuU3BvdGlmeX0gLz5cbiAgICAgICAgPEluZm9TZWN0aW9uIC8+XG5cdFx0PEFsYXJtIGFsYXJtUmVmPXthbGFybVJlZn0vPlxuXHRcdDxTZXR0aW5nc01vZGFsIHBvbW9kb3JvUmVmPXtwb21vZG9yb1JlZn0gc2hvcnRCcmVha1JlZj17c2hvcnRCcmVha1JlZn0gbG9uZ0JyZWFrUmVmPXtsb25nQnJlYWtSZWZ9IG9wZW5TZXR0aW5nPXtvcGVuU2V0dGluZ30gc2V0T3BlblNldHRpbmc9e3NldE9wZW5TZXR0aW5nfSB1cGRhdGVUaW1lRGVmYXVsdFZhbHVlPXt1cGRhdGVUaW1lRGVmYXVsdFZhbHVlfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTmF2QmFyIiwiVGltZXIiLCJNZWRpYU5hdiIsIkluZm9TZWN0aW9uIiwiQWxhcm0iLCJTZXR0aW5nc01vZGFsIiwiU3BvdGlmeSIsIkhvbWUiLCJQT01PRE9STyIsIlNIT1JUQlJFQUsiLCJMT05HQlJFQUsiLCJvcGVuU2V0dGluZyIsInNldE9wZW5TZXR0aW5nIiwib3BlblNwb3RpZnkiLCJzZXRPcGVuU3BvdGlmeSIsInRpbWVDb3VudGVyIiwic2V0VGltZUNvdW50ZXIiLCJpc1RpbWVVcCIsInNldElzVGltZVVwIiwicG9tb2Rvcm8iLCJzZXRQb21vZG9ybyIsInNob3J0QnJlYWsiLCJzZXRTaG9ydEJyZWFrIiwibG9uZ0JyZWFrIiwic2V0TG9uZ0JyZWFrIiwic2Vjb25kIiwic2V0U2Vjb25kIiwidGFiIiwic2V0VGFiIiwiY2hlY2tTZWNvbmQiLCJzZXRDaGVja1NlY29uZCIsImFsYXJtUmVmIiwicG9tb2Rvcm9SZWYiLCJzaG9ydEJyZWFrUmVmIiwibG9uZ0JyZWFrUmVmIiwiaWNvbiIsInVwZGF0ZVRpbWVEZWZhdWx0VmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJnZXRUaW1lIiwidGltZVRhYiIsInVwZGF0ZU1pbnV0ZSIsInVwZGF0ZVRhYiIsInRvZ2dsZSIsImluZGV4IiwiaXNTZWNvbmQiLCJjb25maXJtIiwicmVzZXQiLCJ0aW1lVXAiLCJwbGF5IiwicnVuVGltZSIsIm1pbnMiLCJzZXRNaW5zIiwibWluIiwic3RhcnRUaW1lciIsIm11dGVBbGFybSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3R5bGVzIiwibWluU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});