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

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/OKYD/Desktop/Just_Focus/components/NavBar/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar NavBar = function NavBar(_ref) {\n  var setOpenSetting = _ref.setOpenSetting;\n  var style = {\n    textColor: 'text-black'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n    className: \"pt-5 pb-40 \".concat(style.textColor, \" flex justify-between w-9/12 mx-auto\"),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_2__.CgProfile, {\n      className: \"text-3xl cursor-pointer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex items-center gap-1 cursor-pointer\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiCommand, {\n        className: \"text-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Just Focus\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiSettings, {\n      className: \"text-3xl cursor-pointer\",\n      onClick: function onClick() {\n        return setOpenSetting(true);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUVoQjtBQUFBLE1BREZDLGNBQ0UsUUFERkEsY0FDRTtBQUNGLE1BQU1DLEtBQUssR0FBRztBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFERCxHQUFkO0FBSUEsc0JBQ0E7QUFBSyxhQUFTLHVCQUFnQkQsS0FBSyxDQUFDQyxTQUF0Qix5Q0FBZDtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLHdDQUFmO0FBQUEsOEJBQ0ksOERBQUMscURBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFPSSw4REFBQyxzREFBRDtBQUFZLGVBQVMsRUFBQyx5QkFBdEI7QUFBZ0QsYUFBTyxFQUFFO0FBQUEsZUFBTUYsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFXSCxDQWxCTTtLQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qcz81Y2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZpQ29tbWFuZCwgRmlTZXR0aW5nc30gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHtDZ1Byb2ZpbGV9IGZyb20gJ3JlYWN0LWljb25zL2NnJztcblxuZXhwb3J0IGNvbnN0IE5hdkJhciA9ICh7XG4gICAgc2V0T3BlblNldHRpbmdcbn0pID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgdGV4dENvbG9yOiAndGV4dC1ibGFjaydcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgPG5hdiBjbGFzc05hbWU9e2BwdC01IHBiLTQwICR7c3R5bGUudGV4dENvbG9yfSBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LTkvMTIgbXgtYXV0b2B9PlxuICAgICAgICA8Q2dQcm9maWxlIGNsYXNzTmFtZT0ndGV4dC0zeGwgY3Vyc29yLXBvaW50ZXInLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgIDxGaUNvbW1hbmQgY2xhc3NOYW1lPSd0ZXh0LXNtJyAvPlxuICAgICAgICAgICAgPGgxPkp1c3QgRm9jdXM8L2gxPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmlTZXR0aW5ncyBjbGFzc05hbWU9J3RleHQtM3hsIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2V0dGluZyh0cnVlKX0vPlxuICAgIDwvbmF2PlxuICAgICk7XG59ICAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpQ29tbWFuZCIsIkZpU2V0dGluZ3MiLCJDZ1Byb2ZpbGUiLCJOYXZCYXIiLCJzZXRPcGVuU2V0dGluZyIsInN0eWxlIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar/index.js\n");

/***/ })

});