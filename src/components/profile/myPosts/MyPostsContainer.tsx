import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator, PostType} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    addPost: ()=>void
    updateNewPostText: (text: string)=>void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
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