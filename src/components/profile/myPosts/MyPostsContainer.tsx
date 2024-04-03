import {addPostActionCreator, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: PostType[]
}
type mapDispatchToPropsType = {
    addPost: (postText: string)=>void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string)=>{
            dispatch(addPostActionCreator(postText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)