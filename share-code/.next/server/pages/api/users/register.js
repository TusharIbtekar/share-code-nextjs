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

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/config */ \"(api)/./utils/config.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/client */ \"(api)/./utils/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const projectId = _utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].projectId;\n    const dataset = _utils_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dataset;\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    const createMutations = [\n        {\n            create: {\n                _type: 'user',\n                name: req.body.name,\n                email: req.body.email,\n                password: bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.password),\n                isAdmin: false\n            }\n        }, \n    ];\n    const existUser = await _utils_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"].fetch(`*[_type == \"user\" && email == $email][0]`, {\n        email: req.body.email\n    });\n    if (existUser) {\n        return res.status(401).send({\n            message: 'Email aleardy exists'\n        });\n    }\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`, {\n        mutations: createMutations\n    }, {\n        headers: {\n            'Content-type': 'application/json',\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    const userId = data.results[0].id;\n    const user = {\n        _id: userId,\n        name: req.body.name,\n        email: req.body.email,\n        isAdmin: false\n    };\n    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.signToken)(user);\n    res.send({\n        ...user,\n        token\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0E7QUFDSjtBQUNpQjtBQUNLO0FBQ0w7QUFFMUMsS0FBSyxDQUFDTSxPQUFPLEdBQUdOLHdEQUFFO0FBRWxCTSxPQUFPLENBQUNDLElBQUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxLQUFLLENBQUNDLFNBQVMsR0FBR1AsK0RBQWdCO0lBQ2xDLEtBQUssQ0FBQ1EsT0FBTyxHQUFHUiw2REFBYztJQUM5QixLQUFLLENBQUNTLG9CQUFvQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0lBQ3pELEtBQUssQ0FBQ0MsZUFBZSxHQUFHLENBQUM7UUFDdkIsQ0FBQztZQUNDQyxNQUFNLEVBQUUsQ0FBQztnQkFDUEMsS0FBSyxFQUFFLENBQU07Z0JBQ2JDLElBQUksRUFBRVgsR0FBRyxDQUFDWSxJQUFJLENBQUNELElBQUk7Z0JBQ25CRSxLQUFLLEVBQUViLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLO2dCQUNyQkMsUUFBUSxFQUFFckIsd0RBQWUsQ0FBQ08sR0FBRyxDQUFDWSxJQUFJLENBQUNFLFFBQVE7Z0JBQzNDRSxPQUFPLEVBQUUsS0FBSztZQUNoQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNwQiwyREFBWSxFQUNqQyx3Q0FBd0MsR0FDekMsQ0FBQztRQUNDZ0IsS0FBSyxFQUFFYixHQUFHLENBQUNZLElBQUksQ0FBQ0MsS0FBSztJQUN2QixDQUFDO0lBRUgsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFzQjtRQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDNUIsaURBQVUsRUFDOUIsUUFBUSxFQUFFUSxTQUFTLENBQUMsOEJBQThCLEVBQUVDLE9BQU8sQ0FBQyxlQUFlLEdBQzVFLENBQUM7UUFBQ29CLFNBQVMsRUFBRWYsZUFBZTtJQUFDLENBQUMsRUFDOUIsQ0FBQztRQUNDZ0IsT0FBTyxFQUFFLENBQUM7WUFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDbENDLGFBQWEsR0FBRyxPQUFPLEVBQUVyQixvQkFBb0I7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFHSCxLQUFLLENBQUNzQixNQUFNLEdBQUdKLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUMsRUFBRUMsRUFBRTtJQUNqQyxLQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO1FBQ1pDLEdBQUcsRUFBRUosTUFBTTtRQUNYZixJQUFJLEVBQUVYLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDRCxJQUFJO1FBQ25CRSxLQUFLLEVBQUViLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLO1FBQ3JCRyxPQUFPLEVBQUUsS0FBSztJQUNoQixDQUFDO0lBQ0QsS0FBSyxDQUFDZSxLQUFLLEdBQUduQyxzREFBUyxDQUFDaUMsSUFBSTtJQUM1QjVCLEdBQUcsQ0FBQ21CLElBQUksQ0FBQyxDQUFDO1dBQUlTLElBQUk7UUFBRUUsS0FBSztJQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELGlFQUFlakMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL3JlZ2lzdGVyLmpzPzUwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgeyBzaWduVG9rZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9hdXRoJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2xpZW50JztcblxuY29uc3QgaGFuZGxlciA9IG5jKCk7XG5cbmhhbmRsZXIucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcHJvamVjdElkID0gY29uZmlnLnByb2plY3RJZDtcbiAgY29uc3QgZGF0YXNldCA9IGNvbmZpZy5kYXRhc2V0O1xuICBjb25zdCB0b2tlbldpdGhXcml0ZUFjY2VzcyA9IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU47XG4gIGNvbnN0IGNyZWF0ZU11dGF0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjcmVhdGU6IHtcbiAgICAgICAgX3R5cGU6ICd1c2VyJyxcbiAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LnBhc3N3b3JkKSxcbiAgICAgICAgaXNBZG1pbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGV4aXN0VXNlciA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInVzZXJcIiAmJiBlbWFpbCA9PSAkZW1haWxdWzBdYCxcbiAgICB7XG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgfVxuICApO1xuICBpZiAoZXhpc3RVc2VyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0VtYWlsIGFsZWFyZHkgZXhpc3RzJyB9KTtcbiAgfVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYGh0dHBzOi8vJHtwcm9qZWN0SWR9LmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9tdXRhdGUvJHtkYXRhc2V0fT9yZXR1cm5JZHM9dHJ1ZWAsXG4gICAgeyBtdXRhdGlvbnM6IGNyZWF0ZU11dGF0aW9ucyB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuV2l0aFdyaXRlQWNjZXNzfWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zdCB1c2VySWQgPSBkYXRhLnJlc3VsdHNbMF0uaWQ7XG4gIGNvbnN0IHVzZXIgPSB7XG4gICAgX2lkOiB1c2VySWQsXG4gICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgaXNBZG1pbjogZmFsc2UsXG4gIH07XG4gIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHVzZXIpO1xuICByZXMuc2VuZCh7IC4uLnVzZXIsIHRva2VuIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5jIiwiYmNyeXB0IiwiYXhpb3MiLCJjb25maWciLCJzaWduVG9rZW4iLCJjbGllbnQiLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ0b2tlbldpdGhXcml0ZUFjY2VzcyIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfQVBJX1RPS0VOIiwiY3JlYXRlTXV0YXRpb25zIiwiY3JlYXRlIiwiX3R5cGUiLCJuYW1lIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYXNoU3luYyIsImlzQWRtaW4iLCJleGlzdFVzZXIiLCJmZXRjaCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZGF0YSIsIm11dGF0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlcklkIiwicmVzdWx0cyIsImlkIiwidXNlciIsIl9pZCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/register.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/register.js"));
module.exports = __webpack_exports__;

})();