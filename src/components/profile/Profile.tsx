import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    addPost: () => void
    changeNewPostText: (text: string) => void
    profile: ProfileType | null
    status: string
    updateUsersStatusTC: (status: string)=> void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateUsersStatusTC}
                         authId={props.authId}
            />
            <MyPostsContainer/>
        </div>
    );
};