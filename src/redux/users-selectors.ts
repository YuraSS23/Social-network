import {RootStateType} from './redux-store';
import {createSelector} from "reselect";

export const getUsersPageSelector = (state: RootStateType)=> {
    return state.usersPage
}

export const getUsersPage = createSelector(getUsersPageSelector, (usersPage)=> {
    return {...usersPage}
})