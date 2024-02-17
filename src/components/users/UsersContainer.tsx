import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, UsersPageType} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    followTC: (userID: string, follow: boolean) => void
    getUsersTC: (page: number) => void
}

type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(1)
    }

    onPageNumberClick = (clickedTextContent: string | null) => {
        if (clickedTextContent === "В начало") {
            this.props.getUsersTC(1)
        } else if (clickedTextContent === "дальше") {
            this.props.getUsersTC(this.props.usersPage.currentPage + 1)
        } else {
            this.props.getUsersTC(Number(clickedTextContent))
        }
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
        />
    }
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

export default connect(mapStateToProps, {
    followTC,
    getUsersTC
})(UsersContainer)