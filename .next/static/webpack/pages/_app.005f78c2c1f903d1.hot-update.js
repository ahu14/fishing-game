"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/reducers/todoReducer.js":
/*!***************************************!*\
  !*** ./pages/reducers/todoReducer.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Fish.module.css */ \"./styles/Fish.module.css\");\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nlet initialState = {\n    score: 0,\n    data: [],\n    copyData: null,\n    lastClick: \"\",\n    time: 0,\n    randTime: null,\n    hurricane: false,\n    lose: false,\n    repetition: 0\n};\nlet reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"addRepetition\":\n            return {\n                ...state,\n                repetition: state.repetition += 1\n            };\n        case \"addTime\":\n            return {\n                ...state,\n                time: state.time += 1\n            };\n        case \"randTime\":\n            return {\n                ...state,\n                randTime: state.randTime == null ? 10 : state.randTime += 10\n            };\n        case \"hurricaneStatus\":\n            return {\n                ...state,\n                hurricane: state.hurricane == false ? true : false\n            };\n        case \"clearFish\":\n            return {\n                ...state,\n                data: []\n            };\n        case \"gameOver\":\n            return {\n                ...state,\n                hurricane: null,\n                time: null,\n                randTime: null,\n                lose: true\n            };\n        case \"checkClicked\":\n            if (state.lastClick == \"\") {\n                state.lastClick = event.target.id;\n                return {\n                    ...state,\n                    lastClick: state.lastClick\n                };\n            } else {\n                if (state.lastClick == event.target.id) {\n                    for(let i = 0; i < state.data.length; i++){\n                        if (event.target.id == state.data[i].template.key) {\n                            if (state.data[i].life < 1) {\n                                state.data = state.data.filter((d)=>d.life >= 1);\n                                state.score += 1;\n                                state.lastClick = \"\";\n                                let msg = document.querySelector(\"#side-msg\");\n                                msg.style.display = \"flex\";\n                                setTimeout(()=>msg.style.display = \"none\", 500);\n                            } else {\n                                state.data[i].life -= 1;\n                                state.lastClick = event.target.id;\n                            }\n                        }\n                    }\n                } else {\n                    console.log(state.copyData);\n                    console.log(state.data);\n                    for(let i = 0; i < state.copyData.length; i++){\n                        console.log(state.data[i]);\n                    //console.log(state.copyData[i].template.key);\n                    }\n                    state.lastClick = event.target.id;\n                }\n            }\n            return {\n                ...state,\n                score: state.score,\n                data: state.data,\n                lastClick: state.lastClick\n            };\n        case \"summonFish\":\n            if (state.data.length == 0) {\n                let randomNum = function(num) {\n                    let minimum = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, length = arguments.length > 2 ? arguments[2] : void 0;\n                    let random = Math.floor(Math.random() * (num - length));\n                    return random < minimum ? random + minimum : random;\n                };\n                let minHeight = window.innerHeight / 100 * 8;\n                let random = Math.floor(Math.random() * 7 + 1);\n                for(let i = 0; i < random; i++){\n                    let randomLife = Math.floor(Math.random() * 5);\n                    state.data.push({\n                        template: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: randomLife % 2 == 0 ? (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default().fish) : (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default().enemyFish),\n                            id: \"fish-\" + i,\n                            style: {\n                                top: randomNum(window.innerHeight, minHeight, 35) + \"px\",\n                                left: randomNum(window.innerWidth, 0, 35) + \"px\"\n                            }\n                        }, \"fish-\" + i, false, {\n                            fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\reducers\\\\todoReducer.js\",\n                            lineNumber: 106,\n                            columnNumber: 35\n                        }, _this),\n                        life: randomLife < 2 ? randomLife + 2 : randomLife\n                    });\n                }\n                state.copyData = JSON.parse(JSON.stringify(state.data));\n                return {\n                    ...state,\n                    data: state.data,\n                    copyData: state.copyData\n                };\n            }\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWR1Y2Vycy90b2RvUmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUVwQyxJQUFJRSxlQUFlO0lBQ2ZDLE9BQU87SUFDUEYsTUFBTSxFQUFFO0lBQ1JHLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLFlBQVk7QUFDaEI7QUFFQSxJQUFJQyxVQUFVO1FBQUNDLHlFQUFRVixjQUFjVztJQUNqQyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2YsS0FBSztZQUNELE9BQU87Z0JBQUMsR0FBR0YsS0FBSztnQkFBRUYsWUFBWUUsTUFBTUYsVUFBVSxJQUFJO1lBQUM7UUFFdkQsS0FBSztZQUNELE9BQU87Z0JBQUMsR0FBR0UsS0FBSztnQkFBRU4sTUFBTU0sTUFBTU4sSUFBSSxJQUFJO1lBQUU7UUFFNUMsS0FBSztZQUNELE9BQU87Z0JBQ0gsR0FBR00sS0FBSztnQkFDUkwsVUFBVUssTUFBTUwsUUFBUSxJQUFJLE9BQU8sS0FBS0ssTUFBTUwsUUFBUSxJQUFJO1lBQzlEO1FBRUosS0FBSztZQUNELE9BQU87Z0JBQ0gsR0FBR0ssS0FBSztnQkFDUkosV0FBV0ksTUFBTUosU0FBUyxJQUFJLFFBQVEsT0FBTztZQUNqRDtRQUVKLEtBQUs7WUFDRCxPQUFPO2dCQUFDLEdBQUdJLEtBQUs7Z0JBQUVYLE1BQU0sRUFBRTtZQUFBO1FBRTlCLEtBQUs7WUFDRCxPQUFPO2dCQUFDLEdBQUdXLEtBQUs7Z0JBQUVKLFdBQVc7Z0JBQU1GLE1BQU07Z0JBQU1DLFVBQVU7Z0JBQU1FLE1BQU07WUFBSTtRQUk3RSxLQUFLO1lBQ0QsSUFBSUcsTUFBTVAsU0FBUyxJQUFJLElBQUc7Z0JBQ3RCTyxNQUFNUCxTQUFTLEdBQUdVLE1BQU1DLE1BQU0sQ0FBQ0MsRUFBRTtnQkFDakMsT0FBTztvQkFBQyxHQUFHTCxLQUFLO29CQUFFUCxXQUFXTyxNQUFNUCxTQUFTO2dCQUFBO1lBQ2hELE9BRUk7Z0JBQ0EsSUFBSU8sTUFBTVAsU0FBUyxJQUFJVSxNQUFNQyxNQUFNLENBQUNDLEVBQUUsRUFBQztvQkFDbkMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlOLE1BQU1YLElBQUksQ0FBQ2tCLE1BQU0sRUFBRUQsSUFBSTt3QkFDdkMsSUFBSUgsTUFBTUMsTUFBTSxDQUFDQyxFQUFFLElBQUlMLE1BQU1YLElBQUksQ0FBQ2lCLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDQyxHQUFHLEVBQUM7NEJBQzlDLElBQUlULE1BQU1YLElBQUksQ0FBQ2lCLEVBQUUsQ0FBQ0ksSUFBSSxHQUFHLEdBQUU7Z0NBQ3ZCVixNQUFNWCxJQUFJLEdBQUdXLE1BQU1YLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUYsSUFBSSxJQUFJO2dDQUM5Q1YsTUFBTVQsS0FBSyxJQUFJO2dDQUNmUyxNQUFNUCxTQUFTLEdBQUc7Z0NBRWxCLElBQUlvQixNQUFNQyxTQUFTQyxhQUFhLENBQUM7Z0NBQ2pDRixJQUFJRyxLQUFLLENBQUNDLE9BQU8sR0FBRztnQ0FDcEJDLFdBQVcsSUFBTUwsSUFBSUcsS0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFBUTs0QkFDakQsT0FFSTtnQ0FDQWpCLE1BQU1YLElBQUksQ0FBQ2lCLEVBQUUsQ0FBQ0ksSUFBSSxJQUFJO2dDQUN0QlYsTUFBTVAsU0FBUyxHQUFHVSxNQUFNQyxNQUFNLENBQUNDLEVBQUU7NEJBQ3JDO3dCQUNKO29CQUNKO2dCQUNKLE9BRUk7b0JBQ0FjLFFBQVFDLEdBQUcsQ0FBQ3BCLE1BQU1SLFFBQVE7b0JBQzFCMkIsUUFBUUMsR0FBRyxDQUFDcEIsTUFBTVgsSUFBSTtvQkFFdEIsSUFBSyxJQUFJaUIsSUFBSSxHQUFHQSxJQUFJTixNQUFNUixRQUFRLENBQUNlLE1BQU0sRUFBRUQsSUFBSTt3QkFDM0NhLFFBQVFDLEdBQUcsQ0FBQ3BCLE1BQU1YLElBQUksQ0FBQ2lCLEVBQUU7b0JBQ3pCLDhDQUE4QztvQkFDbEQ7b0JBRUFOLE1BQU1QLFNBQVMsR0FBR1UsTUFBTUMsTUFBTSxDQUFDQyxFQUFFO2dCQUNyQztZQUNKO1lBRUEsT0FBTztnQkFDSCxHQUFHTCxLQUFLO2dCQUNSVCxPQUFPUyxNQUFNVCxLQUFLO2dCQUNsQkYsTUFBTVcsTUFBTVgsSUFBSTtnQkFDaEJJLFdBQVdPLE1BQU1QLFNBQVM7WUFDOUI7UUFFSixLQUFLO1lBQ0QsSUFBSU8sTUFBTVgsSUFBSSxDQUFDa0IsTUFBTSxJQUFJLEdBQUU7Z0JBQ3ZCLElBQUljLFlBQVksU0FBQ0M7d0JBQUtDLDJFQUFVLEdBQUdoQjtvQkFDL0IsSUFBSWlCLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0QsTUFBTSxLQUFNRixDQUFBQSxNQUFNZixNQUFLO29CQUNwRCxPQUFPaUIsU0FBU0QsVUFBVUMsU0FBU0QsVUFBVUM7Z0JBQ2pEO2dCQUVBLElBQUlHLFlBQVlDLE9BQU9DLFdBQVcsR0FBRyxNQUFNO2dCQUMzQyxJQUFJTCxTQUFTQyxLQUFLQyxLQUFLLENBQUNELEtBQUtELE1BQU0sS0FBSyxJQUFJO2dCQUU1QyxJQUFLLElBQUlsQixJQUFJLEdBQUdBLElBQUlrQixRQUFRbEIsSUFBSTtvQkFDNUIsSUFBSXdCLGFBQWFMLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0QsTUFBTSxLQUFLO29CQUU1Q3hCLE1BQU1YLElBQUksQ0FBQzBDLElBQUksQ0FBQzt3QkFDWnZCLHdCQUFVLDhEQUFDd0I7NEJBQUlDLFdBQVdILGFBQWEsS0FBSyxJQUFJMUMscUVBQVcsR0FBR0EsMEVBQWdCOzRCQUFvQmlCLElBQUksVUFBVUM7NEJBQ2hIVSxPQUFPO2dDQUFDb0IsS0FBTWYsVUFBVU8sT0FBT0MsV0FBVyxFQUFFRixXQUFXLE1BQU07Z0NBQzdEVSxNQUFNaEIsVUFBVU8sT0FBT1UsVUFBVSxFQUFFLEdBQUcsTUFBTTs0QkFBSTsyQkFGcUMsVUFBVWhDOzs7Ozt3QkFHL0ZJLE1BQU1vQixhQUFhLElBQUlBLGFBQWEsSUFBSUE7b0JBQzVDO2dCQUNKO2dCQUVBOUIsTUFBTVIsUUFBUSxHQUFHK0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUN6QyxNQUFNWCxJQUFJO2dCQUNyRCxPQUFPO29CQUFDLEdBQUdXLEtBQUs7b0JBQUVYLE1BQU1XLE1BQU1YLElBQUk7b0JBQUVHLFVBQVVRLE1BQU1SLFFBQVE7Z0JBQUE7WUFDaEU7UUFFSjtZQUNJLE9BQU9RO0lBQ2Y7QUFDSjtBQUVBLCtEQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZHVjZXJzL3RvZG9SZWR1Y2VyLmpzP2RiOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvRmlzaC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XHJcblxyXG5sZXQgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2NvcmU6IDAsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGNvcHlEYXRhOiBudWxsLFxyXG4gICAgbGFzdENsaWNrOiAnJyxcclxuICAgIHRpbWU6IDAsXHJcbiAgICByYW5kVGltZTogbnVsbCxcclxuICAgIGh1cnJpY2FuZTogZmFsc2UsXHJcbiAgICBsb3NlOiBmYWxzZSxcclxuICAgIHJlcGV0aXRpb246IDBcclxufVxyXG5cclxubGV0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2FkZFJlcGV0aXRpb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZXBldGl0aW9uOiBzdGF0ZS5yZXBldGl0aW9uICs9IDF9XHJcblxyXG4gICAgICAgIGNhc2UgJ2FkZFRpbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0aW1lOiBzdGF0ZS50aW1lICs9IDEgfTtcclxuXHJcbiAgICAgICAgY2FzZSAncmFuZFRpbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByYW5kVGltZTogc3RhdGUucmFuZFRpbWUgPT0gbnVsbCA/IDEwIDogc3RhdGUucmFuZFRpbWUgKz0gMTBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdodXJyaWNhbmVTdGF0dXMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgaHVycmljYW5lOiBzdGF0ZS5odXJyaWNhbmUgPT0gZmFsc2UgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdjbGVhckZpc2gnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhOiBbXX1cclxuXHJcbiAgICAgICAgY2FzZSAnZ2FtZU92ZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBodXJyaWNhbmU6IG51bGwsIHRpbWU6IG51bGwsIHJhbmRUaW1lOiBudWxsLCBsb3NlOiB0cnVlfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGNhc2UgJ2NoZWNrQ2xpY2tlZCc6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sYXN0Q2xpY2sgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGFzdENsaWNrOiBzdGF0ZS5sYXN0Q2xpY2t9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGFzdENsaWNrID09IGV2ZW50LnRhcmdldC5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PSBzdGF0ZS5kYXRhW2ldLnRlbXBsYXRlLmtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZGF0YVtpXS5saWZlIDwgMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGF0YSA9IHN0YXRlLmRhdGEuZmlsdGVyKGQgPT4gZC5saWZlID49IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNjb3JlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gJyc7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGUtbXNnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtc2cuc3R5bGUuZGlzcGxheSA9ICdub25lJywgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhW2ldLmxpZmUgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0Q2xpY2sgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5jb3B5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29weURhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF0ZS5jb3B5RGF0YVtpXS50ZW1wbGF0ZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogc3RhdGUuc2NvcmUsIFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3RDbGljazogc3RhdGUubGFzdENsaWNrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSAnc3VtbW9uRmlzaCc6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21OdW0gPSAobnVtLCBtaW5pbXVtID0gMCwgbGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChudW0gLSBsZW5ndGgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByYW5kb20gPCBtaW5pbXVtID8gcmFuZG9tICsgbWluaW11bSA6IHJhbmRvbTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDEwMCAqIDg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb21MaWZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiA8ZGl2IGNsYXNzTmFtZT17cmFuZG9tTGlmZSAlIDIgPT0gMCA/IHN0eWxlcy5maXNoIDogc3R5bGVzLmVuZW15RmlzaH0ga2V5PXsnZmlzaC0nICsgaX0gaWQ9eydmaXNoLScgKyBpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0b3AgOiByYW5kb21OdW0od2luZG93LmlubmVySGVpZ2h0LCBtaW5IZWlnaHQsIDM1KSArICdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHJhbmRvbU51bSh3aW5kb3cuaW5uZXJXaWR0aCwgMCwgMzUpICsgJ3B4J319PjwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlmZTogcmFuZG9tTGlmZSA8IDIgPyByYW5kb21MaWZlICsgMiA6IHJhbmRvbUxpZmVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvcHlEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhOiBzdGF0ZS5kYXRhLCBjb3B5RGF0YTogc3RhdGUuY29weURhdGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJkYXRhIiwiaW5pdGlhbFN0YXRlIiwic2NvcmUiLCJjb3B5RGF0YSIsImxhc3RDbGljayIsInRpbWUiLCJyYW5kVGltZSIsImh1cnJpY2FuZSIsImxvc2UiLCJyZXBldGl0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImV2ZW50IiwidGFyZ2V0IiwiaWQiLCJpIiwibGVuZ3RoIiwidGVtcGxhdGUiLCJrZXkiLCJsaWZlIiwiZmlsdGVyIiwiZCIsIm1zZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwicmFuZG9tTnVtIiwibnVtIiwibWluaW11bSIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsIm1pbkhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicmFuZG9tTGlmZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJmaXNoIiwiZW5lbXlGaXNoIiwidG9wIiwibGVmdCIsImlubmVyV2lkdGgiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reducers/todoReducer.js\n"));

/***/ })

});