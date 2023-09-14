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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Fish.module.css */ \"./styles/Fish.module.css\");\n/* harmony import */ var _styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nlet initialState = {\n    score: 0,\n    data: [],\n    lastClick: \"\",\n    time: 0,\n    randTime: null,\n    hurricane: false,\n    lose: false,\n    repetition: 0\n};\nlet reducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case \"addRepetition\":\n            return {\n                ...state,\n                repetition: state.repetition += 1\n            };\n        case \"addTime\":\n            return {\n                ...state,\n                time: state.time += 1\n            };\n        case \"randTime\":\n            return {\n                ...state,\n                randTime: state.randTime == null ? 10 : state.randTime += 10\n            };\n        case \"hurricaneStatus\":\n            return {\n                ...state,\n                hurricane: state.hurricane == false ? true : false\n            };\n        case \"clearFish\":\n            return {\n                ...state,\n                data: []\n            };\n        case \"gameOver\":\n            return {\n                ...state,\n                hurricane: null,\n                time: null,\n                randTime: null,\n                lose: true\n            };\n        case \"checkClicked\":\n            if (state.lastClick == \"\") {\n                state.lastClick = event.target.id;\n            } else {\n                if (state.lastClick == event.target.id) {\n                    for(let i = 0; i < state.data.length; i++){\n                        if (event.target.id == state.data[i].template.key) {\n                            if (state.data[i].life < 1) {\n                                state.data = state.data.filter((d)=>d.life >= 1);\n                                state.score += 1;\n                                state.lastClick = \"\";\n                                let msg = document.querySelector(\"#side-msg\");\n                                msg.style.display = \"flex\";\n                                setTimeout(()=>msg.style.display = \"none\", 500);\n                            } else {\n                                state.data[i].life -= 1;\n                                state.lastClick = event.target.id;\n                            }\n                        }\n                    }\n                } else {\n                    state.lastClick = event.target.id;\n                }\n            }\n            return {\n                ...state,\n                score: state.score,\n                data: state.data,\n                lastClick: state.lastClick\n            };\n            break;\n        case \"summonFish\":\n            if (state.data.length == 0) {\n                let randomNum = function(num) {\n                    let minimum = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, length = arguments.length > 2 ? arguments[2] : void 0;\n                    let random = Math.floor(Math.random() * (num - length));\n                    return random < minimum ? random + minimum : random;\n                };\n                let minHeight = window.innerHeight / 100 * 8;\n                let random = Math.floor(Math.random() * 7 + 1);\n                for(let i = 0; i < random; i++){\n                    let randomLife = Math.floor(Math.random() * 5);\n                    state.data.push({\n                        template: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: randomLife % 2 == 0 ? (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default().fish) : (_styles_Fish_module_css__WEBPACK_IMPORTED_MODULE_2___default().enemyFish),\n                            id: \"fish-\" + i,\n                            style: {\n                                top: randomNum(window.innerHeight, minHeight, 35) + \"px\",\n                                left: randomNum(window.innerWidth, 0, 35) + \"px\"\n                            }\n                        }, \"fish-\" + i, false, {\n                            fileName: \"D:\\\\projek pribadi\\\\fishing-game\\\\pages\\\\reducers\\\\todoReducer.js\",\n                            lineNumber: 97,\n                            columnNumber: 35\n                        }, _this),\n                        life: randomLife < 2 ? randomLife + 2 : randomLife\n                    });\n                }\n                return {\n                    ...state,\n                    data: state.data,\n                    dataCopy: state.dataCopy\n                };\n            }\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLRCxNQUFNLEtBQU1GLENBQUFBLE1BQU1iLE1BQUs7b0JBQ3BELE9BQU9lLFNBQVNELFVBQVVDLFNBQVNELFVBQVVDO2dCQUNqRDtnQkFFQSxJQUFJRyxZQUFZQyxPQUFPQyxXQUFXLEdBQUcsTUFBTTtnQkFDM0MsSUFBSUwsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRCxNQUFNLEtBQUssSUFBSTtnQkFFNUMsSUFBSyxJQUFJaEIsSUFBSSxHQUFHQSxJQUFJZ0IsUUFBUWhCLElBQUk7b0JBQzVCLElBQUlzQixhQUFhTCxLQUFLQyxLQUFLLENBQUNELEtBQUtELE1BQU0sS0FBSztvQkFFNUN0QixNQUFNVixJQUFJLENBQUN1QyxJQUFJLENBQUM7d0JBQ1pyQix3QkFBVSw4REFBQ3NCOzRCQUFJQyxXQUFXSCxhQUFhLEtBQUssSUFBSXZDLHFFQUFXLEdBQUdBLDBFQUFnQjs0QkFBb0JnQixJQUFJLFVBQVVDOzRCQUNoSFUsT0FBTztnQ0FBQ2tCLEtBQU1mLFVBQVVPLE9BQU9DLFdBQVcsRUFBRUYsV0FBVyxNQUFNO2dDQUM3RFUsTUFBTWhCLFVBQVVPLE9BQU9VLFVBQVUsRUFBRSxHQUFHLE1BQU07NEJBQUk7MkJBRnFDLFVBQVU5Qjs7Ozs7d0JBRy9GSSxNQUFNa0IsYUFBYSxJQUFJQSxhQUFhLElBQUlBO29CQUM1QztnQkFDSjtnQkFFQSxPQUFPO29CQUFDLEdBQUc1QixLQUFLO29CQUFFVixNQUFNVSxNQUFNVixJQUFJO29CQUFFK0MsVUFBVXJDLE1BQU1xQyxRQUFRO2dCQUFBO1lBQ2hFO1FBRUo7WUFDSSxPQUFPckM7SUFDZjtBQUNKO0FBRUEsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVkdWNlcnMvdG9kb1JlZHVjZXIuanM/ZGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9GaXNoLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzY29yZTogMCxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgbGFzdENsaWNrOiAnJyxcclxuICAgIHRpbWU6IDAsXHJcbiAgICByYW5kVGltZTogbnVsbCxcclxuICAgIGh1cnJpY2FuZTogZmFsc2UsXHJcbiAgICBsb3NlOiBmYWxzZSxcclxuICAgIHJlcGV0aXRpb246IDBcclxufVxyXG5cclxubGV0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2FkZFJlcGV0aXRpb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZXBldGl0aW9uOiBzdGF0ZS5yZXBldGl0aW9uICs9IDF9XHJcblxyXG4gICAgICAgIGNhc2UgJ2FkZFRpbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0aW1lOiBzdGF0ZS50aW1lICs9IDEgfTtcclxuXHJcbiAgICAgICAgY2FzZSAncmFuZFRpbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByYW5kVGltZTogc3RhdGUucmFuZFRpbWUgPT0gbnVsbCA/IDEwIDogc3RhdGUucmFuZFRpbWUgKz0gMTBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdodXJyaWNhbmVTdGF0dXMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgaHVycmljYW5lOiBzdGF0ZS5odXJyaWNhbmUgPT0gZmFsc2UgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdjbGVhckZpc2gnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhOiBbXX1cclxuXHJcbiAgICAgICAgY2FzZSAnZ2FtZU92ZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBodXJyaWNhbmU6IG51bGwsIHRpbWU6IG51bGwsIHJhbmRUaW1lOiBudWxsLCBsb3NlOiB0cnVlfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGNhc2UgJ2NoZWNrQ2xpY2tlZCc6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sYXN0Q2xpY2sgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmxhc3RDbGljayA9PSBldmVudC50YXJnZXQuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT0gc3RhdGUuZGF0YVtpXS50ZW1wbGF0ZS5rZXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmRhdGFbaV0ubGlmZSA8IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBzdGF0ZS5kYXRhLmZpbHRlcihkID0+IGQubGlmZSA+PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zY29yZSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmxhc3RDbGljayA9ICcnO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlLW1zZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbXNnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScsIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGF0YVtpXS5saWZlIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGFzdENsaWNrID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogc3RhdGUuc2NvcmUsIFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc3RhdGUuZGF0YSxcclxuICAgICAgICAgICAgICAgIGxhc3RDbGljazogc3RhdGUubGFzdENsaWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3N1bW1vbkZpc2gnOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tTnVtID0gKG51bSwgbWluaW11bSA9IDAsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobnVtIC0gbGVuZ3RoKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFuZG9tIDwgbWluaW11bSA/IHJhbmRvbSArIG1pbmltdW0gOiByYW5kb207XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtaW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDAgKiA4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcgKyAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tTGlmZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogPGRpdiBjbGFzc05hbWU9e3JhbmRvbUxpZmUgJSAyID09IDAgPyBzdHlsZXMuZmlzaCA6IHN0eWxlcy5lbmVteUZpc2h9IGtleT17J2Zpc2gtJyArIGl9IGlkPXsnZmlzaC0nICsgaX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dG9wIDogcmFuZG9tTnVtKHdpbmRvdy5pbm5lckhlaWdodCwgbWluSGVpZ2h0LCAzNSkgKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiByYW5kb21OdW0od2luZG93LmlubmVyV2lkdGgsIDAsIDM1KSArICdweCd9fT48L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZmU6IHJhbmRvbUxpZmUgPCAyID8gcmFuZG9tTGlmZSArIDIgOiByYW5kb21MaWZlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhOiBzdGF0ZS5kYXRhLCBkYXRhQ29weTogc3RhdGUuZGF0YUNvcHl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJkYXRhIiwiaW5pdGlhbFN0YXRlIiwic2NvcmUiLCJsYXN0Q2xpY2siLCJ0aW1lIiwicmFuZFRpbWUiLCJodXJyaWNhbmUiLCJsb3NlIiwicmVwZXRpdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJldmVudCIsInRhcmdldCIsImlkIiwiaSIsImxlbmd0aCIsInRlbXBsYXRlIiwia2V5IiwibGlmZSIsImZpbHRlciIsImQiLCJtc2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmFuZG9tTnVtIiwibnVtIiwibWluaW11bSIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsIm1pbkhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicmFuZG9tTGlmZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJmaXNoIiwiZW5lbXlGaXNoIiwidG9wIiwibGVmdCIsImlubmVyV2lkdGgiLCJkYXRhQ29weSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reducers/todoReducer.js\n"));

/***/ })

});