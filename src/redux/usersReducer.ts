import {ActionType, AppThunk} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

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
            return {
                ...state,
                isLoading: action.isFetching
                    ? [...state.isLoading, action.userId]
                    : state.isLoading.filter(id => id !== action.userId)
            }
        }
        default: {
            return state
        }
    }
}

export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>
export type setLoadingACType = ReturnType<typeof setLoadingAC>

export const followAC = (userID: string) => ({type: FOLLOW, userID}) as const
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID}) as const
export const setUsersAC = (users: userType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setIsFetchingAC = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching}) as const
export const setLoadingAC = (isFetching: boolean, userId: string) =>
    ({type: SET_LOADING, isFetching, userId}) as const


export const followTC = (userID: string, follow: boolean): AppThunk => (dispatch: ThunkDispatch<UsersPageType, unknown, ActionType>) => {
    dispatch(setLoadingAC(true, userID));
    (follow ? api.follow(userID) : api.unFollow(userID))
        .then(response => {
            if (response.data.resultCode === 0) {
                follow ? dispatch(followAC(userID)) : dispatch(unFollowAC(userID))
            }
            dispatch(setLoadingAC(false, userID))
        })
}

export const getUsersTC = (page: number): AppThunk => (dispatch: ThunkDispatch<UsersPageType, unknown, ActionType>) => {
    dispatch(setCurrentPageAC(page))
    dispatch(setIsFetchingAC(true))
    api.getUsers(page)
        .then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setIsFetchingAC(false))
        })
}