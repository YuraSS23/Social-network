import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    addPostActionCreator as addPost,
    getUsersStatusTC,
    getUserTC,
    ProfileType, updateUsersStatusTC
} from "../../redux/profileReducer";

type MapStatePropsType = {
    profile: ProfileType | null
    userID: string
    status: string
    authId: string | null
}

type MapDispatchPropsType = {
    addPost: (postText: string) => void
    getUserTC: (userID: string) => void
    getUsersStatusTC: (userId: string)=> void
    updateUsersStatusTC: (status: string)=> void
}

type ProfileContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        let userID = this.props.userID
        this.props.getUserTC(userID)
        this.props.getUsersStatusTC(userID)
    }

    render() {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.data.id
    }
}

export default connect(mapStateToProps, {
    addPost,
    getUserTC,
    getUsersStatusTC,
    updateUsersStatusTC
})(ProfileContainer)