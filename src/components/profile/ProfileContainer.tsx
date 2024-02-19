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
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType | null
    userID: string | undefined
    isAuth: boolean
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
        if (!this.props.isAuth) return <Navigate to={'/login'} replace={true}/>
        return <Profile {...this.props} />
    }
};

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    addPost,
    changeNewPostText,
    getUserTC
})(ProfileContainer);