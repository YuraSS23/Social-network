import {v1} from "uuid";
import {ActionType, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default : {
            return state
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const