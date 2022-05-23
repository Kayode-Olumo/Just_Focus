"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction login({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png\",\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"/Users/OKYD/Desktop/Just_Focus/pages/login.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/OKYD/Desktop/Just_Focus/pages/login.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"/Users/OKYD/Desktop/Just_Focus/pages/login.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/OKYD/Desktop/Just_Focus/pages/login.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzZCO0FBRXZELFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUM1QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsK0RBQStEOzswQkFDMUUsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxXQUFXO2dCQUFDRSxHQUFHLEVBQUMsb0ZBQW9GO2dCQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7b0JBQUU7WUFDL0hDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxTQUFTLENBQUMsQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLFFBQVEsaUJBQ25DLDhEQUFDUixLQUFHOzhCQUNBLDRFQUFDUyxRQUFNO3dCQUFDUixTQUFTLEVBQUMsMENBQTBDO3dCQUFDUyxPQUFPLEVBQUUsSUFBTWIsdURBQU0sQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUU7Z0NBQUNDLFdBQVcsRUFBRSxHQUFHOzZCQUFDLENBQUM7d0JBQUE7OzRCQUFFLGFBQVc7NEJBQUNKLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7OzRCQUFVO21CQURsSkwsUUFBUSxDQUFDSyxJQUFJOzs7O3dCQUVqQjtZQUNULENBQUM7Ozs7OztZQUNBLENBQ1A7Q0FDRjtBQUVELGlFQUFlZixLQUFLLEVBQUM7QUFFZCxlQUFlZ0Isa0JBQWtCLEdBQUc7SUFDdkMsTUFBTWYsU0FBUyxHQUFHLE1BQU1ILDZEQUFZLEVBQUU7SUFFdEMsT0FBTztRQUNIbUIsS0FBSyxFQUFFO1lBQ0hoQixTQUFTO1NBQ1o7S0FDSixDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZnVuY3Rpb24gbG9naW4oeyBwcm92aWRlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy01MiBtYi01JyBzcmM9XCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vcHItbmV3c3Jvb20td3AvMS8yMDE4LzExL1Nwb3RpZnlfTG9nb19SR0JfR3JlZW4ucG5nXCIgYWx0PVwibG9nb1wiLz5cbiAgICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzE4RDg2MF0gdGV4dC13aGl0ZSBwLTUgcm91bmRlZC1mdWxsXCIgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7Y2FsbGJhY2tVcmw6IFwiL1wifSl9PkxvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICB9LFxuICAgIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwibG9naW4iLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();