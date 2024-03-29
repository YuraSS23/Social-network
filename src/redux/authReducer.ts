import {ActionType, AppThunk} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

export type DataType = {
    id: string | null
    login: string | null
    email: string | null
}

type AuthPropsType = {
    data: DataType
    isAuth: boolean
}

const initialState: AuthPropsType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionType): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        default : {
            return state
        }
    }
}

export type authReducerActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: DataType) => ({type: SET_USER_DATA, data}) as const

export const authTC = (): AppThunk => (dispatch: ThunkDispatch<AuthPropsType, unknown, ActionType>) => {
    api.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data))
            }
        })
}