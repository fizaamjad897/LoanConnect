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

/***/ "./src/components/BorrowerDashboard.tsx":
/*!**********************************************!*\
  !*** ./src/components/BorrowerDashboard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DashboardOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardOverview */ \"./src/components/DashboardOverview.tsx\");\n/* harmony import */ var _CreateLoanForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateLoanForm */ \"./src/components/CreateLoanForm.tsx\");\n/* harmony import */ var _LenderList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LenderList */ \"./src/components/LenderList.tsx\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Messages */ \"./src/components/Messages.tsx\");\n/* harmony import */ var _ProfileManagement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileManagement */ \"./src/components/ProfileManagement.tsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavBar */ \"./src/components/NavBar.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n // Import useRouter for routing\n\n\n\n\n\n\nvar BorrowerDashboard = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // Use the router to access the current path\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"overview\"), 2), activeComponent = _useState[0], setActiveComponent = _useState[1]; // Set default component\n    // Effect to set active component based on the route\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var pathname = router.pathname; // Get the current path\n        switch(pathname){\n            case \"/create-loan\":\n                setActiveComponent(\"create-loan\");\n                break;\n            case \"/lender-list\":\n                setActiveComponent(\"lender-list\");\n                break;\n            case \"/messages\":\n                setActiveComponent(\"messages\");\n                break;\n            case \"/profile-management\":\n                setActiveComponent(\"profile\");\n                break;\n            case \"/\":\n            default:\n                setActiveComponent(\"overview\");\n                break;\n        }\n    }, [\n        router.pathname\n    ]); // Run effect on pathname change\n    // Function to render the component based on active state\n    var renderComponent = function() {\n        switch(activeComponent){\n            case \"create-loan\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateLoanForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 16\n                }, _this);\n            case \"lender-list\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LenderList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 16\n                }, _this);\n            case \"messages\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 16\n                }, _this);\n            case \"profile\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileManagement__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 16\n                }, _this);\n            case \"overview\":\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DashboardOverview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 16\n                }, _this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n        maxW: \"container.xl\",\n        p: 4,\n        mx: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                justify: \"space-between\",\n                align: \"center\",\n                mb: 6,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Heading, {\n                    as: \"h1\",\n                    size: \"xl\",\n                    children: \"Borrower Dashboard\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            renderComponent()\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\SE GP\\\\client\\\\src\\\\components\\\\BorrowerDashboard.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(BorrowerDashboard, \"yFmRKpDU7f64NZGuyUTV8jjBrCI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BorrowerDashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BorrowerDashboard);\nvar _c;\n$RefreshReg$(_c, \"BorrowerDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb3Jyb3dlckRhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNHO0FBQ2QsQ0FBQywrQkFBK0I7QUFDN0I7QUFDRDtBQUNIO0FBQ0w7QUFDUTtBQUNaO0FBRTlCLElBQU1hLG9CQUE4Qjs7SUFDbEMsSUFBTUMsU0FBU1Isc0RBQVNBLElBQUksNENBQTRDO0lBQ3hFLElBQThDSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsaUJBQXhEYSxrQkFBdUNiLGNBQXRCYyxxQkFBc0JkLGNBQThCLHdCQUF3QjtJQUVwRyxvREFBb0Q7SUFDcERELGdEQUFTQSxDQUFDO1FBQ1IsSUFBTSxXQUFlYSxPQUFiRyxVQUFxQix1QkFBdUI7UUFDcEQsT0FBUUE7WUFDTixLQUFLO2dCQUNIRCxtQkFBbUI7Z0JBQ25CO1lBQ0YsS0FBSztnQkFDSEEsbUJBQW1CO2dCQUNuQjtZQUNGLEtBQUs7Z0JBQ0hBLG1CQUFtQjtnQkFDbkI7WUFDRixLQUFLO2dCQUNIQSxtQkFBbUI7Z0JBQ25CO1lBQ0YsS0FBSztZQUNMO2dCQUNFQSxtQkFBbUI7Z0JBQ25CO1FBQ0o7SUFDRixHQUFHO1FBQUNGLE9BQU9HLFFBQVE7S0FBQyxHQUFHLGdDQUFnQztJQUV2RCx5REFBeUQ7SUFDekQsSUFBTUMsa0JBQWtCO1FBQ3RCLE9BQVFIO1lBQ04sS0FBSztnQkFDSCxxQkFBTyw4REFBQ1AsdURBQVVBOzs7OztZQUNwQixLQUFLO2dCQUNILHFCQUFPLDhEQUFDQyxtREFBV0E7Ozs7O1lBQ3JCLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNDLGlEQUFRQTs7Ozs7WUFDbEIsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0MsMERBQU9BOzs7OztZQUNqQixLQUFLO1lBQ0w7Z0JBQ0UscUJBQU8sOERBQUNKLDBEQUFRQTs7Ozs7UUFDcEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSixrREFBR0E7UUFBQ2dCLE1BQUs7UUFBZUMsR0FBRztRQUFHQyxJQUFHOzswQkFDaEMsOERBQUNULCtDQUFNQTs7Ozs7WUFBRzswQkFDViw4REFBQ1IsbURBQUlBO2dCQUFDa0IsU0FBUTtnQkFBZ0JDLE9BQU07Z0JBQVNDLElBQUk7MEJBQy9DLDRFQUFDbkIsc0RBQU9BO29CQUFDb0IsSUFBRztvQkFBS0MsTUFBSzs4QkFBSzs7Ozs7Ozs7Ozs7WUFJNUJSOzs7Ozs7O0FBR1A7R0F2RE1MOztRQUNXUCxrREFBU0E7OztLQURwQk87QUF5RE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Cb3Jyb3dlckRhc2hib2FyZC50c3g/N2ZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyAvLyBJbXBvcnQgdXNlUm91dGVyIGZvciByb3V0aW5nXHJcbmltcG9ydCBPdmVydmlldyBmcm9tIFwiLi9EYXNoYm9hcmRPdmVydmlld1wiO1xyXG5pbXBvcnQgQ3JlYXRlTG9hbiBmcm9tIFwiLi9DcmVhdGVMb2FuRm9ybVwiO1xyXG5pbXBvcnQgVmlld0xlbmRlcnMgZnJvbSBcIi4vTGVuZGVyTGlzdFwiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4vTWVzc2FnZXNcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vUHJvZmlsZU1hbmFnZW1lbnRcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XHJcblxyXG5jb25zdCBCb3Jyb3dlckRhc2hib2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIFVzZSB0aGUgcm91dGVyIHRvIGFjY2VzcyB0aGUgY3VycmVudCBwYXRoXHJcbiAgY29uc3QgW2FjdGl2ZUNvbXBvbmVudCwgc2V0QWN0aXZlQ29tcG9uZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJ292ZXJ2aWV3Jyk7IC8vIFNldCBkZWZhdWx0IGNvbXBvbmVudFxyXG5cclxuICAvLyBFZmZlY3QgdG8gc2V0IGFjdGl2ZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIHJvdXRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJvdXRlcjsgLy8gR2V0IHRoZSBjdXJyZW50IHBhdGhcclxuICAgIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgICAgY2FzZSBcIi9jcmVhdGUtbG9hblwiOlxyXG4gICAgICAgIHNldEFjdGl2ZUNvbXBvbmVudCgnY3JlYXRlLWxvYW4nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIi9sZW5kZXItbGlzdFwiOlxyXG4gICAgICAgIHNldEFjdGl2ZUNvbXBvbmVudCgnbGVuZGVyLWxpc3QnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIi9tZXNzYWdlc1wiOlxyXG4gICAgICAgIHNldEFjdGl2ZUNvbXBvbmVudCgnbWVzc2FnZXMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIi9wcm9maWxlLW1hbmFnZW1lbnRcIjpcclxuICAgICAgICBzZXRBY3RpdmVDb21wb25lbnQoJ3Byb2ZpbGUnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIi9cIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzZXRBY3RpdmVDb21wb25lbnQoJ292ZXJ2aWV3Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pOyAvLyBSdW4gZWZmZWN0IG9uIHBhdGhuYW1lIGNoYW5nZVxyXG5cclxuICAvLyBGdW5jdGlvbiB0byByZW5kZXIgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiBhY3RpdmUgc3RhdGVcclxuICBjb25zdCByZW5kZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGl2ZUNvbXBvbmVudCkge1xyXG4gICAgICBjYXNlIFwiY3JlYXRlLWxvYW5cIjpcclxuICAgICAgICByZXR1cm4gPENyZWF0ZUxvYW4gLz47XHJcbiAgICAgIGNhc2UgXCJsZW5kZXItbGlzdFwiOlxyXG4gICAgICAgIHJldHVybiA8Vmlld0xlbmRlcnMgLz47XHJcbiAgICAgIGNhc2UgXCJtZXNzYWdlc1wiOlxyXG4gICAgICAgIHJldHVybiA8TWVzc2FnZXMgLz47XHJcbiAgICAgIGNhc2UgXCJwcm9maWxlXCI6XHJcbiAgICAgICAgcmV0dXJuIDxQcm9maWxlIC8+O1xyXG4gICAgICBjYXNlIFwib3ZlcnZpZXdcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPE92ZXJ2aWV3IC8+O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1heFc9XCJjb250YWluZXIueGxcIiBwPXs0fSBteD1cImF1dG9cIj5cclxuICAgICAgPE5hdkJhciAvPiAgey8qIFBhc3MgdGhlIHNldHRlciBmdW5jdGlvbiAqL31cclxuICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiIG1iPXs2fT5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cInhsXCI+Qm9ycm93ZXIgRGFzaGJvYXJkPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICB7LyogUmVuZGVyIHRoZSBzZWxlY3RlZCBjb21wb25lbnQgYmVsb3cgdGhlIE5hdmJhciAqL31cclxuICAgICAge3JlbmRlckNvbXBvbmVudCgpfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvcnJvd2VyRGFzaGJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwidXNlUm91dGVyIiwiT3ZlcnZpZXciLCJDcmVhdGVMb2FuIiwiVmlld0xlbmRlcnMiLCJNZXNzYWdlcyIsIlByb2ZpbGUiLCJOYXZCYXIiLCJCb3Jyb3dlckRhc2hib2FyZCIsInJvdXRlciIsImFjdGl2ZUNvbXBvbmVudCIsInNldEFjdGl2ZUNvbXBvbmVudCIsInBhdGhuYW1lIiwicmVuZGVyQ29tcG9uZW50IiwibWF4VyIsInAiLCJteCIsImp1c3RpZnkiLCJhbGlnbiIsIm1iIiwiYXMiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BorrowerDashboard.tsx\n"));

/***/ })

});