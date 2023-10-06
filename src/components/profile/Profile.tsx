import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPostInSate: (postMessage: string)=>void
    updateNewPostText: (newText: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPostInSate={props.addPostInSate} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};