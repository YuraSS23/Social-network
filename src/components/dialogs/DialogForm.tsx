import React from 'react';
import {Field, Formik} from "formik";
import s from "./Dialogs.module.css";

type DialogFormType = {
    newMessage: string
}

const dialogFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type DialogFormPropsType = {
    onAddMessage: (message: string) => void
}

export const DialogForm = (props: DialogFormPropsType) => {
    const submit =(values: DialogFormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        const message: DialogFormType = {
            newMessage: values.newMessage,
        }
        props.onAddMessage(message.newMessage)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{newMessage: ''}}
            validate={dialogFormValidate}
            onSubmit={submit}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
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
                    />
                    <button type="submit" disabled={isSubmitting} className={s.messageButton}>
                        Send message
                    </button>
                </form>
            )}
        </Formik>
    );
};