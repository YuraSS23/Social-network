import React from 'react';
import {Field, Formik} from "formik";
import s from "./MyPosts.module.css";

type PostFormType = {
    postText: string
}

const postValidate = (postText: string) => {
    let error
    if (!postText) {
        error = 'Text is required'
    } else if (postText.length>100){
        error = 'Max length 100 symbols'
    }
    return error
}

type PostFormPropsType = {
    addPost: (post: string) => void
}

export const PostForm = (props: PostFormPropsType) => {
    const submit = (values: PostFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const post: PostFormType = {
            postText: values.postText
        }
        props.addPost(post.postText)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{postText: ''}}
            onSubmit={submit}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors
              }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <Field
                        type="text"
                        name="postText"
                        placeholder={"Type new post ..."}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postText}
                        validate={postValidate}
                        className={`${s.field} ${errors.postText 
                        && errors.postText!=="Text is required" ? s.fieldError : ''}`}
                    />
                    {errors.postText==="Max length 100 symbols" && <div className={s.error}>{errors.postText}</div>}
                    <button type="submit" disabled={isSubmitting} className={s.formBtn}>
                        Add post
                    </button>
                </form>
            )}
        </Formik>
    )
}