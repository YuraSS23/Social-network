import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {PostType} from "../../../redux/postReducer";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (text: string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea placeholder={"Add new post..."} onChange={onPostChange} ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};