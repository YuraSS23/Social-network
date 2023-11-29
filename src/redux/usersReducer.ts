import {v1} from "uuid";
import {ActionType} from "./redux-store";

type LocationType = {
    city: string
    country: string
}

export type userType = {
    id: string
    fullName: string
    status: string
    location: LocationType
    avatar: string
}

export type UsersPageType = {
    users: userType[]
}

const initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            fullName: 'Dimych',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
        {
            id: v1(),
            fullName: 'Valera',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
        {
            id: v1(),
            fullName: 'Svetlana',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        default: {
            return state
        }
    }
}