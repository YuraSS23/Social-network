import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/authReducer";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserData: (data: DataType) => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'}
                 alt={"wallpaper"}/>
            {props.isAuth
                ? <NavLink to={"/profile"} className={s.login}>{props.login}</NavLink>
                : <NavLink to={"/login"} className={s.login}>Login</NavLink>
            }
        </header>
    );
};