import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddMessageActionType, dialogsReduser, UpdateNewMessageActionType} from "./dialogsReducer";
import {
    AddPostActionType,
    profileReducer,
    setUserProfileActionType,
    UpdateNewPostActionType
} from "./profileReducer";
import {sidebarReduser} from "./sidebarReduser";
import {
    followACType,
    setCurrentPageACType, setIsFetchingACType, setLoadingACType,
    setUsersACType,
    unFollowACType,
    usersReducer
} from "./usersReducer";
import {authReducer, authReducerActionType} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType
    | UpdateNewMessageActionType | followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setIsFetchingACType | setUserProfileActionType | authReducerActionType | setLoadingACType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionType>

export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))