import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import App from "./main/App";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
