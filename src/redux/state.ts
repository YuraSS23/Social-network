import {ActionTypes} from "redux-form";
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    likeCounts: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type FriendType = {
    id: number
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

export type ActionType = AddPostActionType | UpdateNewPostActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCounts: 15, message: 'Hi, how are you?'},
                {id: 2, likeCounts: 20, message: 'It\'s my first post'}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Oleg'},
                {id: 5, name: 'Igor'},
                {id: 6, name: 'Tolik'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'This is IT-kamasutra'},
                {id: 4, message: 'Bye'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'Hi'},
            ]
        },
        sidebar : {
            friends: [
                {id: 1, name: 'Dimych', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
                {id: 2, name: 'Valera', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
                {id: 3, name: 'Svetlana', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
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
                    id: new Date().getTime(),
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
            default:
            break
        }
    }
}

export const addPostActionCreator = ()=> ({type: ADD_POST}) as const
export const changeNewPostTextActionCreator =(text: string)=> ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const