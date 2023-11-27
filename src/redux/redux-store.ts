import {combineReducers, createStore} from "redux";
import {AddMessageActionType, dialogsReduser, UpdateNewMessageActionType} from "./dialogsReducer";
import {AddPostActionType, postsReduser, UpdateNewPostActionType} from "./postReducer";
import {sidebarReduser} from "./sidebarReduser";

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType

let reducers = combineReducers({
    profilePage : postsReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser
})

export let store = createStore(reducers)

export type StoreType = typeof store