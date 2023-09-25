import React, {useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostsType} from "../../../App";

type MyPostsPropsType = {
    posts: PostsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p=><Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};