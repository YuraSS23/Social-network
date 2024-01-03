import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersPageType, userType} from "../../redux/usersReducer";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: string)=>void
    unFollow: (userID: string)=>void
    setUsers: (users: userType[])=>void
    setCurrentPage: (currentPage: number)=>void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: string)=>{
            dispatch(followAC(userID))
        },
        unFollow: (userID: string)=>{
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: userType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)