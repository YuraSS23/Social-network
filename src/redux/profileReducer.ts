import {v1} from "uuid";
import {ActionType, AppThunk, RootStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = "SET-PROFILE"
const SET_USERS_STATUS = 'SET-USERS-STATUS'

export type PostType = {
    id: string
    likeCounts: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    status: string
    newPostText: string
    profile: ProfileType | null
}

type PhotosType = {
    small: string
    large: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), likeCounts: 15, message: 'Hi, how are you?'},
        {id: v1(), likeCounts: 20, message: 'It\'s my first post'}
    ],
    newPostText: "",
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST : {
            let newPost: PostType = {
                id: v1(),
                likeCounts: 0,
                message: state.newPostText
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USERS_STATUS: {
            return {...state, status: action.status}
        }
        default : {
            return state
        }
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof changeNewPostTextActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfileActionCreator>
export type SetUsersStatusActionType = ReturnType<typeof setUsersStatusActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const setUserProfileActionCreator = (profile: ProfileType) =>
    ({type: SET_PROFILE, profile}) as const
export const setUsersStatusActionCreator = (status: string) =>
    ({type: SET_USERS_STATUS, status}) as const

export const getUserTC = (userID: string): AppThunk => (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>) => {
    api.getUser(userID)
        .then((data) =>
            dispatch(setUserProfileActionCreator(data))
        )
}
export const getUsersStatusTC =(userId: string): AppThunk =>
    (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>, getState: () => RootStateType)=> {
        api.getStatus(userId)
            .then(data => {
                dispatch(setUsersStatusActionCreator(data))
            })
    }

export const updateUsersStatusTC =(status: string): AppThunk =>
    (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>, getState: () => RootStateType)=> {
        api.updateStatus(status)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setUsersStatusActionCreator(status))
                }
            })
    }