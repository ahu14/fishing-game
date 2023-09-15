"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/play",{

/***/ "./pages/play.tsx":
/*!************************!*\
  !*** ./pages/play.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fish; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Fish.module.css */ \"./styles/Fish.module.css\");\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Fish() {\n    _s();\n    let [template, setTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    let [animate, setAnimate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    let [checkBorder, setCheckBorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    let btn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let mainBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state);\n    let score = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.score);\n    let time = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.time);\n    let randTime = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.randTime);\n    let hurricane = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.hurricane);\n    let dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.body.addEventListener(\"click\", (event)=>{\n            dispatch({\n                type: \"checkClicked\"\n            });\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hurricane == true) {\n            setTemplate(template = data.data);\n        }\n        if (template != undefined && template.length > 0) {\n            dispatch({\n                type: \"summonFish\"\n            });\n            setTemplate(template = data.data);\n        }\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (time == randTime) {\n            dispatch({\n                type: \"randTime\"\n            });\n            dispatch({\n                type: \"hurricaneStatus\"\n            });\n        }\n    }, [\n        time,\n        checkBorder\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let youCanMove = (e)=>{\n            if (image.current != null) {\n                let minHeight = window.innerHeight / 100 * 8;\n                let yPos = e.pageY < minHeight ? minHeight : e.pageY;\n                image.current.style.top = yPos - 27 + \"px\";\n                image.current.style.left = e.pageX - 120 + \"px\";\n            }\n        };\n        let startInterval = ()=>{\n            return setInterval(()=>{\n                if (image.current != null) {\n                    let left = parseInt(image.current.style.left);\n                    left = left > -150 ? left -= 4 : left;\n                    image.current.style.left = left + \"px\";\n                }\n            }, 100);\n        };\n        let stopInterval = ()=>clearInterval(animate);\n        if (hurricane == true && hurricane != null) {\n            dispatch({\n                type: \"addRepetition\"\n            });\n            dispatch({\n                type: \"clearFish\"\n            });\n            mainBox.current.style.background = \"#356fb9\";\n            document.onmousemove = ()=>{};\n            btn.current.style.display = \"block\";\n            setAnimate(animate = startInterval());\n        } else {\n            dispatch({\n                type: \"summonFish\"\n            });\n            mainBox.current.style.background = \"#7bb5ff\";\n            document.onmousemove = (e)=>youCanMove(e);\n            btn.current.style.display = \"none\";\n            setAnimate(animate = stopInterval());\n        }\n    }, [\n        hurricane\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let left = parseInt(image.current.style.left);\n        if (left < -120 || left > window.innerWidth - 120) {\n            image.current.style.left = left + \"px\";\n            document.onmousemove = ()=>{};\n            dispatch({\n                type: \"gameOver\"\n            });\n            dispatch({\n                type: \"clearFish\"\n            });\n            let box = document.querySelector(\"#msg-game-over-box\");\n            box.style.display = \"flex\";\n        }\n    }, [\n        time\n    ]);\n    let clicked = (e)=>{\n        let left = parseInt(image.current.style.left) + 10;\n        image.current.style.left = left + \"px\";\n    };\n    let refresh = ()=>window.location.reload();\n    let start = (e)=>{\n        setInterval(()=>{\n            dispatch({\n                type: \"addTime\"\n            });\n        }, 1000);\n        dispatch({\n            type: \"summonFish\"\n        });\n        setTemplate(template = data.data);\n        dispatch({\n            type: \"randTime\"\n        });\n        e.target.remove();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mainBox,\n        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().topSection),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().playerStatus),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            id: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().word),\n                            children: [\n                                \"Fish caught: \",\n                                score\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    id: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().randTime),\n                                    children: [\n                                        parseInt(\"\".concat(randTime - time)),\n                                        \"s\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, this),\n                                \" again when the storm \",\n                                hurricane == false ? \"comes\" : \"end\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().middleSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().sideMsg),\n                        id: \"side-msg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().fish)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().wordMsg),\n                                children: \"+1\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                        ref: image\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"wrapper-box\",\n                        children: template != undefined ? template.map((tem)=>tem.template) : null\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().startBtn),\n                        onClick: start,\n                        children: \"start\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),\n                        ref: btn,\n                        onClick: clicked,\n                        children: \"Click !!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().msgGameOverBox),\n                        id: \"msg-game-over-box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                id: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().msgGameOver),\n                                children: \"You Lose !\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().score),\n                                children: [\n                                    \"Fish caught : \",\n                                    score\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnGameOver),\n                                onClick: refresh,\n                                children: \"Click to play again\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, \"middle-section\", true, {\n                fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n                lineNumber: 138,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\play.tsx\",\n        lineNumber: 129,\n        columnNumber: 9\n    }, this);\n}\n_s(Fish, \"7SjT/qP8hylPXwzyDTSMtLr/pi0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Fish;\nvar _c;\n$RefreshReg$(_c, \"Fish\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV3RCxLQUFLaEQ7d0JBQUtnRSxTQUFTeEI7a0NBQVM7Ozs7OztrQ0FFM0QsOERBQUNPO3dCQUFJRSxXQUFXekQsK0VBQXFCO3dCQUFFNkQsSUFBRzs7MENBQ3RDLDhEQUFDYTtnQ0FBR2IsSUFBSTdELDRFQUFrQjswQ0FBRTs7Ozs7OzBDQUM1Qiw4REFBQzRFO2dDQUFFZixJQUFJN0Qsc0VBQVk7O29DQUFFO29DQUFlYTs7Ozs7OzswQ0FDcEMsOERBQUN5RDtnQ0FBT2IsV0FBV3pELDRFQUFrQjtnQ0FDckN3RSxTQUFTdkI7MENBQVM7Ozs7Ozs7Ozs7Ozs7ZUFuQmdCOzs7Ozs7Ozs7OztBQXdCdEQ7R0E1SndCaEQ7O1FBU1RGLG9EQUFXQTtRQUNWQSxvREFBV0E7UUFDWkEsb0RBQVdBO1FBQ1BBLG9EQUFXQTtRQUNWQSxvREFBV0E7UUFFWkQsb0RBQVdBOzs7S0FmTkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS50c3g/MmRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9GaXNoLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXNoKCl7XHJcbiAgICBsZXQgW3RlbXBsYXRlLCBzZXRUZW1wbGF0ZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBsZXQgW2FuaW1hdGUsIHNldEFuaW1hdGVdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgbGV0IFtjaGVja0JvcmRlciwgc2V0Q2hlY2tCb3JkZXJdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICAgIGxldCBidG46YW55ID0gdXNlUmVmKCk7XHJcbiAgICBsZXQgaW1hZ2U6YW55ID0gdXNlUmVmKCk7XHJcbiAgICBsZXQgbWFpbkJveDphbnkgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlKTtcclxuICAgIGxldCBzY29yZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnNjb3JlKTtcclxuICAgIGxldCB0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUudGltZSk7XHJcbiAgICBsZXQgcmFuZFRpbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS5yYW5kVGltZSk7XHJcbiAgICBsZXQgaHVycmljYW5lID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUuaHVycmljYW5lKTtcclxuXHJcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdjaGVja0NsaWNrZWQnfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChodXJyaWNhbmUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHNldFRlbXBsYXRlKHRlbXBsYXRlID0gZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRlbXBsYXRlICE9IHVuZGVmaW5lZCAmJiB0ZW1wbGF0ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdzdW1tb25GaXNoJ30pO1xyXG4gICAgICAgICAgICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZSA9IGRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGltZSA9PSByYW5kVGltZSl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAncmFuZFRpbWUnfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnaHVycmljYW5lU3RhdHVzJ30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0aW1lLCBjaGVja0JvcmRlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHlvdUNhbk1vdmUgPSAoZTphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGltYWdlLmN1cnJlbnQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMTAwICogODtcclxuICAgICAgICAgICAgICAgIGxldCB5UG9zID0gZS5wYWdlWSA8IG1pbkhlaWdodCA/IG1pbkhlaWdodCA6IGUucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5jdXJyZW50LnN0eWxlLnRvcCA9ICh5UG9zIC0gMjcpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGltYWdlLmN1cnJlbnQuc3R5bGUubGVmdCA9IChlLnBhZ2VYIC0gMTIwKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGFydEludGVydmFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmN1cnJlbnQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBwYXJzZUludChpbWFnZS5jdXJyZW50LnN0eWxlLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0ID4gLTE1MCA/IGxlZnQgLT0gNCA6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UuY3VycmVudC5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdG9wSW50ZXJ2YWwgPSAoKSA9PiBjbGVhckludGVydmFsKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICBpZiAoaHVycmljYW5lID09IHRydWUgJiYgaHVycmljYW5lICE9IG51bGwpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ2FkZFJlcGV0aXRpb24nfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnY2xlYXJGaXNoJ30pO1xyXG5cclxuICAgICAgICAgICAgbWFpbkJveC5jdXJyZW50LnN0eWxlLmJhY2tncm91bmQgPSAnIzM1NmZiOSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKCkgPT4ge31cclxuXHJcbiAgICAgICAgICAgIGJ0bi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGUoYW5pbWF0ZSA9IHN0YXJ0SW50ZXJ2YWwoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNleyBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdzdW1tb25GaXNoJ30pO1xyXG4gICAgICAgICAgICBtYWluQm94LmN1cnJlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjN2JiNWZmJztcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4geW91Q2FuTW92ZShlKTtcclxuICAgICAgICAgICAgYnRuLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgc2V0QW5pbWF0ZShhbmltYXRlID0gc3RvcEludGVydmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtodXJyaWNhbmVdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbGVmdCA9IHBhcnNlSW50KGltYWdlLmN1cnJlbnQuc3R5bGUubGVmdCk7XHJcblxyXG4gICAgICAgIGlmIChsZWZ0IDwgLTEyMCB8fCBsZWZ0ID4gKHdpbmRvdy5pbm5lcldpZHRoIC0gMTIwKSl7XHJcbiAgICAgICAgICAgIGltYWdlLmN1cnJlbnQuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9ICgpID0+IHt9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ2dhbWVPdmVyJ30pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ2NsZWFyRmlzaCd9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBib3g6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21zZy1nYW1lLW92ZXItYm94Jyk7XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RpbWVdKTtcclxuXHJcblxyXG4gICAgbGV0IGNsaWNrZWQgPSAoZTphbnkpID0+IHtcclxuICAgICAgICBsZXQgbGVmdCA9IHBhcnNlSW50KGltYWdlLmN1cnJlbnQuc3R5bGUubGVmdCkgKyAxMDtcclxuICAgICAgICBpbWFnZS5jdXJyZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JzsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxldCByZWZyZXNoID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICAgIGxldCBzdGFydCA9IChlOmFueSkgPT4ge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdhZGRUaW1lJ30pO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ3N1bW1vbkZpc2gnfSk7XHJcbiAgICAgICAgc2V0VGVtcGxhdGUodGVtcGxhdGUgPSBkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ3JhbmRUaW1lJ30pO1xyXG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e21haW5Cb3h9IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcFNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJTdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBpZD17c3R5bGVzLndvcmR9PkZpc2ggY2F1Z2h0OiB7c2NvcmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gaWQ9e3N0eWxlcy5yYW5kVGltZX0+e3BhcnNlSW50KGAke3JhbmRUaW1lIC0gdGltZX1gKX1zPC9zcGFuPiBhZ2FpbiBcclxuICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBzdG9ybSB7aHVycmljYW5lID09IGZhbHNlID8gXCJjb21lc1wiIDogXCJlbmRcIn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGVTZWN0aW9ufSBrZXk9XCJtaWRkbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlTXNnfSBpZD1cInNpZGUtbXNnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXNofT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMud29yZE1zZ30+KzE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSByZWY9e2ltYWdlfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBwZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RlbXBsYXRlICE9IHVuZGVmaW5lZCA/IHRlbXBsYXRlLm1hcCgodGVtOmFueSkgPT4gdGVtLnRlbXBsYXRlKTogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnRCdG59IG9uQ2xpY2s9e3N0YXJ0fT5zdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IHJlZj17YnRufSBvbkNsaWNrPXtjbGlja2VkfT5DbGljayAhITwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXNnR2FtZU92ZXJCb3h9IGlkPVwibXNnLWdhbWUtb3Zlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9e3N0eWxlcy5tc2dHYW1lT3Zlcn0+WW91IExvc2UgITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9e3N0eWxlcy5zY29yZX0+RmlzaCBjYXVnaHQgOiB7c2NvcmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuR2FtZU92ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZnJlc2h9PkNsaWNrIHRvIHBsYXkgYWdhaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0eWxlcyIsIkZpc2giLCJ0ZW1wbGF0ZSIsInNldFRlbXBsYXRlIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJjaGVja0JvcmRlciIsInNldENoZWNrQm9yZGVyIiwiYnRuIiwiaW1hZ2UiLCJtYWluQm94IiwiZGF0YSIsInN0YXRlIiwic2NvcmUiLCJ0aW1lIiwicmFuZFRpbWUiLCJodXJyaWNhbmUiLCJkaXNwYXRjaCIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInR5cGUiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJ5b3VDYW5Nb3ZlIiwiZSIsImN1cnJlbnQiLCJtaW5IZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInlQb3MiLCJwYWdlWSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBhZ2VYIiwic3RhcnRJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJzdG9wSW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYmFja2dyb3VuZCIsIm9ubW91c2Vtb3ZlIiwiZGlzcGxheSIsImlubmVyV2lkdGgiLCJib3giLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2tlZCIsInJlZnJlc2giLCJsb2NhdGlvbiIsInJlbG9hZCIsInN0YXJ0IiwidGFyZ2V0IiwicmVtb3ZlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwidG9wU2VjdGlvbiIsInBsYXllclN0YXR1cyIsImgzIiwiaWQiLCJ3b3JkIiwic3BhbiIsIm1pZGRsZVNlY3Rpb24iLCJzaWRlTXNnIiwiZmlzaCIsIndvcmRNc2ciLCJtYXAiLCJ0ZW0iLCJidXR0b24iLCJzdGFydEJ0biIsIm9uQ2xpY2siLCJtc2dHYW1lT3ZlckJveCIsImgxIiwibXNnR2FtZU92ZXIiLCJwIiwiYnRuR2FtZU92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/play.tsx\n"));

/***/ })

});