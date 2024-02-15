import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    followAC as follow,
    setCurrentPageAC as setCurrentPage,
    setIsFetchingAC as setIsFetching,
    setLoadingAC as setLoading,
    setUsersAC as setUsers,
    unFollowAC as unFollow,
    UsersPageType,
    userType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {api} from "../../api/api";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    setLoading: (isFetching: boolean, userId: string) => void
}

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        api.getUsers(this.props.usersPage.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
    }

    onPageNumberClick = (clickedTextContent: string | null) => {
        if (clickedTextContent === "В начало") {
            this.props.setIsFetching(true)
            this.props.setCurrentPage(1)
            api.getUsers(1)
                .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setIsFetching(false)
                })
        } else if (clickedTextContent === "дальше") {
            this.props.setIsFetching(true)
            api.getUsers(this.props.usersPage.currentPage + 1)
                .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setIsFetching(false)
                })
            this.props.setCurrentPage(this.props.usersPage.currentPage + 1)
        } else {
            this.props.setIsFetching(true)
            api.getUsers(Number(clickedTextContent))
                .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setIsFetching(false)
                })
            this.props.setCurrentPage(Number(clickedTextContent))
        }
    }

    unFollow = (userID: string) => {
        this.props.setLoading(true, userID)
        api.unFollow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userID)
                }
                this.props.setLoading(false, userID)
            })
    }

    follow = (userID: string) => {
        this.props.setLoading(true, userID)
        api.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userID)
                }
                this.props.setLoading(false, userID)
            })
    }

    render() {
        return <Users onPageNumberClick={this.onPageNumberClick}
                      usersPage={this.props.usersPage}
            follow={this.follow}
            unFollow={this.unFollow}
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
    setIsFetching,
    setLoading
})(UsersContainer)