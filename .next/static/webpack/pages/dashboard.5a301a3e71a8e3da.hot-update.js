"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar NavBar = function(param) {\n    var setActiveComponent = param.setActiveComponent;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        justify: \"space-between\",\n        align: \"center\",\n        p: 4,\n        borderBottom: \"1px\",\n        borderColor: \"gray.200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                as: \"h1\",\n                size: \"lg\",\n                cursor: \"pointer\",\n                children: \"Your App Name\"\n            }, void 0, false, {\n                fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                align: \"center\",\n                gap: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                        \"aria-label\": \"Notifications\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.BellIcon, {}, void 0, false, {\n                            fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 54\n                        }, void 0),\n                        variant: \"outline\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                        src: \"/placeholder-avatar.jpg\",\n                        name: \"John Doe\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                gap: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: function() {\n                            return setActiveComponent(\"overview\");\n                        },\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: function() {\n                            return setActiveComponent(\"create-loan\");\n                        },\n                        children: \"Create Loan\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: function() {\n                            return setActiveComponent(\"lender-list\");\n                        },\n                        children: \"Lender List\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: function() {\n                            return setActiveComponent(\"messages\");\n                        },\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: function() {\n                            return setActiveComponent(\"profile\");\n                        },\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\NavBar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNpRDtBQUMvQjtBQU01QyxJQUFNTyxTQUFnQztRQUFHQywyQkFBQUE7SUFDdkMscUJBQ0UsOERBQUNQLGtEQUFJQTtRQUFDUSxTQUFRO1FBQWdCQyxPQUFNO1FBQVNDLEdBQUc7UUFBR0MsY0FBYTtRQUFNQyxhQUFZOzswQkFDaEYsOERBQUNYLHFEQUFPQTtnQkFBQ1ksSUFBRztnQkFBS0MsTUFBSztnQkFBS0MsUUFBTzswQkFBVTs7Ozs7OzBCQUM1Qyw4REFBQ2Ysa0RBQUlBO2dCQUFDUyxPQUFNO2dCQUFTTyxLQUFLOztrQ0FDeEIsOERBQUNkLHdEQUFVQTt3QkFBQ2UsY0FBVzt3QkFBZ0JDLG9CQUFNLDhEQUFDYixzREFBUUE7Ozs7O3dCQUFLYyxTQUFROzs7Ozs7a0NBQ25FLDhEQUFDaEIsb0RBQU1BO3dCQUFDaUIsS0FBSTt3QkFBMEJDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFN0MsOERBQUNyQixrREFBSUE7Z0JBQUNnQixLQUFLOztrQ0FDVCw4REFBQ1osa0RBQUlBO3dCQUFDa0IsU0FBUzttQ0FBTWYsbUJBQW1COztrQ0FBYTs7Ozs7O2tDQUNyRCw4REFBQ0gsa0RBQUlBO3dCQUFDa0IsU0FBUzttQ0FBTWYsbUJBQW1COztrQ0FBZ0I7Ozs7OztrQ0FDeEQsOERBQUNILGtEQUFJQTt3QkFBQ2tCLFNBQVM7bUNBQU1mLG1CQUFtQjs7a0NBQWdCOzs7Ozs7a0NBQ3hELDhEQUFDSCxrREFBSUE7d0JBQUNrQixTQUFTO21DQUFNZixtQkFBbUI7O2tDQUFhOzs7Ozs7a0NBQ3JELDhEQUFDSCxrREFBSUE7d0JBQUNrQixTQUFTO21DQUFNZixtQkFBbUI7O2tDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUQ7S0FqQk1EO0FBbUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBJY29uQnV0dG9uLCBBdmF0YXIsIExpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgQmVsbEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XHJcbiAgc2V0QWN0aXZlQ29tcG9uZW50OiAoY29tcG9uZW50OiBzdHJpbmcpID0+IHZvaWQ7IC8vIFByb3AgdG8gc2V0IGFjdGl2ZSBjb21wb25lbnRcclxufVxyXG5cclxuY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoeyBzZXRBY3RpdmVDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwiY2VudGVyXCIgcD17NH0gYm9yZGVyQm90dG9tPVwiMXB4XCIgYm9yZGVyQ29sb3I9XCJncmF5LjIwMFwiPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgY3Vyc29yPVwicG9pbnRlclwiPllvdXIgQXBwIE5hbWU8L0hlYWRpbmc+XHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgZ2FwPXs0fT5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiTm90aWZpY2F0aW9uc1wiIGljb249ezxCZWxsSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVcIiAvPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPVwiL3BsYWNlaG9sZGVyLWF2YXRhci5qcGdcIiBuYW1lPVwiSm9obiBEb2VcIiAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxGbGV4IGdhcD17NH0+XHJcbiAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29tcG9uZW50KCdvdmVydmlldycpfT5EYXNoYm9hcmQ8L0xpbms+XHJcbiAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29tcG9uZW50KCdjcmVhdGUtbG9hbicpfT5DcmVhdGUgTG9hbjwvTGluaz5cclxuICAgICAgICA8TGluayBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVDb21wb25lbnQoJ2xlbmRlci1saXN0Jyl9PkxlbmRlciBMaXN0PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNvbXBvbmVudCgnbWVzc2FnZXMnKX0+TWVzc2FnZXM8L0xpbms+XHJcbiAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQ29tcG9uZW50KCdwcm9maWxlJyl9PlByb2ZpbGU8L0xpbms+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbGV4IiwiSGVhZGluZyIsIkljb25CdXR0b24iLCJBdmF0YXIiLCJMaW5rIiwiQmVsbEljb24iLCJOYXZCYXIiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJqdXN0aWZ5IiwiYWxpZ24iLCJwIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJhcyIsInNpemUiLCJjdXJzb3IiLCJnYXAiLCJhcmlhLWxhYmVsIiwiaWNvbiIsInZhcmlhbnQiLCJzcmMiLCJuYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n"));

/***/ })

});