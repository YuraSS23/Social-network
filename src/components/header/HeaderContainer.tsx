import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (data: DataType)=>void
}

type HeaderContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerAPIPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response=>{
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateType)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)