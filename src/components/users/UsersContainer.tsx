import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: RootStateType)=>{
    return {
        users: state.usersPage.users
    }
}

type dispatchType = {
    dispatch: ()=>void
}

let mapDispatchToProps = (dispatch: any)=>{
    return {
        addMessage: ()=>{

        },
        onMessageChange: (text: string)=>{

        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)