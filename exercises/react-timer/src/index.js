// 1) Display Minutes and Seconds
// use Date() --> look it up

// 2) Start Button

// 3) Stop Button

// 4) Reset Button

// 5) Style creatively using whatever CSS tools you prefer

// Your redux state should contain the current time, defaulted to zero.
// You will need a component to display the time, as well as a separate component which contains the buttons.

//

import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux/reducers/"

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
