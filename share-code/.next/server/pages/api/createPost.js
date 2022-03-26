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

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/config */ \"(api)/./utils/config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Store */ \"(api)/./utils/Store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _utils_Store__WEBPACK_IMPORTED_MODULE_4__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _utils_Store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    // function convertToSlug(Text) {\n    //   return Text\n    //     .toLowerCase()\n    //     .replace(/ /g, '-')\n    //     .replace(/[^\\w-]+/g, '')\n    //     ;\n    // }\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_4__.Store);\n    const { userInfo  } = state;\n    const projectId = _utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectId;\n    const dataset = _utils_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataset;\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    const slug = {\n        _type: 'slug',\n        current: req.body.title.toLowerCase().replace(/\\s+/g, '-').slice(0, 200)\n    };\n    const codeBlock = {\n        _type: \"code\",\n        code: req.body.codeBlock\n    };\n    console.log(slug);\n    const createMutations = [\n        {\n            create: {\n                _type: 'post',\n                title: req.body.title,\n                description: req.body.description,\n                codeBlock: codeBlock,\n                slug: slug,\n                author: userInfo.name\n            }\n        }, \n    ];\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`, {\n        mutations: createMutations\n    }, {\n        headers: {\n            'Content-type': 'application/json',\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    console.log(data);\n// const userId = data.results[0].id;\n// const user = {\n//   _id: userId,\n//   name: req.body.name,\n//   email: req.body.email,\n//   isAdmin: false,\n// };\n// const token = signToken(user);\n// res.send({ ...user, token });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ2M7QUFDTDtBQUNPO0FBR3pDLEtBQUssQ0FBQ0ssT0FBTyxHQUFHTCx3REFBRTtBQUVsQkssT0FBTyxDQUFDQyxJQUFJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsRUFBaUM7SUFDakMsRUFBZ0I7SUFDaEIsRUFBcUI7SUFDckIsRUFBMEI7SUFDMUIsRUFBK0I7SUFDL0IsRUFBUTtJQUNSLEVBQUk7SUFDSixLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLFFBQVEsRUFBQyxDQUFDLEdBQUdQLGlEQUFVLENBQUNDLCtDQUFLO0lBQzVDLEtBQUssQ0FBQyxDQUFDLENBQUNPLFFBQVEsRUFBQyxDQUFDLEdBQUdGLEtBQUs7SUFFMUIsS0FBSyxDQUFDRyxTQUFTLEdBQUdWLCtEQUFnQjtJQUNsQyxLQUFLLENBQUNXLE9BQU8sR0FBR1gsNkRBQWM7SUFDOUIsS0FBSyxDQUFDWSxvQkFBb0IsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtJQUN6RCxLQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO1FBQ1pDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLE9BQU8sRUFBRWIsR0FBRyxDQUFDYyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxPQUFPLFNBQVMsQ0FBRyxJQUFFQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUc7SUFDekUsQ0FBQztJQUNELEtBQUssQ0FBQ0MsU0FBUyxHQUFHLENBQUM7UUFDakJQLEtBQUssRUFBRSxDQUFNO1FBQ2JRLElBQUksRUFBRXBCLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDSyxTQUFTO0lBQzFCLENBQUM7SUFDREUsT0FBTyxDQUFDQyxHQUFHLENBQUNYLElBQUk7SUFDaEIsS0FBSyxDQUFDWSxlQUFlLEdBQUcsQ0FBQztRQUN2QixDQUFDO1lBQ0NDLE1BQU0sRUFBRSxDQUFDO2dCQUNQWixLQUFLLEVBQUUsQ0FBTTtnQkFDYkcsS0FBSyxFQUFFZixHQUFHLENBQUNjLElBQUksQ0FBQ0MsS0FBSztnQkFDckJVLFdBQVcsRUFBRXpCLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDVyxXQUFXO2dCQUNqQ04sU0FBUyxFQUFFQSxTQUFTO2dCQUNwQlIsSUFBSSxFQUFFQSxJQUFJO2dCQUNWZSxNQUFNLEVBQUV0QixRQUFRLENBQUN1QixJQUFJO1lBS3ZCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDbEMsaURBQVUsRUFDOUIsUUFBUSxFQUFFVyxTQUFTLENBQUMsOEJBQThCLEVBQUVDLE9BQU8sQ0FBQyxlQUFlLEdBQzVFLENBQUM7UUFBQ3VCLFNBQVMsRUFBRU4sZUFBZTtJQUFDLENBQUMsRUFDOUIsQ0FBQztRQUNDTyxPQUFPLEVBQUUsQ0FBQztZQUNSLENBQWMsZUFBRSxDQUFrQjtZQUNsQ0MsYUFBYSxHQUFHLE9BQU8sRUFBRXhCLG9CQUFvQjtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUdIYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sSUFBSTtBQUVoQixFQUFxQztBQUNyQyxFQUFpQjtBQUNqQixFQUFpQjtBQUNqQixFQUF5QjtBQUN6QixFQUEyQjtBQUMzQixFQUFvQjtBQUNwQixFQUFLO0FBQ0wsRUFBaUM7QUFDakMsRUFBZ0M7QUFDbEMsQ0FBQztBQUVELGlFQUFlOUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZVBvc3QuanM/ZGQ2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uLy4uL3V0aWxzL1N0b3JlJ1xuXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpO1xuXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIGZ1bmN0aW9uIGNvbnZlcnRUb1NsdWcoVGV4dCkge1xuICAvLyAgIHJldHVybiBUZXh0XG4gIC8vICAgICAudG9Mb3dlckNhc2UoKVxuICAvLyAgICAgLnJlcGxhY2UoLyAvZywgJy0nKVxuICAvLyAgICAgLnJlcGxhY2UoL1teXFx3LV0rL2csICcnKVxuICAvLyAgICAgO1xuICAvLyB9XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gc3RhdGVcblxuICBjb25zdCBwcm9qZWN0SWQgPSBjb25maWcucHJvamVjdElkO1xuICBjb25zdCBkYXRhc2V0ID0gY29uZmlnLmRhdGFzZXQ7XG4gIGNvbnN0IHRva2VuV2l0aFdyaXRlQWNjZXNzID0gcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTjtcbiAgY29uc3Qgc2x1ZyA9IHtcbiAgICBfdHlwZTogJ3NsdWcnLFxuICAgIGN1cnJlbnQ6IHJlcS5ib2R5LnRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpLnNsaWNlKDAsIDIwMCksXG4gIH07XG4gIGNvbnN0IGNvZGVCbG9jayA9IHtcbiAgICBfdHlwZTogXCJjb2RlXCIsXG4gICAgY29kZTogcmVxLmJvZHkuY29kZUJsb2NrLFxuICB9O1xuICBjb25zb2xlLmxvZyhzbHVnKTtcbiAgY29uc3QgY3JlYXRlTXV0YXRpb25zID0gW1xuICAgIHtcbiAgICAgIGNyZWF0ZToge1xuICAgICAgICBfdHlwZTogJ3Bvc3QnLFxuICAgICAgICB0aXRsZTogcmVxLmJvZHkudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZXEuYm9keS5kZXNjcmlwdGlvbixcbiAgICAgICAgY29kZUJsb2NrOiBjb2RlQmxvY2ssXG4gICAgICAgIHNsdWc6IHNsdWcsXG4gICAgICAgIGF1dGhvcjogdXNlckluZm8ubmFtZVxuICAgICAgICAvLyBhdXRob3I6IHtcbiAgICAgICAgLy8gICBfdHlwZTogJ3JlZmVyZW5jZScsXG4gICAgICAgIC8vICAgX3JlZjogdXNlckluZm8uX2lkXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgYGh0dHBzOi8vJHtwcm9qZWN0SWR9LmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9tdXRhdGUvJHtkYXRhc2V0fT9yZXR1cm5JZHM9dHJ1ZWAsXG4gICAgeyBtdXRhdGlvbnM6IGNyZWF0ZU11dGF0aW9ucyB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuV2l0aFdyaXRlQWNjZXNzfWAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAvLyBjb25zdCB1c2VySWQgPSBkYXRhLnJlc3VsdHNbMF0uaWQ7XG4gIC8vIGNvbnN0IHVzZXIgPSB7XG4gIC8vICAgX2lkOiB1c2VySWQsXG4gIC8vICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgLy8gICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gIC8vICAgaXNBZG1pbjogZmFsc2UsXG4gIC8vIH07XG4gIC8vIGNvbnN0IHRva2VuID0gc2lnblRva2VuKHVzZXIpO1xuICAvLyByZXMuc2VuZCh7IC4uLnVzZXIsIHRva2VuIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5jIiwiYXhpb3MiLCJjb25maWciLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VySW5mbyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ0b2tlbldpdGhXcml0ZUFjY2VzcyIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfQVBJX1RPS0VOIiwic2x1ZyIsIl90eXBlIiwiY3VycmVudCIsImJvZHkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInNsaWNlIiwiY29kZUJsb2NrIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVNdXRhdGlvbnMiLCJjcmVhdGUiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsIm5hbWUiLCJkYXRhIiwibXV0YXRpb25zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createPost.js\n");

/***/ }),

/***/ "(api)/./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst initialState = {\n    userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('userInfo') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('userInfo')) : null\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case 'USER_LOGIN':\n            return {\n                ...state,\n                userInfo: action.payload\n            };\n        case 'USER_LOGOUT':\n            return {\n                ...state,\n                userInfo: null\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider(props) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/liege/dev/share-code-nextjs/share-code/utils/Store.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9TdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNrQjtBQUUxQyxLQUFLLENBQUNHLEtBQUssaUJBQUdGLG9EQUFhO0FBRWxDLEtBQUssQ0FBQ0csWUFBWSxHQUFHLENBQUM7SUFDcEJDLFFBQVEsRUFBRUwscURBQVcsQ0FBQyxDQUFVLGFBQzVCTyxJQUFJLENBQUNDLEtBQUssQ0FBQ1IscURBQVcsQ0FBQyxDQUFVLGNBQ2pDLElBQUk7QUFDVixDQUFDO1NBRVFTLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixJQUFJLENBQUMsQ0FBWTtZQUNmLE1BQU0sQ0FBQyxDQUFDO21CQUFJRixLQUFLO2dCQUFFTCxRQUFRLEVBQUVNLE1BQU0sQ0FBQ0UsT0FBTztZQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLENBQWE7WUFDaEIsTUFBTSxDQUFDLENBQUM7bUJBQUlILEtBQUs7Z0JBQUVMLFFBQVEsRUFBRSxJQUFJO1lBQUMsQ0FBQzs7WUFFbkMsTUFBTSxDQUFDSyxLQUFLOztBQUVsQixDQUFDO0FBRU0sU0FBU0ksYUFBYSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxLQUFLLE1BQUVMLEtBQUssTUFBRU0sUUFBUSxNQUFJZCxpREFBVSxDQUFDTyxPQUFPLEVBQUVMLFlBQVk7SUFDMUQsS0FBSyxDQUFDYSxLQUFLLEdBQUcsQ0FBQztRQUFDUCxLQUFLO1FBQUVNLFFBQVE7SUFBQyxDQUFDO0lBQ2pDLE1BQU0sNkVBQUViLEtBQUssQ0FBQ2UsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7a0JBQUdGLEtBQUssQ0FBQ0ksUUFBUTs7Ozs7O0FBQ3RELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9TdG9yZS5qcz84YjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlckluZm86IENvb2tpZXMuZ2V0KCd1c2VySW5mbycpXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCd1c2VySW5mbycpKVxuICAgIDogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVNFUl9MT0dJTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlckluZm86IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVVNFUl9MT0dPVVQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBudWxsIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcihwcm9wcykge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e3Byb3BzLmNoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xufSJdLCJuYW1lcyI6WyJDb29raWVzIiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsInVzZXJJbmZvIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJTdG9yZVByb3ZpZGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInZhbHVlIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/Store.js\n");

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