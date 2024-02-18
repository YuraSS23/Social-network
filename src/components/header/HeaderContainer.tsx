import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    authTC: () => void
}

type HeaderContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerAPIPropsType> {
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {authTC})(HeaderContainer)