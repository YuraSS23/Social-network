import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = <T extends object>(Component: React.ComponentType<T>): React.FC<T> => {
    const RedirectComponent = ({isAuth, ...restProps}: mapStateToPropsType) => {
        if (!isAuth) return <Navigate to={'/login'} replace={true}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}