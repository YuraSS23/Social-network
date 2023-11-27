import {v1} from "uuid";
import {PostType, ProfilePageType} from "./store";
import {ActionType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type AddPostActionType = {
    type: "ADD-POST"
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const initialState = {
    posts: [
        {id: v1(), likeCounts: 15, message: 'Hi, how are you?'},
        {id: v1(), likeCounts: 20, message: 'It\'s my first post'}
    ],
    newPostText: ""
}

export const postsReduser = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
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
        default : {
            return state
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const