import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    state: PostType[]
    addPostInSate: (postMessage: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state} addPostInSate={props.addPostInSate}/>
        </div>
    );
};