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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar.component */ \"./components/navbar.component.tsx\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/posts.component */ \"./components/posts.component.tsx\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    var posts = props.posts;\n    console.log(posts);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Share Code\"\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                posts: posts\n            }, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRCO0FBR3VCO0FBRUY7O0FBTWxDLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFZLEVBQUUsQ0FBQztJQUMxQyxHQUFLLENBQUdDLEtBQUssR0FBS0QsS0FBSyxDQUFmQyxLQUFLO0lBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBRWpCLE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQUU7O3dGQUNkVCxrREFBSTs7Z0dBQ0ZVLENBQUs7a0NBQUMsQ0FBVTs7Ozs7O2dHQUNoQkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDWixvRUFBTTs7Ozs7d0ZBRU5DLG1FQUFLO2dCQUFDRyxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7Ozs7OztBQUl6QixDQUFDO0tBakJ1QkYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vc2FuaXR5J1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi90eXBpbmdzJztcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzLmNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3RzOiBQb3N0W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgcG9zdHMgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyhwb3N0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaGFyZSBDb2RlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxQb3N0cyBwb3N0cz17cG9zdHN9IC8+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgKltfdHlwZSA9PSBcInBvc3RcIl0ge1xuICAgIF9pZCxcbiAgICB0aXRsZSxcbiAgICBhdXRob3ItPiB7XG4gICAgICBuYW1lLFxuICAgICAgaW1hZ2VcbiAgfSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBtYWluSW1hZ2UsXG4gICAgc2x1Z1xuICB9YDtcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfVxuICB9O1xufVxuXG4vLyAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuLy8gICBfaWQsXG4vLyAgIF9jcmVhdGVkQXQsXG4vLyAgIHRpdGxlLFxuLy8gICBhdXRob3ItPiB7XG4vLyAgICAgbmFtZSxcbi8vICAgICBpbWFnZVxuLy8gICB9LFxuLy8gICAnY29tbWVudHMnOiAqW1xuLy8gICAgIF90eXBlID09IFwiY29tbWVudFwiICYmIFxuLy8gICAgIHBvc3QuX3JlZiA9PSBeLl9pZCAmJiBcbi8vICAgICBhcHByb3ZlZCA9PSB0cnVlXG4vLyAgIF1cbi8vICAgZGVzY3JpcHRpb24sXG4vLyAgIG1haW5JbWFnZSxcbi8vICAgc2x1Z3tcbi8vICAgICBjdXJyZW50XG4vLyAgIH0sXG4vLyAgIGJvZHksXG4vLyB9Il0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJQb3N0cyIsIkhvbWUiLCJwcm9wcyIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});