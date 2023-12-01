import {combineReducers, createStore} from "redux";
import {AddMessageActionType, dialogsReduser, UpdateNewMessageActionType} from "./dialogsReducer";
import {AddPostActionType, postsReduser, UpdateNewPostActionType} from "./postReducer";
import {sidebarReduser} from "./sidebarReduser";
import {followACType, unFollowACType, usersReducer} from "./usersReducer";

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType | followACType | unFollowACType

let rootReducer = combineReducers({
    profilePage : postsReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)