exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 5312:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "Fish_body__BwgF3",
	"playerStatus": "Fish_playerStatus__dub8x",
	"fish": "Fish_fish__cnp9_",
	"enemyFish": "Fish_enemyFish__PHgI7",
	"image": "Fish_image__dBKGb",
	"sideMsg": "Fish_sideMsg__DLufg",
	"wordMsg": "Fish_wordMsg__qMMBy",
	"btn": "Fish_btn__Uhyth",
	"startBtn": "Fish_startBtn__pkfon",
	"middleSection": "Fish_middleSection__hK_jK",
	"msgGameOverBox": "Fish_msgGameOverBox__xH5yq",
	"randTime": "Fish_randTime__ErPNX",
	"msgGameOver": "Fish_msgGameOver__bqMN9",
	"btnGameOver": "Fish_btnGameOver__Tl94Q"
};


/***/ }),

/***/ 5366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./styles/Fish.module.css
var Fish_module = __webpack_require__(5312);
var Fish_module_default = /*#__PURE__*/__webpack_require__.n(Fish_module);
;// CONCATENATED MODULE: ./lib/reducers/todoReducer.js


let initialState = {
    score: 0,
    data: [],
    copyData: null,
    lastClick: "",
    time: 0,
    randTime: null,
    hurricane: false,
    lose: false,
    repetition: 0
};
let reducer = (state = initialState, action)=>{
    switch(action.type){
        case "addRepetition":
            return {
                ...state,
                repetition: state.repetition += 1
            };
        case "addTime":
            return {
                ...state,
                time: state.time += 1
            };
        case "randTime":
            return {
                ...state,
                randTime: state.randTime == null ? 10 : state.randTime += 10
            };
        case "hurricaneStatus":
            return {
                ...state,
                hurricane: state.hurricane == false ? true : false
            };
        case "clearFish":
            return {
                ...state,
                data: []
            };
        case "gameOver":
            return {
                ...state,
                hurricane: null,
                time: null,
                randTime: null,
                lose: true
            };
        case "checkClicked":
            if (state.lastClick == "") {
                state.lastClick = event.target.id;
                return {
                    ...state,
                    lastClick: state.lastClick
                };
            } else {
                if (state.lastClick == event.target.id) {
                    for(let i = 0; i < state.data.length; i++){
                        if (event.target.id == state.data[i].template.key) {
                            if (state.data[i].life < 1) {
                                state.data = state.data.filter((d)=>d.life >= 1);
                                state.score += 1;
                                state.lastClick = "";
                                let msg = document.querySelector("#side-msg");
                                msg.style.display = "flex";
                                setTimeout(()=>msg.style.display = "none", 500);
                            } else {
                                state.data[i].life -= 1;
                                state.lastClick = event.target.id;
                            }
                        }
                    }
                } else {
                    for(let i = 0; i < state.copyData.length; i++){
                        if (state.data[i] != undefined) {
                            state.data[i].life = state.copyData[i].life;
                        }
                    }
                    state.lastClick = event.target.id;
                }
            }
            return {
                ...state,
                score: state.score,
                data: state.data,
                lastClick: state.lastClick
            };
        case "summonFish":
            if (state.data.length == 0) {
                let randomNum = (num, minimum = 0, length)=>{
                    let random = Math.floor(Math.random() * (num - length));
                    return random < minimum ? random + minimum : random;
                };
                let minHeight = window.innerHeight / 100 * 8;
                let random = Math.floor(Math.random() * 7 + 1);
                for(let i = 0; i < random; i++){
                    let randomLife = Math.floor(Math.random() * 5);
                    state.data.push({
                        template: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: randomLife % 2 == 0 ? (Fish_module_default()).fish : (Fish_module_default()).enemyFish,
                            id: "fish-" + i,
                            style: {
                                top: randomNum(window.innerHeight, minHeight, 35) + "px",
                                left: randomNum(window.innerWidth, 0, 35) + "px"
                            }
                        }, "fish-" + i),
                        life: randomLife < 2 ? randomLife + 2 : randomLife
                    });
                }
                state.copyData = JSON.parse(JSON.stringify(state.data));
                return {
                    ...state,
                    data: state.data,
                    copyData: state.copyData
                };
            }
        default:
            return state;
    }
};
/* harmony default export */ const todoReducer = (reducer);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./lib/reducers/index.js


let store = (0,external_redux_.createStore)(todoReducer);
/* harmony default export */ const reducers = (store);

;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: reducers,
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Fishing Game"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "fishing, fishing game, fish"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "ahu14"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;