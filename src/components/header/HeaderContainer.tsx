import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC, logoutTC} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    authTC: () => void
    logoutTC: ()=> void
}

type HeaderContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerAPIPropsType> {
    componentDidMount() {
        this.props.authTC()
    }
    logout = () => {
        this.props.logoutTC()
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.logout} />
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {
    authTC,
    logoutTC
})(HeaderContainer)