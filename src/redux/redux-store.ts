import {combineReducers, createStore} from "redux";
import {dialogsReduser} from "./dialogsReducer";
import {postsReduser} from "./postReducer";
import {sidebarReduser} from "./sidebarReduser";

let reducers = combineReducers({
    profilePage : postsReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser
})

export let store = createStore(reducers)