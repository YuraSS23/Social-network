import React from 'react';
import {
    ActionType, StateType,
} from "../../../redux/store";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: StateType)=>{
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