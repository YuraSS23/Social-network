import {StateType, store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store}/>
        </BrowserRouter>
        ,document.getElementById('root'));
}

store.subscribe(renderEntireTree)

renderEntireTree(store.getState())