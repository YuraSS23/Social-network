import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {DataType, setAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/redux-store";
import {api} from "../../api/api";

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
        api.authMe()
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