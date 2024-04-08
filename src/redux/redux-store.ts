import {applyMiddleware, combineReducers, createStore} from "redux";
import {AddMessageActionType, dialogsReduser} from "./dialogsReducer";
import {
    AddPostActionType,
    profileReducer,
    setUserProfileActionType, setUsersStatusActionType,
} from "./profileReducer";
import {sidebarReduser} from "./sidebarReduser";
import {
    followACType,
    setCurrentPageACType, setFilterActionType, setIsFetchingACType, setLoadingACType,
    setUsersACType,
    unFollowACType,
    usersReducer
} from "./usersReducer";
import {authReducer, authReducerActionType} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer, SetInitializedActionType} from "./appReducer";

export type ActionType = AddPostActionType | AddMessageActionType
    | followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setIsFetchingACType | setUserProfileActionType | authReducerActionType | setLoadingACType
    | setUsersStatusActionType | setFilterActionType | SetInitializedActionType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionType>

export type RootStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))