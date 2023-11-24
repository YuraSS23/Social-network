import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

type ProfilePropsType = {

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};