import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, Formik} from "formik";

type PostFormType = {
    postText: string
}

const postFormValidate = (values: any) => {
    const errors = {};
    return errors;
}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const submit =(values: PostFormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        const post: PostFormType = {
            postText: values.postText
        }
        props.addPost(post.postText)
        setSubmitting(false)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <Formik
                initialValues={{postText: ''}}
                validate={postFormValidate}
                onSubmit={submit}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            type="text"
                            name="postText"
                            placeholder={"Type new post ..."}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.postText}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Add post
                        </button>
                    </form>
                )}
            </Formik>
            <div>
                {postsElements}
            </div>
        </div>
    );
};