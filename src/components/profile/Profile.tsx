import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType, ProfilePageType, StoreType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} store={props.store}/>
        </div>
    );
};