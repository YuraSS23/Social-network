import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersPageType, userType} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: string)=>void
    unFollow: (userID: string)=>void
    setUsers: (users: userType[])=>void
    setCurrentPage: (currentPage: number)=>void
}

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=4`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageNumberClick  = (clickedTextContent: string | null) => {
        if (clickedTextContent === "В начало") {
            this.props.setCurrentPage(1)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        } else if (clickedTextContent === "дальше") {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage+1}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
            this.props.setCurrentPage(this.props.usersPage.currentPage+1)
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${clickedTextContent}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
            this.props.setCurrentPage(Number(clickedTextContent))
        }
    }
    render (){
        return <Users onPageNumberClick={this.onPageNumberClick}
                      usersPage={this.props.usersPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)