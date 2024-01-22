import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    followAC as follow,
    setCurrentPageAC as setCurrentPage,
    setIsFetchingAC as setIsFetching,
    setUsersAC as setUsers,
    unFollowAC as unFollow,
    UsersPageType,
    userType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=4`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    onPageNumberClick = (clickedTextContent: string | null) => {
        if (clickedTextContent === "В начало") {
            this.props.setIsFetching(true)
            this.props.setCurrentPage(1)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setIsFetching(false)
                })
        } else if (clickedTextContent === "дальше") {
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage + 1}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setIsFetching(false)
                })
            this.props.setCurrentPage(this.props.usersPage.currentPage + 1)
        } else {
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${clickedTextContent}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setIsFetching(false)
                })
            this.props.setCurrentPage(Number(clickedTextContent))
        }
    }

    render() {
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setIsFetching
})(UsersContainer)