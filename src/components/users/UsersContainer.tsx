import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {FilterType, followTC, getUsersTC, UsersPageType} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    followTC: (userID: string, follow: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.usersPage.currentPage,
            this.props.usersPage.pageSize,
            this.props.usersPage.filter)
    }

    onPageNumberClick = (clickedTextContent: string | null) => {
        let currentPage = 1
        if (clickedTextContent === "В начало") {
            currentPage = 1
        } else if (clickedTextContent === "дальше") {
            currentPage = this.props.usersPage.currentPage + 1
        } else {
            currentPage = Number(clickedTextContent)
        }
        this.props.getUsersTC(currentPage, this.props.usersPage.pageSize, this.props.usersPage.filter)
    }

    onFilterChanged = (filter: FilterType)=> {
        this.props.getUsersTC(1, this.props.usersPage.pageSize, filter)
    }

    unFollow = (userID: string) => {
        this.props.followTC(userID, false)
    }

    follow = (userID: string) => {
        this.props.followTC(userID, true)
    }

    render() {
        return <Users onPageNumberClick={this.onPageNumberClick}
                      usersPage={this.props.usersPage}
                      follow={this.follow}
                      unFollow={this.unFollow}
                      onFilterChanged={this.onFilterChanged}
        />
    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        followTC,
        getUsersTC
    }),
    withAuthRedirect
)(UsersContainer)