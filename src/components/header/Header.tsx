import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserData: (email: string | null, userID: string | null, login: string | null)=>void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'}
                 alt={"wallpaper"}/>
            <NavLink to={"/login"} className={s.login}>{props.login}</NavLink>
        </header>
    );
};