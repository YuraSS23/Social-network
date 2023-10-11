import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostType, StoreType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    store: StoreType
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p=><Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)


/*    const [value, setValue] = useState("New post")
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.currentTarget.value)
    }*/

let newPostElement= React.createRef<HTMLTextAreaElement>()

    const addPost = ()=> {
        props.store.addPostInState()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.store.updateNewPostText(newPostElement.current?.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea placeholder={"Add new post..."} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};