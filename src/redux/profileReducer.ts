import {v1} from "uuid";
import {ActionType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = "SET-PROFILE"

export type PostType = {
    id: string
    likeCounts: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileType | null
}

export type AddPostActionType = {
    type: "ADD-POST"
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type setUserProfileActionType = {
    type: "SET-PROFILE"
    profile: ProfileType
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
    profile: null
}

export const profileReduser = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
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
        default : {
            return state
        }
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const
export const setUserProfileActionCreator = (profile: ProfileType): setUserProfileActionType => ({
    type: SET_PROFILE,
    profile
}) as const