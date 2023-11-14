import {v1} from "uuid";
import {ActionType, MessagesPageType, MessagesType, PostType, ProfilePageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReduser = (state: MessagesPageType, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) as const
export const changeNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
}) as const