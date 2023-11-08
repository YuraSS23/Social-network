import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionType, PostType, ProfilePageType, StoreType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};