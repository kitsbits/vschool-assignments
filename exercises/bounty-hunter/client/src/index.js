import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./main/App";
import reducer from "./redux/reducers";
import {BrowserRouter as Router} from "react-router-dom";

import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));
