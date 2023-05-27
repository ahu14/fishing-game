import reducer from "./todoReducer";
import {createStore} from "redux";

let store = createStore(reducer);
export default store;