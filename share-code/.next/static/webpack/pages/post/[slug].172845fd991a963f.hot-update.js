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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar.component */ \"./components/navbar.component.tsx\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-portable-text */ \"./node_modules/react-portable-text/dist/index.js\");\n/* harmony import */ var react_portable_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_portable_text__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Post(param1) {\n    var post = param1.post;\n    console.log(post);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            post.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"h-40 w-full object-cover\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mt-10 mb-3\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-light text-gray-500 mb-2\",\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            post.author.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.author.image).url(),\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-extralight text-sm\",\n                                children: [\n                                    \"Code shared by \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-green-600\",\n                                        children: post.author.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 65\n                                    }, this),\n                                    \" - Published at \",\n                                    new Date(post._createdAt).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_portable_text__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            dataset: \"production\",\n                            projectId: \"vlft033y\",\n                            content: post.body,\n                            serializers: _defineProperty({\n                                h1: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-2xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                h2: function(props) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                        className: \"text-xl font-bold my-5\"\n                                    }, props), void 0, false, void 0, void 0);\n                                },\n                                li: function(param) {\n                                    var children = param.children;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-4 list-desc\",\n                                        children: [\n                                            \" \",\n                                            children,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, void 0, void 0);\n                                }\n                            }, \"h1\", function(props) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", _objectSpread({\n                                    className: \"text-2xl font-bold my-5\"\n                                }, props), void 0, false, void 0, void 0);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/liege/dev/share-code-nextjs/share-code/pages/post/[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDSDtBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQU9yQ0csSUFBSSxDQUFDLE1BQWUsRUFBRSxDQUFDO1FBQWhCQyxJQUFJLEdBQU4sTUFBZSxDQUFiQSxJQUFJO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUVoQixNQUFNLDZFQUNIRyxDQUFJOzt3RkFDRlAsb0VBQU07Ozs7O1lBRUxJLElBQUksQ0FBQ0ksU0FBUyxnRkFDWEMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBCO2dCQUFDQyxHQUFHLEVBQUVWLCtDQUFNLENBQUNHLElBQUksQ0FBQ0ksU0FBUyxFQUFFSSxHQUFHO2dCQUFJQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7O3dGQUd0RkMsQ0FBTztnQkFBQ0osU0FBUyxFQUFDLENBQXVCOztnR0FDdkNLLENBQUU7d0JBQUNMLFNBQVMsRUFBQyxDQUFxQjtrQ0FBRU4sSUFBSSxDQUFDWSxLQUFLOzs7Ozs7Z0dBQzlDQyxDQUFFO3dCQUFDUCxTQUFTLEVBQUMsQ0FBdUM7a0NBQUVOLElBQUksQ0FBQ2MsV0FBVzs7Ozs7O2dHQUV0RUMsQ0FBRzt3QkFBQ1QsU0FBUyxFQUFDLENBQTZCOzs0QkFFeENOLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxnRkFDZFosQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXdCO2dDQUFDQyxHQUFHLEVBQUVWLCtDQUFNLENBQUNHLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFVCxHQUFHO2dDQUFJQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7O3dHQUd2RlMsQ0FBQztnQ0FBQ1osU0FBUyxFQUFDLENBQXlCOztvQ0FBQyxDQUFlO2dIQUFDYSxDQUFJO3dDQUFDYixTQUFTLEVBQUMsQ0FBZ0I7a0RBQUVOLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ0ksSUFBSTs7Ozs7O29DQUFRLENBQWdCO29DQUFDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsVUFBVSxFQUFFQyxjQUFjOzs7Ozs7Ozs7Ozs7O2dHQUUxS1IsQ0FBRzs4R0FDRGpCLDREQUFZOzRCQUNYMEIsT0FBTyxFQUFFQyxZQUFzQzs0QkFDL0NHLFNBQVMsRUFBRUgsVUFBeUM7NEJBQ3BESyxPQUFPLEVBQUU5QixJQUFJLENBQUMrQixJQUFJOzRCQUNsQkMsV0FBVztnQ0FFUHJCLEVBQUUsRUFBRSxRQUFRLENBQVBzQixLQUFVO2tEQUNiLE1BQU0sK0RBQUx0QixDQUFFO3dDQUFDTCxTQUFTLEVBQUMsQ0FBeUI7dUNBQUsyQixLQUFLOztnQ0FFbkRwQixFQUFFLEVBQUUsUUFBUSxDQUFQb0IsS0FBVTtrREFDYixNQUFNLCtEQUFMdEIsQ0FBRTt3Q0FBQ0wsU0FBUyxFQUFDLENBQXdCO3VDQUFLMkIsS0FBSzs7Z0NBRWxEQyxFQUFFLEVBQUUsUUFBUTt3Q0FBTEMsUUFBUSxTQUFSQSxRQUFRO2tEQUNiLE1BQU0sK0RBQUxELENBQUU7d0NBQUM1QixTQUFTLEVBQUMsQ0FBZ0I7OzRDQUFDLENBQUM7NENBQUM2QixRQUFROzRDQUFDLENBQUM7Ozs7K0JBRTdDeEIsQ0FBRSxLQUFFLFFBQVEsQ0FBUHNCLEtBQVU7OENBQ2IsTUFBTSwrREFBTHRCLENBQUU7b0NBQUNMLFNBQVMsRUFBQyxDQUF5QjttQ0FBSzJCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuRSxDQUFDO0tBakRRbEMsSUFBSTs7QUFtRGIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzMwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhci5jb21wb25lbnQnXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL3Nhbml0eSdcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xuaW1wb3J0IFBvcnRhYmxlVGV4dCBmcm9tICdyZWFjdC1wb3J0YWJsZS10ZXh0J1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG59XG5cbmZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICB7XG4gICAgICAgIHBvc3QubWFpbkltYWdlICYmIChcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtNDAgdy1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKS51cmwoKX0gYWx0PVwiXCIgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdtYXgtdy0zeGwgbXgtYXV0byBwLTUnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBtdC0xMCBtYi0zJz57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBtYi0yJz57cG9zdC5kZXNjcmlwdGlvbn08L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTInPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvc3QuYXV0aG9yLmltYWdlICYmIChcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCIgc3JjPXt1cmxGb3IocG9zdC5hdXRob3IuaW1hZ2UpLnVybCgpfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtZXh0cmFsaWdodCB0ZXh0LXNtJz5Db2RlIHNoYXJlZCBieSA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JlZW4tNjAwJz57cG9zdC5hdXRob3IubmFtZX08L3NwYW4+IC0gUHVibGlzaGVkIGF0IHtuZXcgRGF0ZShwb3N0Ll9jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UG9ydGFibGVUZXh0XG4gICAgICAgICAgICBkYXRhc2V0PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCF9XG4gICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e3Bvc3QuYm9keX1cbiAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGgxOiAocHJvcHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIG15LTUnIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGgyOiAocHJvcHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQgbXktNScgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbGk6ICh7IGNoaWxkcmVuIH06IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWwtNCBsaXN0LWRlc2MnPiB7Y2hpbGRyZW59IDwvbGk+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBoMTogKHByb3BzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBteS01JyB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIl0ge1xuICAgICAgX2lkLFxuICAgICAgc2x1Z3tcbiAgICAgICAgY3VycmVudFxuICAgIH1cbiAgfWBcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3Q6IFBvc3QpID0+IChcbiAgICB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogcG9zdC5zbHVnLmN1cnJlbnRcbiAgICAgIH1cbiAgICB9XG4gICkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuICAgIF9pZCxcbiAgICBfY3JlYXRlZEF0LFxuICAgIHRpdGxlLFxuICAgIGF1dGhvci0+IHtcbiAgICAgIG5hbWUsXG4gICAgICBpbWFnZVxuICAgIH0sXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWFpbkltYWdlLFxuICAgIHNsdWd7XG4gICAgICBjdXJyZW50XG4gICAgfVxuICB9YFxuXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHtcbiAgICBzbHVnOiBwYXJhbXM/LnNsdWcsXG4gIH0pO1xuXG4gIGlmICghcG9zdCkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCwgLy9hZnRlciA2MHMsIGl0J2xsIHVwZGF0ZSB0aGUgb2xkIGNhY2hlZCB2ZXJzaW9uOiBJU1JcbiAgfVxufSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1cmxGb3IiLCJQb3J0YWJsZVRleHQiLCJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwibWFpbkltYWdlIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwidXJsIiwiYWx0IiwiYXJ0aWNsZSIsImgxIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiYXV0aG9yIiwiaW1hZ2UiLCJwIiwic3BhbiIsIm5hbWUiLCJEYXRlIiwiX2NyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiY29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsInByb3BzIiwibGkiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ })

});