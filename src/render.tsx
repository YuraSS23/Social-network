import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPostInState, StateType} from "./redux/state";
import React from "react";

export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostInSate={addPostInState}/>
    </BrowserRouter>
        ,document.getElementById('root'));
}

