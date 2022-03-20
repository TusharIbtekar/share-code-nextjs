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
exports.id = "pages/api/users/register";
exports.ids = ["pages/api/users/register"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/users/register.js":
/*!*************************************!*\
  !*** ./pages/api/users/register.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/config */ \"(api)/./utils/config.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const projectId = _utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].projectId;\n    const dataset = _utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dataset;\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    const createMutations = [\n        {\n            create: {\n                _type: 'user',\n                name: req.body.name,\n                email: req.body.email,\n                password: bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.password),\n                isAdmin: false\n            }\n        }, \n    ];\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`, {\n        mutations: createMutations\n    }, {\n        headers: {\n            'Content-type': 'application/json',\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    const userId = data.results[0].id;\n    const user = {\n        _id: userId,\n        name: req.body.name,\n        email: req.body.email,\n        isAdmin: false\n    };\n    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.signToken)(user);\n    res.send({\n        ...user,\n        token\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNKO0FBQ2lCO0FBQ0s7QUFFL0MsS0FBSyxDQUFDSyxPQUFPLEdBQUdMLHdEQUFFO0FBRWxCSyxPQUFPLENBQUNDLElBQUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxLQUFLLENBQUNDLFNBQVMsR0FBR04sK0RBQWdCO0lBQ2xDLEtBQUssQ0FBQ08sT0FBTyxHQUFHUCw2REFBYztJQUM5QixLQUFLLENBQUNRLG9CQUFvQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0lBQ3pELEtBQUssQ0FBQ0MsZUFBZSxHQUFHLENBQUM7UUFDdkIsQ0FBQztZQUNDQyxNQUFNLEVBQUUsQ0FBQztnQkFDUEMsS0FBSyxFQUFFLENBQU07Z0JBQ2JDLElBQUksRUFBRVgsR0FBRyxDQUFDWSxJQUFJLENBQUNELElBQUk7Z0JBQ25CRSxLQUFLLEVBQUViLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLO2dCQUNyQkMsUUFBUSxFQUFFcEIsd0RBQWUsQ0FBQ00sR0FBRyxDQUFDWSxJQUFJLENBQUNFLFFBQVE7Z0JBQzNDRSxPQUFPLEVBQUUsS0FBSztZQUNoQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ3RCLGlEQUFVLEVBQzlCLFFBQVEsRUFBRU8sU0FBUyxDQUFDLDhCQUE4QixFQUFFQyxPQUFPLENBQUMsZUFBZSxHQUM1RSxDQUFDO1FBQUNlLFNBQVMsRUFBRVYsZUFBZTtJQUFDLENBQUMsRUFDOUIsQ0FBQztRQUNDVyxPQUFPLEVBQUUsQ0FBQztZQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNsQ0MsYUFBYSxHQUFHLE9BQU8sRUFBRWhCLG9CQUFvQjtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUdILEtBQUssQ0FBQ2lCLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxPQUFPLENBQUMsQ0FBQyxFQUFFQyxFQUFFO0lBQ2pDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFDWkMsR0FBRyxFQUFFSixNQUFNO1FBQ1hWLElBQUksRUFBRVgsR0FBRyxDQUFDWSxJQUFJLENBQUNELElBQUk7UUFDbkJFLEtBQUssRUFBRWIsR0FBRyxDQUFDWSxJQUFJLENBQUNDLEtBQUs7UUFDckJHLE9BQU8sRUFBRSxLQUFLO0lBQ2hCLENBQUM7SUFDRCxLQUFLLENBQUNVLEtBQUssR0FBRzdCLHNEQUFTLENBQUMyQixJQUFJO0lBQzVCdkIsR0FBRyxDQUFDMEIsSUFBSSxDQUFDLENBQUM7V0FBSUgsSUFBSTtRQUFFRSxLQUFLO0lBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsaUVBQWU1QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanM/NTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCB7IHNpZ25Ub2tlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBwcm9qZWN0SWQgPSBjb25maWcucHJvamVjdElkO1xuICBjb25zdCBkYXRhc2V0ID0gY29uZmlnLmRhdGFzZXQ7XG4gIGNvbnN0IHRva2VuV2l0aFdyaXRlQWNjZXNzID0gcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTjtcbiAgY29uc3QgY3JlYXRlTXV0YXRpb25zID0gW1xuICAgIHtcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICBfdHlwZTogJ3VzZXInLFxuICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMocmVxLmJvZHkucGFzc3dvcmQpLFxuICAgICAgICBpc0FkbWluOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIGBodHRwczovLyR7cHJvamVjdElkfS5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvbXV0YXRlLyR7ZGF0YXNldH0/cmV0dXJuSWRzPXRydWVgLFxuICAgIHsgbXV0YXRpb25zOiBjcmVhdGVNdXRhdGlvbnMgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbldpdGhXcml0ZUFjY2Vzc31gLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgdXNlcklkID0gZGF0YS5yZXN1bHRzWzBdLmlkO1xuICBjb25zdCB1c2VyID0ge1xuICAgIF9pZDogdXNlcklkLFxuICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgIGlzQWRtaW46IGZhbHNlLFxuICB9O1xuICBjb25zdCB0b2tlbiA9IHNpZ25Ub2tlbih1c2VyKTtcbiAgcmVzLnNlbmQoeyAuLi51c2VyLCB0b2tlbiB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJuYyIsImJjcnlwdCIsImF4aW9zIiwiY29uZmlnIiwic2lnblRva2VuIiwiaGFuZGxlciIsInBvc3QiLCJyZXEiLCJyZXMiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidG9rZW5XaXRoV3JpdGVBY2Nlc3MiLCJwcm9jZXNzIiwiZW52IiwiU0FOSVRZX0FQSV9UT0tFTiIsImNyZWF0ZU11dGF0aW9ucyIsImNyZWF0ZSIsIl90eXBlIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFzaFN5bmMiLCJpc0FkbWluIiwiZGF0YSIsIm11dGF0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlcklkIiwicmVzdWx0cyIsImlkIiwidXNlciIsIl9pZCIsInRva2VuIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/register.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(user, process.env.JWT_SECRET, {\n        expiresIn: '30d'\n    });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUU5QixLQUFLLENBQUNDLFNBQVMsSUFBSUMsSUFBSSxHQUFLLENBQUM7SUFDM0IsTUFBTSxDQUFDRix3REFBUSxDQUFDRSxJQUFJLEVBQUVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLEVBQUUsQ0FBQztRQUM3Q0MsU0FBUyxFQUFFLENBQUs7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCBzaWduVG9rZW4gPSAodXNlcikgPT4ge1xuICByZXR1cm4gand0LnNpZ24odXNlciwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge1xuICAgIGV4cGlyZXNJbjogJzMwZCcsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc2lnblRva2VuIH07Il0sIm5hbWVzIjpbImp3dCIsInNpZ25Ub2tlbiIsInVzZXIiLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ }),

/***/ "(api)/./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    projectId: 'vlft033y',\n    dataset: 'production'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsTUFBTSxHQUFHLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQVU7SUFDckJDLE9BQU8sRUFBRSxDQUFZO0FBQ3ZCLENBQUM7QUFDRCxpRUFBZUYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uZmlnLmpzPzdkYjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xuICBwcm9qZWN0SWQ6ICd2bGZ0MDMzeScsXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il0sIm5hbWVzIjpbImNvbmZpZyIsInByb2plY3RJZCIsImRhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/config.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/register.js"));
module.exports = __webpack_exports__;

})();