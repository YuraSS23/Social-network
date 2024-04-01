import {v1} from "uuid";
import {ActionType} from "./redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE'

type MessagesType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    payload: {
        message: string
    }
}

const initialState: MessagesPageType = {
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
    ]
}

export const dialogsReduser = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage: MessagesType = {
                id: v1(),
                message: action.payload.message
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        default: {
            return state
        }
    }
}

export const addMessageActionCreator = (message: string): AddMessageActionType =>
    ({type: ADD_MESSAGE, payload: {message}}) as const