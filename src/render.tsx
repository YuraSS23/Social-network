import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPostInState, StateType, updateNewPostText} from "./redux/state";
import React from "react";

export const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostInSate={addPostInState} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
        ,document.getElementById('root'));
}

