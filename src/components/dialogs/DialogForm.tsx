import React from 'react';
import {Field, Formik} from "formik";
import s from "./Dialogs.module.css";

type DialogFormType = {
    newMessage: string
}

const dialogValidate = (newMessage: string) => {
    let error
    if (!newMessage) {
        error = 'Message is required'
    } else if (newMessage.length > 100) {
        error = 'Max length 100 symbols'
    }
    return error
}

type DialogFormPropsType = {
    onAddMessage: (message: string) => void
}

export const DialogForm = (props: DialogFormPropsType) => {
    const submit = (values: DialogFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const message: DialogFormType = {
            newMessage: values.newMessage,
        }
        props.onAddMessage(message.newMessage)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{newMessage: ''}}
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
                <form onSubmit={handleSubmit} className={s.loginForm}>
                    <Field
                        type="text"
                        name="newMessage"
                        placeholder={"Write new message"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newMessage}
                        className={s.messageTextarea}
                        validate={dialogValidate}
                    />
                    {errors.newMessage==="Max length 100 symbols" && <div className={s.error}>{errors.newMessage}</div>}
                    <button type="submit" disabled={isSubmitting} className={s.messageButton}>
                        Send message
                    </button>
                </form>
            )}
        </Formik>
    )
}