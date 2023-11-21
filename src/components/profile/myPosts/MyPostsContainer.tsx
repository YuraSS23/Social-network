import React from 'react';
import {
    ActionType,
} from "../../../redux/store";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";


type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        const action: ActionType = changeNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
};