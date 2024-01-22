import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";
import {
    addPostActionCreator as addPost,
    changeNewPostTextActionCreator as changeNewPostText,
    ProfileType,
    setUserProfileActionCreator as setUserProfile
} from "../../redux/profileReducer";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType)=>void
    addPost: ()=>void
    changeNewPostText: (text: string)=>void
}

type ProfileContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerAPIPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/30581")
            .then((response) =>
                this.props.setUserProfile(response.data)
            )
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
};

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {
    setUserProfile,
    addPost,
    changeNewPostText
})(ProfileContainer);