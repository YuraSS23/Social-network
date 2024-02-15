import {ActionType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_LOADING = "SET_LOADING"

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
    currentPage: number
    pages: number[]
    isFetching: boolean
    isLoading: string[]
}

const initialState: UsersPageType = {
    users: [],
    currentPage: 1,
    pages: [1, 2, 3, 4, 5],
    isFetching: false,
    isLoading: []
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
        case SET_CURRENT_PAGE: {
            if (action.currentPage > 3) {
                return {
                    ...state,
                    pages: state.pages.map((el, index) => index - 2 + action.currentPage),
                    currentPage: action.currentPage
                }
            } else return {...state, pages: [1, 2, 3, 4, 5], currentPage: action.currentPage}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_LOADING: {
            return {...state,
                isLoading: action.isFetching
                ? [...state.isLoading, action.userId]
                : state.isLoading.filter(id => id !== action.userId)}
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
export type setCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setIsFetchingACType = {
    type: "SET_IS_FETCHING"
    isFetching: boolean
}
export type setLoadingACType = {
    type: "SET_LOADING"
    isFetching: boolean
    userId: string
}

export const followAC = (userID: string): followACType => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string): unFollowACType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: userType[]): setUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingACType => ({type: SET_IS_FETCHING, isFetching})
export const setLoadingAC = (isFetching: boolean, userId: string): setLoadingACType =>
    ({type: SET_LOADING, isFetching, userId})