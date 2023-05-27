import React from "react";
import ReactDOM from "react-dom/client";
import store from "./reducers/index";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";


let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);