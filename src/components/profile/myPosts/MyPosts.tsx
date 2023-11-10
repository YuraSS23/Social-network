import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {
    ActionType,
    addPostActionCreator,
    changeNewPostTextActionCreator,
    PostType
} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            const action: ActionType = changeNewPostTextActionCreator(e.currentTarget.value)
            props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea placeholder={"Add new post..."} onChange={onPostChange} ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};