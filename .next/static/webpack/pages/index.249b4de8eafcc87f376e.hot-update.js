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

/***/ "./components/Timer/index.js":
/*!***********************************!*\
  !*** ./components/Timer/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/components/Timer/index.js\",\n    _this = undefined;\n\n\n\n\nvar Timer = function Timer(_ref) {\n  var tab = _ref.tab,\n      toggle = _ref.toggle,\n      getTime = _ref.getTime,\n      second = _ref.second,\n      timeCounter = _ref.timeCounter,\n      setTimeCounter = _ref.setTimeCounter,\n      muteAlarm = _ref.muteAlarm;\n  var options = [\"Pomodoro\", \"Short Break\", \"Long Break\"];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex gap-5 items-center\",\n      children: options.map(function (option, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          onClick: function onClick() {\n            return toggle(index);\n          },\n          className: \"\".concat(index === tab && \"bg-gray-500 bg-opacity-30\", \" p-1 cursor-pointer transition-all rounded\"),\n          children: option\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 28\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mt-10 mb-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"text-8xl font-bold select-none m-0\",\n        children: [getTime(), \":\", second.toLocaleString('en-GB', {\n          minimumIntegerDigits: 2,\n          useGrouping: false\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      className: \"px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold\",\n      onClick: function onClick() {\n        return setTimeCounter(function (timeCounter) {\n          return !timeCounter;\n        });\n      },\n      children: timeCounter ? 'Stop' : 'Start'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, _this);\n};\n_c = Timer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEU7QUFBQSxNQUExRUMsR0FBMEUsUUFBMUVBLEdBQTBFO0FBQUEsTUFBckVDLE1BQXFFLFFBQXJFQSxNQUFxRTtBQUFBLE1BQTdEQyxPQUE2RCxRQUE3REEsT0FBNkQ7QUFBQSxNQUFwREMsTUFBb0QsUUFBcERBLE1BQW9EO0FBQUEsTUFBNUNDLFdBQTRDLFFBQTVDQSxXQUE0QztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDN0YsTUFBTUMsT0FBTyxHQUFHLENBQUMsVUFBRCxFQUFZLGFBQVosRUFBMEIsWUFBMUIsQ0FBaEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywyRUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsZ0JBQ0tBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFrQjtBQUMzQiw0QkFBTztBQUFnQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1ULE1BQU0sQ0FBQ1MsS0FBRCxDQUFaO0FBQUEsV0FBekI7QUFBOEMsbUJBQVMsWUFBS0EsS0FBSyxLQUFLVixHQUFWLElBQWlCLDJCQUF0QiwrQ0FBdkQ7QUFBQSxvQkFBdUpTO0FBQXZKLFdBQVNDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BRkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLG9DQUFkO0FBQUEsbUJBQW9EUixPQUFPLEVBQTNELE9BQWdFQyxNQUFNLENBQUNRLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBRUMsVUFBQUEsb0JBQW9CLEVBQUUsQ0FBeEI7QUFBMkJDLFVBQUFBLFdBQVcsRUFBRTtBQUF4QyxTQUEvQixDQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFTSTtBQUFRLGVBQVMsRUFBQywyRUFBbEI7QUFBOEYsYUFBTyxFQUFFO0FBQUEsZUFBTVIsY0FBYyxDQUFDLFVBQUNELFdBQUQ7QUFBQSxpQkFBaUIsQ0FBQ0EsV0FBbEI7QUFBQSxTQUFELENBQXBCO0FBQUEsT0FBdkc7QUFBQSxnQkFDS0EsV0FBVyxHQUFHLE1BQUgsR0FBWTtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQWxCTTtLQUFNTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RpbWVyL2luZGV4LmpzP2YzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RmlCZWxsT2ZmLCBGaUJlbGx9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgVGltZXIgPSAoe3RhYiwgdG9nZ2xlLCBnZXRUaW1lLCBzZWNvbmQsIHRpbWVDb3VudGVyLCBzZXRUaW1lQ291bnRlciwgbXV0ZUFsYXJtfSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXCJQb21vZG9yb1wiLFwiU2hvcnQgQnJlYWtcIixcIkxvbmcgQnJlYWtcIl07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMC8xMiBteC1hdXRvIHB0LTUgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNSBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gdG9nZ2xlKGluZGV4KX0gY2xhc3NOYW1lPXtgJHtpbmRleCA9PT0gdGFiICYmIFwiYmctZ3JheS01MDAgYmctb3BhY2l0eS0zMFwifSBwLTEgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgcm91bmRlZGB9PntvcHRpb259PC9oMT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEwIG1iLTEwJz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTh4bCBmb250LWJvbGQgc2VsZWN0LW5vbmUgbS0wJz57Z2V0VGltZSgpfTp7c2Vjb25kLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgbWluaW11bUludGVnZXJEaWdpdHM6IDIsIHVzZUdyb3VwaW5nOiBmYWxzZSB9KX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHgtMTYgcHktMiB0ZXh0LTJ4bCByb3VuZGVkLW1kIGJnLXdoaXRlIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCcgb25DbGljaz17KCkgPT4gc2V0VGltZUNvdW50ZXIoKHRpbWVDb3VudGVyKSA9PiAhdGltZUNvdW50ZXIpfT5cbiAgICAgICAgICAgICAgICB7dGltZUNvdW50ZXIgPyAnU3RvcCcgOiAnU3RhcnQnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJGaUJlbGxPZmYiLCJGaUJlbGwiLCJUaW1lciIsInRhYiIsInRvZ2dsZSIsImdldFRpbWUiLCJzZWNvbmQiLCJ0aW1lQ291bnRlciIsInNldFRpbWVDb3VudGVyIiwibXV0ZUFsYXJtIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtSW50ZWdlckRpZ2l0cyIsInVzZUdyb3VwaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Timer/index.js\n");

/***/ })

});