import {combineReducers, createStore} from "redux";
import {AddMessageActionType, dialogsReduser, UpdateNewMessageActionType} from "./dialogsReducer";
import {AddPostActionType, profileReduser, setUserProfileActionType, UpdateNewPostActionType} from "./profileReducer";
import {sidebarReduser} from "./sidebarReduser";
import {
    followACType,
    setCurrentPageACType, setIsFetchingACType,
    setUsersACType,
    unFollowACType,
    usersReducer
} from "./usersReducer";

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType
    | UpdateNewMessageActionType | followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setIsFetchingACType | setUserProfileActionType

let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)