import React, {useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';

export const MyPosts = () => {
    const posts = [
        {id: 1, likeCounts: 15, message: 'Hi, how are you?'},
        {id: 2, likeCounts: 20, message: 'It\'s my first post'}
    ]

    const postsElements = posts.map(p=><Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

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