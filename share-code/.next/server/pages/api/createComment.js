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
exports.id = "pages/api/createComment";
exports.ids = ["pages/api/createComment"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./pages/api/createComment.ts":
/*!************************************!*\
  !*** ./pages/api/createComment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createComment)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    dataset: \"production\",\n    projectId: \"vlft033y\",\n    useCdn: \"development\" === \"production\",\n    token: process.env.SANITY_API_TOKEN\n};\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()(config);\nasync function createComment(req, res) {\n    const { _id , name , email , comment  } = JSON.parse(req.body);\n    try {\n        await client.create({\n            _type: \"comment\",\n            post: {\n                _type: 'reference',\n                _ref: _id\n            },\n            name,\n            email,\n            comment\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: `Couldn't submit comment`,\n            error\n        });\n    }\n    return res.status(200).json({\n        message: 'Comment submitted'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFeUM7QUFFekMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNkQyxPQUFPLEVBQUVDLFlBQXNDO0lBQy9DRyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxNQUFNLEVBUFIsQ0FBYSxpQkFPc0IsQ0FBWTtJQUM3Q0MsS0FBSyxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sZ0JBQWdCO0FBQ3JDLENBQUM7QUFDRCxLQUFLLENBQUNDLE1BQU0sR0FBR1gscURBQVksQ0FBQ0MsTUFBTTtBQUVuQixlQUFlVyxhQUFhLENBQ3pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEIsQ0FBQztJQUNELEtBQUssQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUNRLElBQUk7SUFFekQsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNWLE1BQU0sQ0FBQ1csTUFBTSxDQUFDLENBQUM7WUFDbkJDLEtBQUssRUFBRSxDQUFTO1lBQ2hCQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEQsS0FBSyxFQUFFLENBQVc7Z0JBQ2xCRSxJQUFJLEVBQUVWLEdBQUc7WUFDWCxDQUFDO1lBQ0RDLElBQUk7WUFDSkMsS0FBSztZQUNMQyxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVRLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sR0FBRyx1QkFBdUI7WUFBR0gsS0FBSztRQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU0sQ0FBQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBbUI7SUFBQyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY3JlYXRlQ29tbWVudC50cz9hOGU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuY29uc3QgY29uZmlnID0ge1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxufVxuY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KGNvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgeyBfaWQsIG5hbWUsIGVtYWlsLCBjb21tZW50IH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICB0cnkge1xuICAgIGF3YWl0IGNsaWVudC5jcmVhdGUoe1xuICAgICAgX3R5cGU6IFwiY29tbWVudFwiLFxuICAgICAgcG9zdDoge1xuICAgICAgICBfdHlwZTogJ3JlZmVyZW5jZScsXG4gICAgICAgIF9yZWY6IF9pZFxuICAgICAgfSxcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBgQ291bGRuJ3Qgc3VibWl0IGNvbW1lbnRgLCBlcnJvciB9KVxuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0NvbW1lbnQgc3VibWl0dGVkJyB9KVxufVxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsInVzZUNkbiIsInRva2VuIiwiU0FOSVRZX0FQSV9UT0tFTiIsImNsaWVudCIsImNyZWF0ZUNvbW1lbnQiLCJyZXEiLCJyZXMiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJjb21tZW50IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNyZWF0ZSIsIl90eXBlIiwicG9zdCIsIl9yZWYiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createComment.ts"));
module.exports = __webpack_exports__;

})();