import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./main/App";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux/reducers/";

const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})


ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
