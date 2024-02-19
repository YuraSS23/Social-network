import React from 'react';
import s from "./Login.module.css"

export const Login = () => {
    return (
        <div className={s.formWrap}>
            <form className={s.form}>
                <label className={s.formlabel}>Login</label>
                <input type={"text"} placeholder={"Login"}/>
                <label className={s.formlabel}>Password</label>
                <input type={"text"} placeholder={"Password"}/>
            </form>
        </div>
    );
};