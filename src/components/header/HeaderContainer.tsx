import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (email: string | null, userID: string | null, login: string | null)=>void
}

type HeaderContainerAPIPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerAPIPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response=>{
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserData(email, id, login)
                }
            })
    }
    render() {
        debugger
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: MapStatePropsType)=>{
    return {
        isAuth: state.isAuth,
        login: state.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)