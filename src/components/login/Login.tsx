import React from 'react';
import s from "./Login.module.css"
import {AuthFormType, LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {loginTC as login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
    authError: string
}
type MapDispatchPropsType = {
    login: (loginData: AuthFormType) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login = (props: LoginPropsType) => {
    const loginFormSubmit = (loginData: AuthFormType) => {
        props.login(loginData)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={s.loginPage}>
            <h1>Login</h1>
            {props.authError && <div className={s.error}>{props.authError}</div>}
            <LoginForm loginFormSubmit={loginFormSubmit} />
        </div>
    )
}

const MapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError
    }
}

export default connect(MapStateToProps, {
    login
})(Login)