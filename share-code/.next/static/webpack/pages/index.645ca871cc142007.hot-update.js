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

/***/ "./components/posts.component.tsx":
/*!****************************************!*\
  !*** ./components/posts.component.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n\n\n\nfunction Posts(param) {\n    var posts = param.posts;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md: gap-6 p-2 md: p-6 cursor-pointer\",\n            children: posts.map(function(post) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"post/\".concat(post.slug.current),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"group group-hover:scale-105 transition-transform duration-200 ease-in-out border rounded-lg overflow-hidden\",\n                        children: [\n                            post.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-60 w-full object-cover\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 19\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between p-5 bg-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-bold\",\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-xs\",\n                                                children: [\n                                                    post.description,\n                                                    \" by \",\n                                                    post.author.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, _this),\n                                    post.author.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"h-12 w-12 rounded-full\",\n                                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this)\n                }, post._id, false, {\n                    fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/liege/dev/share-code-nextjs/share-code/components/posts.component.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzLmNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUNNO1NBUXpCRSxLQUFLLENBQUMsS0FBZ0IsRUFBRSxDQUFDO1FBQWpCQyxLQUFLLEdBQVAsS0FBZ0IsQ0FBZEEsS0FBSzs7SUFDcEIsTUFBTTs4RkFJREMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBc0M7c0JBQ2xERixLQUFLLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7OEJBQ2QsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUxSLGtEQUFJO29CQUFnQlMsSUFBSSxFQUFHLENBQUssT0FBb0IsT0FBbEJGLElBQUksQ0FBQ0csSUFBSSxDQUFDQyxPQUFPOzBHQUNqRFAsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQTZHOzs0QkFFeEhFLElBQUksQ0FBQ0ssU0FBUyxnRkFDWEMsQ0FBRztnQ0FBQ1IsU0FBUyxFQUFDLENBQTBCO2dDQUFDUyxHQUFHLEVBQUViLCtDQUFNLENBQUNNLElBQUksQ0FBQ0ssU0FBUyxFQUFFRyxHQUFHO2dDQUFJQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7O3dHQUd0RlosQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQW1DOztnSEFDL0NELENBQUc7O3dIQUNEYSxDQUFDO2dEQUFDWixTQUFTLEVBQUMsQ0FBbUI7MERBQUVFLElBQUksQ0FBQ1csS0FBSzs7Ozs7O3dIQUMzQ0QsQ0FBQztnREFBQ1osU0FBUyxFQUFDLENBQVM7O29EQUFFRSxJQUFJLENBQUNZLFdBQVc7b0RBQUMsQ0FBSTtvREFBQ1osSUFBSSxDQUFDYSxNQUFNLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7b0NBRzlEZCxJQUFJLENBQUNhLE1BQU0sQ0FBQ0UsS0FBSyxnRkFDZFQsQ0FBRzt3Q0FBQ1IsU0FBUyxFQUFDLENBQXdCO3dDQUFDUyxHQUFHLEVBQUViLCtDQUFNLENBQUNNLElBQUksQ0FBQ2EsTUFBTSxDQUFDRSxLQUFLLEVBQUVQLEdBQUc7d0NBQUlDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZG5GVCxJQUFJLENBQUNnQixHQUFHOzs7Ozs7Ozs7Ozs7QUF5QjdCLENBQUM7S0FoQ1FyQixLQUFLO0FBaUNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy5jb21wb25lbnQudHN4PzNmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uL3Nhbml0eVwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi90eXBpbmdzXCJcblxuXG50eXBlIFByb3BzID0ge1xuICBwb3N0czogUG9zdFtdXG59XG5cbmZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIHtjb25zb2xlLmxvZyhwb3N0cyl9ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTogZ3JpZC1jb2xzLTIgbGc6IGdyaWQtY29scy0zIGdhcC0zIG1kOiBnYXAtNiBwLTIgbWQ6IHAtNiBncm91cCBjdXJzb3ItcG9pbnRlclwiPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6IGdhcC02IHAtMiBtZDogcC02IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8TGluayBrZXk9e3Bvc3QuX2lkfSBocmVmPXtgcG9zdC8ke3Bvc3Quc2x1Zy5jdXJyZW50fWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGJvcmRlciByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdC5tYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkudXJsKCl9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC01IGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPntwb3N0LmRlc2NyaXB0aW9ufSBieSB7cG9zdC5hdXRob3IubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcG9zdC5hdXRob3IuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTIgdy0xMiByb3VuZGVkLWZ1bGxcIiBzcmM9e3VybEZvcihwb3N0LmF1dGhvci5pbWFnZSkudXJsKCl9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQb3N0czsiXSwibmFtZXMiOlsiTGluayIsInVybEZvciIsIlBvc3RzIiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0Iiwia2V5IiwiaHJlZiIsInNsdWciLCJjdXJyZW50IiwibWFpbkltYWdlIiwiaW1nIiwic3JjIiwidXJsIiwiYWx0IiwicCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJuYW1lIiwiaW1hZ2UiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts.component.tsx\n");

/***/ })

});