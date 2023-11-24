import {v1} from "uuid";
import {ActionType, MessagesPageType, MessagesType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Svetlana'},
        {id: v1(), name: 'Oleg'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Tolik'}
    ],
        messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'This is IT-kamasutra'},
        {id: v1(), message: 'Bye'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hi'},
    ],
        newMessageText: "",
}

export const dialogsReduser = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText
            }
            state.newMessageText = ""
            return {...state, messages: [...state.messages, newMessage]}
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText}
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