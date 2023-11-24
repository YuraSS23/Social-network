import React from 'react';
import {
    ActionType,
} from "../../../redux/store";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerPropsType = {

}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    return <StoreContext.Consumer>
        {
            (store)=> {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    const action: ActionType = changeNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
            }
        }
    </StoreContext.Consumer>
};