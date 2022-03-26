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
exports.id = "pages/api/createPost";
exports.ids = ["pages/api/createPost"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/createPost.js":
/*!*********************************!*\
  !*** ./pages/api/createPost.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/config */ \"(api)/./utils/config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const projectId = _utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectId;\n    const dataset = _utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataset;\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    const slug = {\n        _type: 'slug',\n        current: req.body.title.toLowerCase().replace(/\\s+/g, '-').slice(0, 200)\n    };\n    const codeBlock = {\n        _type: 'code',\n        code: req.body.codeBlock\n    };\n    const author = {\n        _type: 'reference',\n        _ref: req.body.author\n    };\n    const createMutations = [\n        {\n            create: {\n                _type: 'post',\n                title: req.body.title,\n                description: req.body.description,\n                codeBlock: codeBlock,\n                slug: slug,\n                user: author\n            }\n        }, \n    ];\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`, {\n        mutations: createMutations\n    }, {\n        headers: {\n            'Content-type': 'application/json',\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    console.log(data);\n// const userId = data.results[0].id;\n// const user = {\n//   _id: userId,\n//   name: req.body.name,\n//   email: req.body.email,\n//   isAdmin: false,\n// };\n// const token = signToken(user);\n// res.send({ ...user, token });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ2M7QUFFdkMsS0FBSyxDQUFDRyxPQUFPLEdBQUdILHdEQUFFO0FBRWxCRyxPQUFPLENBQUNDLElBQUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUdoQyxLQUFLLENBQUNDLFNBQVMsR0FBR0wsK0RBQWdCO0lBQ2xDLEtBQUssQ0FBQ00sT0FBTyxHQUFHTiw2REFBYztJQUM5QixLQUFLLENBQUNPLG9CQUFvQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0lBQ3pELEtBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFDWkMsS0FBSyxFQUFFLENBQU07UUFDYkMsT0FBTyxFQUFFVixHQUFHLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sU0FBUyxDQUFHLElBQUVDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRztJQUN6RSxDQUFDO0lBQ0QsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztRQUNqQlAsS0FBSyxFQUFFLENBQU07UUFDYlEsSUFBSSxFQUFFakIsR0FBRyxDQUFDVyxJQUFJLENBQUNLLFNBQVM7SUFDMUIsQ0FBQztJQUNELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7UUFDZFQsS0FBSyxFQUFFLENBQVc7UUFDbEJVLElBQUksRUFBRW5CLEdBQUcsQ0FBQ1csSUFBSSxDQUFDTyxNQUFNO0lBRXZCLENBQUM7SUFDRCxLQUFLLENBQUNFLGVBQWUsR0FBRyxDQUFDO1FBQ3ZCLENBQUM7WUFDQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ1BaLEtBQUssRUFBRSxDQUFNO2dCQUNiRyxLQUFLLEVBQUVaLEdBQUcsQ0FBQ1csSUFBSSxDQUFDQyxLQUFLO2dCQUNyQlUsV0FBVyxFQUFFdEIsR0FBRyxDQUFDVyxJQUFJLENBQUNXLFdBQVc7Z0JBQ2pDTixTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCUixJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZlLElBQUksRUFBRUwsTUFBTTtZQUNkLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDLENBQUNNLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDNUIsaURBQVUsRUFDOUIsUUFBUSxFQUFFTSxTQUFTLENBQUMsOEJBQThCLEVBQUVDLE9BQU8sQ0FBQyxlQUFlLEdBQzVFLENBQUM7UUFBQ3NCLFNBQVMsRUFBRUwsZUFBZTtJQUFDLENBQUMsRUFDOUIsQ0FBQztRQUNDTSxPQUFPLEVBQUUsQ0FBQztZQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNsQ0MsYUFBYSxHQUFHLE9BQU8sRUFBRXZCLG9CQUFvQjtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUdId0IsT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUk7QUFFaEIsRUFBcUM7QUFDckMsRUFBaUI7QUFDakIsRUFBaUI7QUFDakIsRUFBeUI7QUFDekIsRUFBMkI7QUFDM0IsRUFBb0I7QUFDcEIsRUFBSztBQUNMLEVBQWlDO0FBQ2pDLEVBQWdDO0FBQ2xDLENBQUM7QUFFRCxpRUFBZTFCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jcmVhdGVQb3N0LmpzP2RkNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi91dGlscy9jb25maWcnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG5cbiAgY29uc3QgcHJvamVjdElkID0gY29uZmlnLnByb2plY3RJZDtcbiAgY29uc3QgZGF0YXNldCA9IGNvbmZpZy5kYXRhc2V0O1xuICBjb25zdCB0b2tlbldpdGhXcml0ZUFjY2VzcyA9IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU47XG4gIGNvbnN0IHNsdWcgPSB7XG4gICAgX3R5cGU6ICdzbHVnJyxcbiAgICBjdXJyZW50OiByZXEuYm9keS50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKS5zbGljZSgwLCAyMDApLFxuICB9O1xuICBjb25zdCBjb2RlQmxvY2sgPSB7XG4gICAgX3R5cGU6ICdjb2RlJyxcbiAgICBjb2RlOiByZXEuYm9keS5jb2RlQmxvY2ssXG4gIH07XG4gIGNvbnN0IGF1dGhvciA9IHtcbiAgICBfdHlwZTogJ3JlZmVyZW5jZScsXG4gICAgX3JlZjogcmVxLmJvZHkuYXV0aG9yLFxuICAgIC8vIHVzZXI6IHJlcS5ib2R5LmF1dGhvci5uYW1lXG4gIH1cbiAgY29uc3QgY3JlYXRlTXV0YXRpb25zID0gW1xuICAgIHtcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICBfdHlwZTogJ3Bvc3QnLFxuICAgICAgICB0aXRsZTogcmVxLmJvZHkudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZXEuYm9keS5kZXNjcmlwdGlvbixcbiAgICAgICAgY29kZUJsb2NrOiBjb2RlQmxvY2ssXG4gICAgICAgIHNsdWc6IHNsdWcsXG4gICAgICAgIHVzZXI6IGF1dGhvcixcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYGh0dHBzOi8vJHtwcm9qZWN0SWR9LmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9tdXRhdGUvJHtkYXRhc2V0fT9yZXR1cm5JZHM9dHJ1ZWAsXG4gICAgeyBtdXRhdGlvbnM6IGNyZWF0ZU11dGF0aW9ucyB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuV2l0aFdyaXRlQWNjZXNzfWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAvLyBjb25zdCB1c2VySWQgPSBkYXRhLnJlc3VsdHNbMF0uaWQ7XG4gIC8vIGNvbnN0IHVzZXIgPSB7XG4gIC8vICAgX2lkOiB1c2VySWQsXG4gIC8vICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgLy8gICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gIC8vICAgaXNBZG1pbjogZmFsc2UsXG4gIC8vIH07XG4gIC8vIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHVzZXIpO1xuICAvLyByZXMuc2VuZCh7IC4uLnVzZXIsIHRva2VuIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5jIiwiYXhpb3MiLCJjb25maWciLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ0b2tlbldpdGhXcml0ZUFjY2VzcyIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfQVBJX1RPS0VOIiwic2x1ZyIsIl90eXBlIiwiY3VycmVudCIsImJvZHkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNsaWNlIiwiY29kZUJsb2NrIiwiY29kZSIsImF1dGhvciIsIl9yZWYiLCJjcmVhdGVNdXRhdGlvbnMiLCJjcmVhdGUiLCJkZXNjcmlwdGlvbiIsInVzZXIiLCJkYXRhIiwibXV0YXRpb25zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createPost.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createPost.js"));
module.exports = __webpack_exports__;

})();