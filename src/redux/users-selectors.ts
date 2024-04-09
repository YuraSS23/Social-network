import {RootStateType} from './redux-store';

export const getUsersPage = (state: RootStateType)=> {
    return state.usersPage
}