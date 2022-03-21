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
exports.id = "pages/api/users/profile";
exports.ids = ["pages/api/users/profile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "(api)/./pages/api/users/profile.js":
/*!************************************!*\
  !*** ./pages/api/users/profile.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/config */ \"(api)/./utils/config.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_3__.isAuth);\nhandler.put(async (req, res)=>{\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`https://${_utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectId}.api.sanity.io/v1/data/mutate/${_utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataset}`, {\n        mutations: [\n            {\n                patch: {\n                    id: req.user._id,\n                    set: {\n                        name: req.body.name,\n                        email: req.body.email\n                    }\n                }\n            }, \n        ]\n    }, {\n        headers: {\n            'Content-type': 'application/json',\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    const user = {\n        _id: req.user._id,\n        name: req.body.name,\n        email: req.body.email,\n        isAdmin: req.user.isAdmin\n    };\n    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.signToken)(user);\n    res.send({\n        ...user,\n        token\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDSTtBQUNhO0FBQ2E7QUFFdkQsS0FBSyxDQUFDSyxPQUFPLEdBQUdKLHdEQUFFO0FBRWxCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsK0NBQU07QUFDbEJDLE9BQU8sQ0FBQ0UsR0FBRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQy9CLEtBQUssQ0FBQ0Msb0JBQW9CLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDekQsS0FBSyxDQUFDYixpREFBVSxFQUNiLFFBQVEsRUFBRUUsK0RBQWdCLENBQUMsOEJBQThCLEVBQUVBLDZEQUFjLElBQzFFLENBQUM7UUFDQ2UsU0FBUyxFQUFFLENBQUM7WUFDVixDQUFDO2dCQUNDQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsRUFBRSxFQUFFWCxHQUFHLENBQUNZLElBQUksQ0FBQ0MsR0FBRztvQkFDaEJDLEdBQUcsRUFBRSxDQUFDO3dCQUNKQyxJQUFJLEVBQUVmLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ0QsSUFBSTt3QkFDbkJFLEtBQUssRUFBRWpCLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ0MsS0FBSztvQkFDdkIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQ0QsQ0FBQztRQUNDQyxPQUFPLEVBQUUsQ0FBQztZQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNsQ0MsYUFBYSxHQUFHLE9BQU8sRUFBRWpCLG9CQUFvQjtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUdILEtBQUssQ0FBQ1UsSUFBSSxHQUFHLENBQUM7UUFDWkMsR0FBRyxFQUFFYixHQUFHLENBQUNZLElBQUksQ0FBQ0MsR0FBRztRQUNqQkUsSUFBSSxFQUFFZixHQUFHLENBQUNnQixJQUFJLENBQUNELElBQUk7UUFDbkJFLEtBQUssRUFBRWpCLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ0MsS0FBSztRQUNyQkcsT0FBTyxFQUFFcEIsR0FBRyxDQUFDWSxJQUFJLENBQUNRLE9BQU87SUFDM0IsQ0FBQztJQUNELEtBQUssQ0FBQ0MsS0FBSyxHQUFHMUIsc0RBQVMsQ0FBQ2lCLElBQUk7SUFDNUJYLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQyxDQUFDO1dBQUlWLElBQUk7UUFBRVMsS0FBSztJQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELGlFQUFleEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL3Byb2ZpbGUuanM/NGI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci51c2UoaXNBdXRoKTtcbmhhbmRsZXIucHV0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB0b2tlbldpdGhXcml0ZUFjY2VzcyA9IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU47XG4gIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYGh0dHBzOi8vJHtjb25maWcucHJvamVjdElkfS5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvbXV0YXRlLyR7Y29uZmlnLmRhdGFzZXR9YCxcbiAgICB7XG4gICAgICBtdXRhdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGNoOiB7XG4gICAgICAgICAgICBpZDogcmVxLnVzZXIuX2lkLFxuICAgICAgICAgICAgc2V0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgICAgICAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbldpdGhXcml0ZUFjY2Vzc31gLFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgdXNlciA9IHtcbiAgICBfaWQ6IHJlcS51c2VyLl9pZCxcbiAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICBpc0FkbWluOiByZXEudXNlci5pc0FkbWluLFxuICB9O1xuICBjb25zdCB0b2tlbiA9IHNpZ25Ub2tlbih1c2VyKTtcbiAgcmVzLnNlbmQoeyAuLi51c2VyLCB0b2tlbiB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJheGlvcyIsIm5jIiwiY29uZmlnIiwic2lnblRva2VuIiwiaXNBdXRoIiwiaGFuZGxlciIsInVzZSIsInB1dCIsInJlcSIsInJlcyIsInRva2VuV2l0aFdyaXRlQWNjZXNzIiwicHJvY2VzcyIsImVudiIsIlNBTklUWV9BUElfVE9LRU4iLCJwb3N0IiwicHJvamVjdElkIiwiZGF0YXNldCIsIm11dGF0aW9ucyIsInBhdGNoIiwiaWQiLCJ1c2VyIiwiX2lkIiwic2V0IiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaXNBZG1pbiIsInRva2VuIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/profile.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(user, process.env.JWT_SECRET, {\n        expiresIn: '30d'\n    });\n};\nconst isAuth = async (req, res, next)=>{\n    const { authorization  } = req.headers;\n    if (authorization) {\n        const token = authorization.slice(7, authorization.length); // BEARER XXX\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode)=>{\n            if (err) {\n                res.status(401).send({\n                    message: 'Token is not valid'\n                });\n            } else {\n                req.user = decode;\n                next();\n            }\n        });\n    } else {\n        res.status(401).send({\n            message: 'Token is not suppiled'\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFFOUIsS0FBSyxDQUFDQyxTQUFTLElBQUlDLElBQUksR0FBSyxDQUFDO0lBQzNCLE1BQU0sQ0FBQ0Ysd0RBQVEsQ0FBQ0UsSUFBSSxFQUFFRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7UUFDN0NDLFNBQVMsRUFBRSxDQUFLO0lBQ2xCLENBQUM7QUFDSCxDQUFDO0FBQ0QsS0FBSyxDQUFDQyxNQUFNLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxhQUFhLEVBQUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLE9BQU87SUFDckMsRUFBRSxFQUFFRCxhQUFhLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUNFLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxhQUFhLENBQUNJLE1BQU0sRUFBRyxDQUFhO1FBQ3pFaEIsMERBQVUsQ0FBQ2MsS0FBSyxFQUFFVixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHWSxHQUFHLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1lBQzFELEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7Z0JBQ1JSLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUFvQjtnQkFBQyxDQUFDO1lBQ3hELENBQUMsTUFBTSxDQUFDO2dCQUNOYixHQUFHLENBQUNQLElBQUksR0FBR2lCLE1BQU07Z0JBQ2pCUixJQUFJO1lBQ04sQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNORCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDM0QsQ0FBQztBQUNILENBQUM7QUFDNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCBzaWduVG9rZW4gPSAodXNlcikgPT4ge1xuICByZXR1cm4gand0LnNpZ24odXNlciwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge1xuICAgIGV4cGlyZXNJbjogJzMwZCcsXG4gIH0pO1xufTtcbmNvbnN0IGlzQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zbGljZSg3LCBhdXRob3JpemF0aW9uLmxlbmd0aCk7IC8vIEJFQVJFUiBYWFhcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCAoZXJyLCBkZWNvZGUpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcS51c2VyID0gZGVjb2RlO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHN1cHBpbGVkJyB9KTtcbiAgfVxufTtcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoIH07Il0sIm5hbWVzIjpbImp3dCIsInNpZ25Ub2tlbiIsInVzZXIiLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJpc0F1dGgiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/profile.js"));
module.exports = __webpack_exports__;

})();