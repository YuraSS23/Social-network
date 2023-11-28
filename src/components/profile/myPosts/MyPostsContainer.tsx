import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: RootStateType)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
type dispatchType = {
    dispatch: (action: ActionType)=>void
}

let mapDispatchToProps = (dispatch: any)=>{
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string)=>{
            const action: ActionType = changeNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)