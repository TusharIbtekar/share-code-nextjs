"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar.component */ \"./components/navbar.component.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            post.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"h-40 w-full object-cover\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            post.author.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Code shared by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: post.author.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 65\n                                    }, this),\n                                    \" - Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dataset: \"production\",\n                            projectId: \"vlft033y\",\n                            content: post.body,\n                            serializers: {\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-desc\",\n                                        children: [\n                                            \" \",\n                                            children,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                },\n                                link: function(param) {\n                                    var href = param.href, children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: href,\n                                        className: \"text-blue-500 hover: underline\",\n                                        children: children\n                                    }, void 0, false, void 0, void 0);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"max-w-lg my-5 mx-auto border border-yellow-600\"\n            }, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col p-5 max-w-2xl mx-auto mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-sm text-yellow-500\",\n                        children: \"Enjoyed this article\"\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Leave a comment below\"\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"py-3 mt-2\"\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:ring-2\",\n                                placeholder: \"name\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:ring-2\",\n                                placeholder: \"name\",\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: \"Comment\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 hover:ring-2\",\n                                placeholder: \"name\",\n                                rows: 8\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBb0I7a0NBQUMsQ0FBcUI7Ozs7OztnR0FDdkRpQyxDQUFFO3dCQUFDakMsU0FBUyxFQUFDLENBQVc7Ozs7OztnR0FFeEJxQyxDQUFLO3dCQUFDckMsU0FBUyxFQUFDLENBQVk7O3dHQUMxQmEsQ0FBSTtnQ0FBQ2IsU0FBUyxFQUFDLENBQWU7MENBQUMsQ0FBSTs7Ozs7O3dHQUNuQ3NDLENBQUs7Z0NBQUN0QyxTQUFTLEVBQUMsQ0FBMkY7Z0NBQUN1QyxXQUFXLEVBQUMsQ0FBTTtnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7OztnR0FFNUlILENBQUs7d0JBQUNyQyxTQUFTLEVBQUMsQ0FBWTs7d0dBQzFCYSxDQUFJO2dDQUFDYixTQUFTLEVBQUMsQ0FBZTswQ0FBQyxDQUFLOzs7Ozs7d0dBQ3BDc0MsQ0FBSztnQ0FBQ3RDLFNBQVMsRUFBQyxDQUEyRjtnQ0FBQ3VDLFdBQVcsRUFBQyxDQUFNO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O2dHQUU1SUgsQ0FBSzt3QkFBQ3JDLFNBQVMsRUFBQyxDQUFZOzt3R0FDMUJhLENBQUk7Z0NBQUNiLFNBQVMsRUFBQyxDQUFlOzBDQUFDLENBQU87Ozs7Ozt3R0FDdEN5QyxDQUFRO2dDQUFDekMsU0FBUyxFQUFDLENBQTJGO2dDQUFDdUMsV0FBVyxFQUFDLENBQU07Z0NBQUNHLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEosQ0FBQztLQXpFUWpELElBQUk7O0FBMkViLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD8zMDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXIuY29tcG9uZW50J1xuaW1wb3J0IHsgc2FuaXR5Q2xpZW50LCB1cmxGb3IgfSBmcm9tICcuLi8uLi9zYW5pdHknXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcbmltcG9ydCBQb3J0YWJsZVRleHQgZnJvbSAncmVhY3QtcG9ydGFibGUtdGV4dCdcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OiBQb3N0O1xufVxuXG5mdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQcm9wcykge1xuICBjb25zb2xlLmxvZyhwb3N0KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAge1xuICAgICAgICBwb3N0Lm1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTQwIHctZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9e3VybEZvcihwb3N0Lm1haW5JbWFnZSkudXJsKCl9IGFsdD1cIlwiIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT0nbWF4LXctM3hsIG14LWF1dG8gcC01Jz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgbXQtMTAgbWItMyc+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbWItMic+e3Bvc3QuZGVzY3JpcHRpb259PC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb3N0LmF1dGhvci5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17dXJsRm9yKHBvc3QuYXV0aG9yLmltYWdlKS51cmwoKX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWV4dHJhbGlnaHQgdGV4dC1zbSc+Q29kZSBzaGFyZWQgYnkgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTYwMCc+e3Bvc3QuYXV0aG9yLm5hbWV9PC9zcGFuPiAtIFB1Ymxpc2hlZCBhdCB7bmV3IERhdGUocG9zdC5fY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCc+XG4gICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgZGF0YXNldD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQhfVxuICAgICAgICAgICAgcHJvamVjdElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCF9XG4gICAgICAgICAgICBjb250ZW50PXtwb3N0LmJvZHl9XG4gICAgICAgICAgICBzZXJpYWxpemVycz17XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoMTogKHByb3BzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBteS01JyB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBoMjogKHByb3BzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIG15LTUnIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGxpOiAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21sLTQgbGlzdC1kZXNjJz4ge2NoaWxkcmVufSA8L2xpPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbGluazogKHsgaHJlZiwgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9J3RleHQtYmx1ZS01MDAgaG92ZXI6IHVuZGVybGluZSc+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIDxociBjbGFzc05hbWU9J21heC13LWxnIG15LTUgbXgtYXV0byBib3JkZXIgYm9yZGVyLXllbGxvdy02MDAnIC8+XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTUgbWF4LXctMnhsIG14LWF1dG8gbWItMTAnPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQteWVsbG93LTUwMCc+RW5qb3llZCB0aGlzIGFydGljbGU8L2gzPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQnPkxlYXZlIGEgY29tbWVudCBiZWxvdzwvaDQ+XG4gICAgICAgIDxociBjbGFzc05hbWU9J3B5LTMgbXQtMicgLz5cblxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBtYi01Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAnPk5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2hhZG93IGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyBmb3JtLWlucHV0IG10LTEgYmxvY2sgdy1mdWxsIHJpbmcteWVsbG93LTUwMCBob3ZlcjpyaW5nLTInIHBsYWNlaG9sZGVyPSduYW1lJyB0eXBlPSd0ZXh0JyAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBtYi01Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS03MDAnPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLXllbGxvdy01MDAgaG92ZXI6cmluZy0yJyBwbGFjZWhvbGRlcj0nbmFtZScgdHlwZT0ndGV4dCcgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgbWItNSc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNzAwJz5Db21tZW50PC9zcGFuPlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3NoYWRvdyBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgZm9ybS1pbnB1dCBtdC0xIGJsb2NrIHctZnVsbCByaW5nLXllbGxvdy01MDAgaG92ZXI6cmluZy0yJyBwbGFjZWhvbGRlcj0nbmFtZScgcm93cz17OH0gLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIl0ge1xuICAgICAgX2lkLFxuICAgICAgc2x1Z3tcbiAgICAgICAgY3VycmVudFxuICAgIH1cbiAgfWBcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+IChcbiAgICB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnRcbiAgICAgIH1cbiAgICB9XG4gICkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuICAgIF9pZCxcbiAgICBfY3JlYXRlZEF0LFxuICAgIHRpdGxlLFxuICAgIGF1dGhvci0+IHtcbiAgICAgIG5hbWUsXG4gICAgICBpbWFnZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWFpbkltYWdlLFxuICAgIHNsdWd7XG4gICAgICBjdXJyZW50XG4gICAgfSxcbiAgICBib2R5LFxuICB9YFxuXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcbiAgICBzbHVnOiBwYXJhbXM/LnNsdWcsXG4gIH0pO1xuXG4gIGlmICghcG9zdCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCwgLy9hZnRlciA2MHMsIGl0J2xsIHVwZGF0ZSB0aGUgb2xkIGNhY2hlZCB2ZXJzaW9uOiBJU1JcbiAgfVxufSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1cmxGb3IiLCJQb3J0YWJsZVRleHQiLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwibWFpbkltYWdlIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwidXJsIiwiYWx0IiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwibGkiLCJjaGlsZHJlbiIsImxpbmsiLCJocmVmIiwiYSIsImhyIiwiZm9ybSIsImgzIiwiaDQiLCJsYWJlbCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});