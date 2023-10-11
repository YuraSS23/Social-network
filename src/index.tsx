import {state, subscribe} from "./redux/state";
import {addPostInState, StateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostInSate={addPostInState} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        ,document.getElementById('root'));
}

subscribe(renderEntireTree)

renderEntireTree(state)