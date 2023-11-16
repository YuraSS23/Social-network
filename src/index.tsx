import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}

renderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    renderEntireTree(state)
})

