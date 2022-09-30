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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "(api)/./pages/api/users/index.ts":
/*!**********************************!*\
  !*** ./pages/api/users/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/sample-data */ \"(api)/./utils/sample-data.ts\");\n\nconst handler = (_req, res)=>{\n    try {\n        if (!Array.isArray(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__.sampleUserData)) {\n            throw new Error(\"Cannot find user data\");\n        }\n        res.status(200).json(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__.sampleUserData);\n    } catch (err) {\n        res.status(500).json({\n            statusCode: 500,\n            message: err.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMkQ7QUFFM0QsTUFBTUMsT0FBTyxHQUFHLENBQUNDLElBQW9CLEVBQUVDLEdBQW9CLEdBQUs7SUFDOUQsSUFBSTtRQUNGLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUNMLDhEQUFjLENBQUMsRUFBRTtZQUNsQyxNQUFNLElBQUlNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUMxQyxDQUFDO1FBRURILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNSLDhEQUFjLENBQUM7SUFDdEMsRUFBRSxPQUFPUyxHQUFHLEVBQU87UUFDakJOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsVUFBVSxFQUFFLEdBQUc7WUFBRUMsT0FBTyxFQUFFRixHQUFHLENBQUNFLE9BQU87U0FBRSxDQUFDO0lBQ2pFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVWLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXgudHM/ZThhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHNhbXBsZVVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2FtcGxlLWRhdGEnXG5cbmNvbnN0IGhhbmRsZXIgPSAoX3JlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNhbXBsZVVzZXJEYXRhKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCB1c2VyIGRhdGEnKVxuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZVVzZXJEYXRhKVxuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJuYW1lcyI6WyJzYW1wbGVVc2VyRGF0YSIsImhhbmRsZXIiLCJfcmVxIiwicmVzIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.ts\n");

/***/ }),

/***/ "(api)/./utils/sample-data.ts":
/*!******************************!*\
  !*** ./utils/sample-data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sampleUserData\": () => (/* binding */ sampleUserData)\n/* harmony export */ });\n/** Dummy user data. */ const sampleUserData = [\n    {\n        id: 101,\n        name: \"Alice\"\n    },\n    {\n        id: 102,\n        name: \"Bob\"\n    },\n    {\n        id: 103,\n        name: \"Caroline\"\n    },\n    {\n        id: 104,\n        name: \"Dave\"\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9zYW1wbGUtZGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEscUJBQXFCLEdBQ2QsTUFBTUEsY0FBYyxHQUFXO0lBQ3BDO1FBQUVDLEVBQUUsRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxPQUFPO0tBQUU7SUFDMUI7UUFBRUQsRUFBRSxFQUFFLEdBQUc7UUFBRUMsSUFBSSxFQUFFLEtBQUs7S0FBRTtJQUN4QjtRQUFFRCxFQUFFLEVBQUUsR0FBRztRQUFFQyxJQUFJLEVBQUUsVUFBVTtLQUFFO0lBQzdCO1FBQUVELEVBQUUsRUFBRSxHQUFHO1FBQUVDLElBQUksRUFBRSxNQUFNO0tBQUU7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9zYW1wbGUtZGF0YS50cz9kMGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuXG4vKiogRHVtbXkgdXNlciBkYXRhLiAqL1xuZXhwb3J0IGNvbnN0IHNhbXBsZVVzZXJEYXRhOiBVc2VyW10gPSBbXG4gIHsgaWQ6IDEwMSwgbmFtZTogJ0FsaWNlJyB9LFxuICB7IGlkOiAxMDIsIG5hbWU6ICdCb2InIH0sXG4gIHsgaWQ6IDEwMywgbmFtZTogJ0Nhcm9saW5lJyB9LFxuICB7IGlkOiAxMDQsIG5hbWU6ICdEYXZlJyB9LFxuXVxuIl0sIm5hbWVzIjpbInNhbXBsZVVzZXJEYXRhIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/sample-data.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.ts"));
module.exports = __webpack_exports__;

})();