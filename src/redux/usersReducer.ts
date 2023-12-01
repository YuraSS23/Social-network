import {v1} from "uuid";
import {ActionType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

type LocationType = {
    city: string
    country: string
}

export type userType = {
    id: string
    followed: boolean
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
            followed: false,
            fullName: 'Dimych',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Valera',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Svetlana',
            status: "I am Boss",
            location: {city: "Minsk", country: "Belarus"},
            avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW : {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        default: {
            return state
        }
    }
}

export type followACType = {
    type: "FOLLOW"
    userID: string
}
export type unFollowACType = {
    type: "UNFOLLOW"
    userID: string
}

export const followAC = (userID: string): followACType => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string): unFollowACType =>({type: UNFOLLOW, userID})