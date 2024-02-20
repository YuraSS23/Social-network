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

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to={'/login'} replace={true}/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
};