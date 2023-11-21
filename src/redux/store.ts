import {v1} from "uuid";
import {dialogsReduser} from "./dialogsReducer";
import {postsReduser} from "./postReducer";
import {sidebarReduser} from "./sidebarReduser";

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
    getState: ()=>StateType
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
        dialogsReduser(this._state.dialogsPage, action)
        postsReduser(this._state.profilePage, action)
        sidebarReduser(this._state.sidebar, action)
        this._callSubscriber(store._state)
    }
}