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
exports.id = "pages/api/users/login";
exports.ids = ["pages/api/users/login"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

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

/***/ "(api)/./pages/api/users/login.js":
/*!**********************************!*\
  !*** ./pages/api/users/login.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/client */ \"(api)/./utils/client.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const user = await _utils_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`*[_type == \"user\" && email == $email][0]`, {\n        email: req.body.email\n    });\n    if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(req.body.password, user.password)) {\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.signToken)({\n            _id: user._id,\n            name: user.name,\n            email: user.email,\n            isAdmin: user.isAdmin\n        });\n        res.send({\n            _id: user._id,\n            name: user.name,\n            email: user.email,\n            isAdmin: user.isAdmin,\n            token\n        });\n    } else {\n        res.status(401).send({\n            message: 'Invalid email or password'\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0E7QUFDYTtBQUNLO0FBRS9DLEtBQUssQ0FBQ0ksT0FBTyxHQUFHSix3REFBRTtBQUVsQkksT0FBTyxDQUFDQyxJQUFJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDTiwyREFBWSxFQUFFLHdDQUF3QyxHQUFHLENBQUM7UUFBQ1EsS0FBSyxFQUFFSixHQUFHLENBQUNLLElBQUksQ0FBQ0QsS0FBSztJQUFFLENBQUM7SUFDdEcsRUFBRSxFQUFFRixJQUFJLElBQUlQLDJEQUFrQixDQUFDSyxHQUFHLENBQUNLLElBQUksQ0FBQ0UsUUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBQVEsR0FBRyxDQUFDO1FBQ2pFLEtBQUssQ0FBQ0MsS0FBSyxHQUFHWCxzREFBUyxDQUFDLENBQUM7WUFDdkJZLEdBQUcsRUFBRVAsSUFBSSxDQUFDTyxHQUFHO1lBQ2JDLElBQUksRUFBRVIsSUFBSSxDQUFDUSxJQUFJO1lBQ2ZOLEtBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUFLO1lBQ2pCTyxPQUFPLEVBQUVULElBQUksQ0FBQ1MsT0FBTztRQUN2QixDQUFDO1FBQ0RWLEdBQUcsQ0FBQ1csSUFBSSxDQUFDLENBQUM7WUFDUkgsR0FBRyxFQUFFUCxJQUFJLENBQUNPLEdBQUc7WUFDYkMsSUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUk7WUFDZk4sS0FBSyxFQUFFRixJQUFJLENBQUNFLEtBQUs7WUFDakJPLE9BQU8sRUFBRVQsSUFBSSxDQUFDUyxPQUFPO1lBQ3JCSCxLQUFLO1FBQ1AsQ0FBQztJQUNILENBQUMsTUFBTSxDQUFDO1FBQ05QLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsRUFBRUQsSUFBSSxDQUFDLENBQUM7WUFBQ0UsT0FBTyxFQUFFLENBQTJCO1FBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlaEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL2xvZ2luLmpzPzAzODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2xpZW50JztcbmltcG9ydCB7IHNpZ25Ub2tlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwidXNlclwiICYmIGVtYWlsID09ICRlbWFpbF1bMF1gLCB7IGVtYWlsOiByZXEuYm9keS5lbWFpbCwgfSlcbiAgaWYgKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHJlcS5ib2R5LnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHtcbiAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcbiAgICB9KTtcbiAgICByZXMuc2VuZCh7XG4gICAgICBfaWQ6IHVzZXIuX2lkLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXG4gICAgICB0b2tlblxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsibmMiLCJiY3J5cHQiLCJjbGllbnQiLCJzaWduVG9rZW4iLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInVzZXIiLCJmZXRjaCIsImVtYWlsIiwiYm9keSIsImNvbXBhcmVTeW5jIiwicGFzc3dvcmQiLCJ0b2tlbiIsIl9pZCIsIm5hbWUiLCJpc0FkbWluIiwic2VuZCIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/login.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(user, process.env.JWT_SECRET, {\n        expiresIn: '30d'\n    });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUU5QixLQUFLLENBQUNDLFNBQVMsSUFBSUMsSUFBSSxHQUFLLENBQUM7SUFDM0IsTUFBTSxDQUFDRix3REFBUSxDQUFDRSxJQUFJLEVBQUVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLEVBQUUsQ0FBQztRQUM3Q0MsU0FBUyxFQUFFLENBQUs7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCBzaWduVG9rZW4gPSAodXNlcikgPT4ge1xuICByZXR1cm4gand0LnNpZ24odXNlciwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge1xuICAgIGV4cGlyZXNJbjogJzMwZCcsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgc2lnblRva2VuIH07Il0sIm5hbWVzIjpbImp3dCIsInNpZ25Ub2tlbiIsInVzZXIiLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ }),

/***/ "(api)/./utils/client.js":
/*!*************************!*\
  !*** ./utils/client.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"(api)/./utils/config.js\");\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectId,\n    dataset: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataset,\n    useCdn: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNaO0FBQzdCLEtBQUssQ0FBQ0UsTUFBTSxHQUFHRixxREFBWSxDQUFDLENBQUM7SUFDM0JHLFNBQVMsRUFBRUYseURBQWdCO0lBQzNCRyxPQUFPLEVBQUVILHVEQUFjO0lBQ3ZCSSxNQUFNLEVBQUUsSUFBSTtBQUNkLENBQUM7QUFDRCxpRUFBZUgsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2xpZW50LmpzPzZlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogY29uZmlnLnByb2plY3RJZCxcbiAgZGF0YXNldDogY29uZmlnLmRhdGFzZXQsXG4gIHVzZUNkbjogdHJ1ZSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjb25maWciLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/client.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/login.js"));
module.exports = __webpack_exports__;

})();