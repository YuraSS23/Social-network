import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    addPostInSate: (postMessage: string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p=><Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)


/*    const [value, setValue] = useState("New post")
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.currentTarget.value)
    }*/

let newPostElement= React.createRef<HTMLTextAreaElement>()

    const addPost = ()=> {
       // alert(value)
       //alert(newPostElement.current?.value)

        if (newPostElement.current) {
            props.addPostInSate (newPostElement.current?.value)
            newPostElement.current.value = ""
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};