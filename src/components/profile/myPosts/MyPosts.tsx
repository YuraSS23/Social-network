import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostForm} from "./PostForm";


export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <PostForm addPost={props.addPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
}