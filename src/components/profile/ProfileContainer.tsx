import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    addPostActionCreator as addPost,
    changeNewPostTextActionCreator as changeNewPostText,
    getUserTC,
    ProfileType
} from "../../redux/profileReducer";

type MapStatePropsType = {
    profile: ProfileType | null
    userID: string | undefined
}

type MapDispatchPropsType = {
    addPost: () => void
    changeNewPostText: (text: string) => void
    getUserTC: (userID: string) => void
}

type ProfileContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        let userID = this.props.userID
        if (!userID) {
            userID = "30581"
        }
        this.props.getUserTC(userID)
    }

    render() {
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    addPost,
    changeNewPostText,
    getUserTC
})(ProfileContainer)