import {ActionTypes} from "redux-form";
import {v1} from "uuid";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'



export type PostType = {
    id: string
    likeCounts: number
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type FriendType = {
    id: string
    name:string
    avatar: string
}

export type SidebarType = {
    friends: FriendType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType)=>void
    subscribe: (observer: (state: StateType) => void)=>void
    dispatch: (action: ActionType)=>void
}

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), likeCounts: 15, message: 'Hi, how are you?'},
                {id: v1(), likeCounts: 20, message: 'It\'s my first post'}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sidebar : {
            friends: [
                {id: v1(), name: 'Dimych', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
                {id: v1(), name: 'Valera', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
                {id: v1(), name: 'Svetlana', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
            ]
        }
    },
    _callSubscriber(state: StateType) {},

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case ADD_POST :
                let newPost: PostType =  {
                    id: v1(),
                    likeCounts: 0,
                    message: this._state.profilePage.newPostText
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ""
                this._callSubscriber(this._state)
            break
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
            break
            case ADD_MESSAGE :
                let newMessage: MessagesType =  {
                    id: v1(),
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ""
                this._callSubscriber(this._state)
                break
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText
                this._callSubscriber(this._state)
                break

        }
    }
}

export const addPostActionCreator = ()=> ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator =(text: string)=> ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const
export const addMessageActionCreator = ()=> ({type: ADD_MESSAGE}) as const
export const changeNewMessageTextActionCreator =(text: string)=> ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}) as const