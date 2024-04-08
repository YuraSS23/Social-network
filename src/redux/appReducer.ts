import {ActionType, AppThunk, RootStateType} from './redux-store';
import {ThunkDispatch} from 'redux-thunk';
import {authTC} from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED'

type AppPropsType = {
    initialized: boolean
}

const initialState: AppPropsType = {
    initialized: false
}

export const appReducer = (state: AppPropsType = initialState, action: ActionType)=> {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...state, initialized: action.payload.initialized}
        }
        default: {
            return state
        }
    }
}

export type SetInitializedActionType = ReturnType<typeof setInitializedActionCreator>
export const setInitializedActionCreator = (initialized: boolean) =>
    ({type: SET_INITIALIZED, payload: {initialized}}) as const

export const initializeAppTC =(): AppThunk =>
    (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>)=> {
        dispatch(authTC())
            .then(()=> dispatch(setInitializedActionCreator(true)))
    }