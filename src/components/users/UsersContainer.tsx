import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {UsersPageType} from "../../redux/usersReducer";

type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    addMessage: ()=>void
    onMessageChange: (text: string)=>void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: ()=>{

        },
        onMessageChange: (text: string)=>{

        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)