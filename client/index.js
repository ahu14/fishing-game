import React from "react";
import ReactDOM from "react-dom/client";
import store from "./reducers/index";
import {Provider} from "react-redux";
import "./index.css";
import Fish from "./App";
//import { BrowserRouter } from "react-router-dom";


let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Fish />
    </Provider>
);

/*root.render(
    <BrowserRouter> 
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);*/