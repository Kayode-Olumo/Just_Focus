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

/***/ "./components/InfoSection/index.js":
/*!*****************************************!*\
  !*** ./components/InfoSection/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/components/InfoSection/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction InfoSection() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      openBio = _useState2[0],\n      setOpenBio = _useState2[1];\n\n  var HandleClick = function HandleClick() {\n    if (!open) {\n      setOpen(true);\n    } else {\n      setOpen(false);\n    }\n  };\n\n  var HandleClickBio = function HandleClickBio() {\n    if (!openBio) {\n      setOpenBio(true);\n    } else {\n      setOpenBio(false);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"w-9/12 mx-auto mt-36 text-black p-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-1 cursor-pointer\",\n        onClick: HandleClick,\n        children: [open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronCircleDown, {\n          className: \"text-md\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 30\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronCircleUp, {\n          className: \"text-md\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 77\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-xl sm:text-2xl font-meduim\",\n          children: [\"What is the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"border-b-4 border-red-400\",\n            children: \"Pomodoro\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 81\n          }, this), \" Method? \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), open && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"mt-5 tracking-wide opacity-70 text-lg\",\n        children: \"The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"pt-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-1 cursor-pointer\",\n        onClick: HandleClickBio,\n        children: [openBio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronCircleDown, {\n          className: \"text-md\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 33\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronCircleUp, {\n          className: \"text-md\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 80\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n          className: \"text-xl sm:text-2xl font-meduim\",\n          children: [\"What is the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            className: \"border-b-4 border-red-400\",\n            children: \"Just Focus\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 81\n          }, this), \"?\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), openBio && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"mt-5 tracking-wide opacity-70 text-lg\",\n        children: \"Wafer pie lemon drops cookie cheesecake gummies muffin cheesecake. Sweet apple pie danish chupa chups cupcake jujubes. Chocolate bar oat cake bear claw jelly beans sesame snaps.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(InfoSection, \"Rq90eXkQEcCPsyPGUOsjQvixX7g=\");\n\n_c = InfoSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(InfoSection));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"InfoSection\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9TZWN0aW9uL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxTQUFTSSxXQUFULEdBQXNCO0FBQUE7O0FBQ2xCLGtCQUF3QkgsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT0ksSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPTSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUdBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBRyxDQUFDSixJQUFKLEVBQVM7QUFDTEMsTUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILEtBRkQsTUFFSztBQUNEQSxNQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0g7QUFDSixHQU5EOztBQU9BLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFHLENBQUNILE9BQUosRUFBWTtBQUNSQyxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsS0FGRCxNQUVLO0FBQ0RBLE1BQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDSDtBQUNKLEdBTkQ7O0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUF3RCxlQUFPLEVBQUVDLFdBQWpFO0FBQUEsbUJBQ0tKLElBQUksZ0JBQUksOERBQUMsK0RBQUQ7QUFBcUIsbUJBQVMsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKLGdCQUFtRCw4REFBQyw2REFBRDtBQUFtQixtQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRDVELGVBRUk7QUFBSSxtQkFBUyxFQUFDLGlDQUFkO0FBQUEsa0RBQTREO0FBQU0scUJBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUtLQSxJQUFJLGlCQUNEO0FBQUcsaUJBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBYUk7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUF3RCxlQUFPLEVBQUVLLGNBQWpFO0FBQUEsbUJBQ0tILE9BQU8sZ0JBQUksOERBQUMsK0RBQUQ7QUFBcUIsbUJBQVMsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKLGdCQUFtRCw4REFBQyw2REFBRDtBQUFtQixtQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRC9ELGVBRUk7QUFBSSxtQkFBUyxFQUFDLGlDQUFkO0FBQUEsa0RBQTREO0FBQU0scUJBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUtLQSxPQUFPLGlCQUNKO0FBQUcsaUJBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztHQTlDUUg7O0tBQUFBO0FBZ0RULCtEQUFlLG1CQUFBSixpREFBQSxDQUFXSSxXQUFYLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvU2VjdGlvbi9pbmRleC5qcz8xOGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZhQ2hldnJvbkNpcmNsZURvd24sIEZhQ2hldnJvbkNpcmNsZVVwfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmZ1bmN0aW9uIEluZm9TZWN0aW9uKCl7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuQmlvLCBzZXRPcGVuQmlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgY29uc3QgSGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFvcGVuKXtcbiAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgSGFuZGxlQ2xpY2tCaW8gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFvcGVuQmlvKXtcbiAgICAgICAgICAgIHNldE9wZW5CaW8odHJ1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0T3BlbkJpbyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctOS8xMiBteC1hdXRvIG10LTM2IHRleHQtYmxhY2sgcC01Jz4gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBjdXJzb3ItcG9pbnRlcicgb25DbGljaz17SGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICB7b3BlbiA/ICg8RmFDaGV2cm9uQ2lyY2xlRG93biBjbGFzc05hbWU9J3RleHQtbWQnLz4pIDogKDxGYUNoZXZyb25DaXJjbGVVcCBjbGFzc05hbWU9J3RleHQtbWQnLz4pfVxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIHNtOnRleHQtMnhsIGZvbnQtbWVkdWltJz5XaGF0IGlzIHRoZSA8c3BhbiBjbGFzc05hbWU9J2JvcmRlci1iLTQgYm9yZGVyLXJlZC00MDAnPlBvbW9kb3JvPC9zcGFuPiBNZXRob2Q/IDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge29wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J210LTUgdHJhY2tpbmctd2lkZSBvcGFjaXR5LTcwIHRleHQtbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFBvbW9kb3JvIFRlY2huaXF1ZSB3YXMgZGV2ZWxvcGVkIGluIHRoZSBsYXRlIDE5ODBzIGJ5IHRoZW4gdW5pdmVyc2l0eSBzdHVkZW50IEZyYW5jZXNjbyBDaXJpbGxvLiBDaXJpbGxvIHdhcyBzdHJ1Z2dsaW5nIHRvIGZvY3VzIG9uIGhpcyBzdHVkaWVzIGFuZCBjb21wbGV0ZSBhc3NpZ25tZW50cy4gRmVlbGluZyBvdmVyd2hlbG1lZCwgaGUgYXNrZWQgaGltc2VsZiB0byBjb21taXQgdG8ganVzdCAxMCBtaW51dGVzIG9mIGZvY3VzZWQgc3R1ZHkgdGltZS4gRW5jb3VyYWdlZCBieSB0aGUgY2hhbGxlbmdlLCBoZSBmb3VuZCBhIHRvbWF0byAocG9tb2Rvcm8gaW4gSXRhbGlhbikgc2hhcGVkIGtpdGNoZW4gdGltZXIsIGFuZCB0aGUgUG9tb2Rvcm8gdGVjaG5pcXVlIHdhcyBib3JuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTEwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e0hhbmRsZUNsaWNrQmlvfT5cbiAgICAgICAgICAgICAgICAgICAge29wZW5CaW8gPyAoPEZhQ2hldnJvbkNpcmNsZURvd24gY2xhc3NOYW1lPSd0ZXh0LW1kJy8+KSA6ICg8RmFDaGV2cm9uQ2lyY2xlVXAgY2xhc3NOYW1lPSd0ZXh0LW1kJy8+KX1cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCBzbTp0ZXh0LTJ4bCBmb250LW1lZHVpbSc+V2hhdCBpcyB0aGUgPHNwYW4gY2xhc3NOYW1lPSdib3JkZXItYi00IGJvcmRlci1yZWQtNDAwJz5KdXN0IEZvY3VzPC9zcGFuPj88L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtvcGVuQmlvICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC01IHRyYWNraW5nLXdpZGUgb3BhY2l0eS03MCB0ZXh0LWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdhZmVyIHBpZSBsZW1vbiBkcm9wcyBjb29raWUgY2hlZXNlY2FrZSBndW1taWVzIG11ZmZpbiBjaGVlc2VjYWtlLiBTd2VldCBhcHBsZSBwaWUgZGFuaXNoIGNodXBhIGNodXBzIGN1cGNha2UganVqdWJlcy4gQ2hvY29sYXRlIGJhciBvYXQgY2FrZSBiZWFyIGNsYXcgamVsbHkgYmVhbnMgc2VzYW1lIHNuYXBzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSW5mb1NlY3Rpb24pOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFDaGV2cm9uQ2lyY2xlRG93biIsIkZhQ2hldnJvbkNpcmNsZVVwIiwiSW5mb1NlY3Rpb24iLCJvcGVuIiwic2V0T3BlbiIsIm9wZW5CaW8iLCJzZXRPcGVuQmlvIiwiSGFuZGxlQ2xpY2siLCJIYW5kbGVDbGlja0JpbyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InfoSection/index.js\n");

/***/ })

});