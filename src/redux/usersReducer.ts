import {ActionType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}

export type userType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: PhotosType
}

export type UsersPageType = {
    users: userType[]
}

const initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW : {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case SET_USERS: {
            return {...state, users: action.users}
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
export type setUsersACType = {
    type: "SET_USERS"
    users: userType[]
}

export const followAC = (userID: string): followACType => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string): unFollowACType =>({type: UNFOLLOW, userID})
export const setUsersAC = (users: userType[]): setUsersACType => ({type: SET_USERS, users})