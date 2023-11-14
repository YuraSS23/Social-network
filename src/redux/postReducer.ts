import {v1} from "uuid";
import {ActionType, MessagesType, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const postsReduser = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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