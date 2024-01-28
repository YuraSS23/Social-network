import {ActionType} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA'

type authReducerPageType = {
    email: string | null
    userID: string | null
    login: string | null
    isAuth: boolean
}

const initialState: authReducerPageType = {
    email: null,
    userID: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authReducerPageType = initialState, action: ActionType): authReducerPageType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default : {
            return state
        }
    }
}

export type authReducerActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (email: string | null, userID: string | null, login: string | null) => (
    {
        type: SET_USER_DATA,
        data: {
            email,
            userID,
            login
        }
    }) as const