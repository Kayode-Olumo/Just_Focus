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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/components/Timer/index.js\";\n// import React from 'react';\n// import {FiBellOff, FiBell} from 'react-icons/fi';\n// export const Timer = ({tab, toggle, getTime, second, timeCounter, startTimer, muteAlarm, isTimeUp}) => {\n//     const options = [\"Pomodoro\",\"Short Break\",\"Long Break\"];\n//     return (\n//         <div className='w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center'>\n//             <div className='flex gap-5 items-center'>\n//                 {options.map((option, index) =>{\n//                     return <h1 key={index} onClick={() => toggle(index)} className={`${index === tab && \"bg-gray-500 bg-opacity-30\"} p-1 cursor-pointer transition-all rounded`}>{option}</h1>\n//                 })}\n//             </div>\n//             <div className='mt-10 mb-10'>\n//                 <h1 className='text-8xl font-bold select-none m-0'>{getTime()}:{second.toLocaleString('en-GB', { minimumIntegerDigits: 2, useGrouping: false })}</h1>\n//             </div>\n//             <div className=\"flex items-center gap-2\">\n//             <button className='px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold' onClick={startTimer}>\n//                 {timeCounter ? 'Stop' : 'Start'}\n//             </button>\n//             {isTimeUp && (\n//                <FiBellOff \n//                 className='text-3xl text-white cursor-pointer'\n//                 onClick={muteAlarm}\n//                /> \n//             )}\n//             </div>\n//         </div>\n//     )\n// }\n// ======================================\n\n\n\nfunction Timer(_ref) {\n  var _this = this;\n\n  var tab = _ref.tab,\n      getTime = _ref.getTime,\n      startTimer = _ref.startTimer,\n      timeCounter = _ref.timeCounter,\n      second = _ref.second,\n      isTimeUp = _ref.isTimeUp,\n      muteAlarm = _ref.muteAlarm,\n      reset = _ref.reset;\n  var options = [\"Pomodoro\", \"Short Break\", \"Long Break\"];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex justify-center items-center flex-col w-11/12 sm:w-10/12 mx-auto pt-5 pb-5 rounded\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex gap-5 text-white items-center\",\n      children: options.map(function (option, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"\".concat(index === tab ? \"bg-gray-500 bg-opacity-30\" : \"\", \" p-1 rounded cursor-pointer transition-all\"),\n          onClick: function onClick() {\n            return toggle(index);\n          },\n          children: option\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"mt-10 mb-10\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"text-8xl font-bold text-white select-none m-0\",\n        children: [getTime(), \":\", second.toString().padStart(2, \"0\")]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex items-center gap-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        className: \" px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold\",\n        onClick: startTimer,\n        children: timeCounter ? \"Stop\" : \"Start\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, this), isTimeUp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiBellOff, {\n        className: \"text-3xl text-white cursor-pointer\",\n        onClick: muteAlarm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 4\n    }, this), isTimeUp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      className: \"uppercase text-white underline mt-5\",\n      onClick: reset,\n      children: \"Reset\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 3\n  }, this);\n}\n_c = Timer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpbWVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0UsS0FBVCxPQVNaO0FBQUE7O0FBQUEsTUFSRkMsR0FRRSxRQVJGQSxHQVFFO0FBQUEsTUFQRkMsT0FPRSxRQVBGQSxPQU9FO0FBQUEsTUFORkMsVUFNRSxRQU5GQSxVQU1FO0FBQUEsTUFMRkMsV0FLRSxRQUxGQSxXQUtFO0FBQUEsTUFKRkMsTUFJRSxRQUpGQSxNQUlFO0FBQUEsTUFIRkMsUUFHRSxRQUhGQSxRQUdFO0FBQUEsTUFGRkMsU0FFRSxRQUZGQSxTQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFO0FBQ0YsTUFBTUMsT0FBTyxHQUFHLENBQUMsVUFBRCxFQUFhLGFBQWIsRUFBNEIsWUFBNUIsQ0FBaEI7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyx3RkFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLG9DQUFmO0FBQUEsZ0JBQ0VBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQiw0QkFDQztBQUVDLG1CQUFTLFlBQ1JBLEtBQUssS0FBS1gsR0FBVixHQUFnQiwyQkFBaEIsR0FBOEMsRUFEdEMsK0NBRlY7QUFLQyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ZLE1BQU0sQ0FBQ0QsS0FBRCxDQUFaO0FBQUEsV0FMVjtBQUFBLG9CQU9FRDtBQVBGLFdBQ01DLEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQVdBLE9BWkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFpQkM7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDZCQUNDO0FBQUksaUJBQVMsRUFBQywrQ0FBZDtBQUFBLG1CQUNFVixPQUFPLEVBRFQsT0FDY0csTUFBTSxDQUFDUyxRQUFQLEdBQWtCQyxRQUFsQixDQUEyQixDQUEzQixFQUE4QixHQUE5QixDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkQsZUFzQkM7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQUMsNEVBRFg7QUFFQyxlQUFPLEVBQUVaLFVBRlY7QUFBQSxrQkFJRUMsV0FBVyxHQUFHLE1BQUgsR0FBWTtBQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFPRUUsUUFBUSxpQkFDUiw4REFBQyxxREFBRDtBQUNDLGlCQUFTLEVBQUMsb0NBRFg7QUFFQyxlQUFPLEVBQUVDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRCxFQW9DRUQsUUFBUSxpQkFDUjtBQUFRLGVBQVMsRUFBQyxxQ0FBbEI7QUFBd0QsYUFBTyxFQUFFRSxLQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTRDQTtLQXhEdUJSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGltZXIvaW5kZXguanM/ZjM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtGaUJlbGxPZmYsIEZpQmVsbH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuXG4vLyBleHBvcnQgY29uc3QgVGltZXIgPSAoe3RhYiwgdG9nZ2xlLCBnZXRUaW1lLCBzZWNvbmQsIHRpbWVDb3VudGVyLCBzdGFydFRpbWVyLCBtdXRlQWxhcm0sIGlzVGltZVVwfSkgPT4ge1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSBbXCJQb21vZG9yb1wiLFwiU2hvcnQgQnJlYWtcIixcIkxvbmcgQnJlYWtcIl07XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMC8xMiBteC1hdXRvIHB0LTUgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNSBpdGVtcy1jZW50ZXInPlxuLy8gICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT57XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gdG9nZ2xlKGluZGV4KX0gY2xhc3NOYW1lPXtgJHtpbmRleCA9PT0gdGFiICYmIFwiYmctZ3JheS01MDAgYmctb3BhY2l0eS0zMFwifSBwLTEgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgcm91bmRlZGB9PntvcHRpb259PC9oMT5cbi8vICAgICAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEwIG1iLTEwJz5cbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTh4bCBmb250LWJvbGQgc2VsZWN0LW5vbmUgbS0wJz57Z2V0VGltZSgpfTp7c2Vjb25kLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgbWluaW11bUludGVnZXJEaWdpdHM6IDIsIHVzZUdyb3VwaW5nOiBmYWxzZSB9KX08L2gxPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHgtMTYgcHktMiB0ZXh0LTJ4bCByb3VuZGVkLW1kIGJnLXdoaXRlIHRleHQtYmx1ZS01MDAgdXBwZXJjYXNlIGZvbnQtYm9sZCcgb25DbGljaz17c3RhcnRUaW1lcn0+XG4vLyAgICAgICAgICAgICAgICAge3RpbWVDb3VudGVyID8gJ1N0b3AnIDogJ1N0YXJ0J31cbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAge2lzVGltZVVwICYmIChcbi8vICAgICAgICAgICAgICAgIDxGaUJlbGxPZmYgXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LTN4bCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyJ1xuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e211dGVBbGFybX1cbi8vICAgICAgICAgICAgICAgIC8+IFxuLy8gICAgICAgICAgICAgKX1cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUJlbGxPZmYgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXIoe1xuXHR0YWIsXG5cdGdldFRpbWUsXG5cdHN0YXJ0VGltZXIsXG5cdHRpbWVDb3VudGVyLFxuXHRzZWNvbmQsXG5cdGlzVGltZVVwLFxuXHRtdXRlQWxhcm0sXG5cdHJlc2V0LFxufSkge1xuXHRjb25zdCBvcHRpb25zID0gW1wiUG9tb2Rvcm9cIiwgXCJTaG9ydCBCcmVha1wiLCBcIkxvbmcgQnJlYWtcIl07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHctMTEvMTIgc206dy0xMC8xMiBteC1hdXRvIHB0LTUgcGItNSByb3VuZGVkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTUgdGV4dC13aGl0ZSBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0e29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxoMVxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake1xuXHRcdFx0XHRcdFx0XHRcdGluZGV4ID09PSB0YWIgPyBcImJnLWdyYXktNTAwIGJnLW9wYWNpdHktMzBcIiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0fSBwLTEgcm91bmRlZCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbGB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRvZ2dsZShpbmRleCl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtvcHRpb259XG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgbWItMTBcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtOHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHNlbGVjdC1ub25lIG0tMFwiPlxuXHRcdFx0XHRcdHtnZXRUaW1lKCl9OntzZWNvbmQudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9XG5cdFx0XHRcdDwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIiBweC0xNiBweS0yIHRleHQtMnhsIHJvdW5kZWQtbWQgYmctd2hpdGUgdGV4dC1ibHVlLTUwMCB1cHBlcmNhc2UgZm9udC1ib2xkXCJcblx0XHRcdFx0XHRvbkNsaWNrPXtzdGFydFRpbWVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3RpbWVDb3VudGVyID8gXCJTdG9wXCIgOiBcIlN0YXJ0XCJ9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHR7aXNUaW1lVXAgJiYgKFxuXHRcdFx0XHRcdDxGaUJlbGxPZmZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17bXV0ZUFsYXJtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtpc1RpbWVVcCAmJiAoXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtd2hpdGUgdW5kZXJsaW5lIG10LTVcIiBvbkNsaWNrPXtyZXNldH0+XG5cdFx0XHRcdFx0UmVzZXRcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpQmVsbE9mZiIsIlRpbWVyIiwidGFiIiwiZ2V0VGltZSIsInN0YXJ0VGltZXIiLCJ0aW1lQ291bnRlciIsInNlY29uZCIsImlzVGltZVVwIiwibXV0ZUFsYXJtIiwicmVzZXQiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJ0b2dnbGUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Timer/index.js\n");

/***/ })

});