import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    addPostActionCreator as addPost,
    changeNewPostTextActionCreator as changeNewPostText, getUsersStatusTC,
    getUserTC,
    ProfileType, updateUsersStatusTC
} from "../../redux/profileReducer";

type MapStatePropsType = {
    profile: ProfileType | null
    userID: string | undefined
    status: string
}

type MapDispatchPropsType = {
    addPost: () => void
    changeNewPostText: (text: string) => void
    getUserTC: (userID: string) => void
    getUsersStatusTC: (userId: string)=> void
    updateUsersStatusTC: (status: string)=> void
}

type ProfileContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        let userID = this.props.userID
        if (!userID) {
            userID = "30581"
        }
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
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, {
    addPost,
    changeNewPostText,
    getUserTC,
    getUsersStatusTC,
    updateUsersStatusTC
})(ProfileContainer)