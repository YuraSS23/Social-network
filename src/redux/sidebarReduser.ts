import {SidebarType} from "./store";
import {v1} from "uuid";
import {ActionType} from "./redux-store";

const initialState = {
    friends: [
        {id: v1(), name: 'Dimych', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
        {id: v1(), name: 'Valera', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
        {id: v1(), name: 'Svetlana', avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'},
    ]
}

export const sidebarReduser  = (state:SidebarType=initialState, action: ActionType)=>{
    switch (action.type) {
        default: {
            return state
        }
    }
}