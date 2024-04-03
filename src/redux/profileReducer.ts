import {v1} from "uuid";
import {ActionType, AppThunk, RootStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = "SET-PROFILE"
const SET_STATUS = 'SET-STATUS'

export type PostType = {
    id: string
    likeCounts: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
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
    userId: string
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
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST : {
            let newPost: PostType = {
                id: v1(),
                likeCounts: 0,
                message: action.payload.postText
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default : {
            return state
        }
    }
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfileActionCreator>
export type setUsersStatusActionType = ReturnType<typeof setUsersStatusActionCreator>

export const addPostActionCreator = (postText: string) => ({type: ADD_POST, payload: {postText}}) as const
export const setUserProfileActionCreator = (profile: ProfileType) =>
    ({type: SET_PROFILE, profile}) as const
export const setUsersStatusActionCreator = (status: string) =>
    ({type: SET_STATUS, status}) as const

export const getUserTC = (userID: string): AppThunk =>
    (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>) => {
        api.getUser(userID)
            .then((data) =>
                dispatch(setUserProfileActionCreator(data))
            )
    }

export const getUsersStatusTC = (userId: string): AppThunk =>
    (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>, getState: () => RootStateType)=> {
        api.getStatus(userId)
            .then(data => {
                dispatch(setUsersStatusActionCreator(data))
            })
    }

export const updateUsersStatusTC = (status: string): AppThunk =>
    (dispatch: ThunkDispatch<ProfilePageType, unknown, ActionType>, getState: () => RootStateType)=> {
        const state = getState()
        if (state.profilePage.profile?.userId === state.auth.data.id) {
            api.updateStatus(status)
                .then(data => {
                    if (data.data.resultCode === 0) {
                        dispatch(setUsersStatusActionCreator(status))
                    }
                })
        }
    }
