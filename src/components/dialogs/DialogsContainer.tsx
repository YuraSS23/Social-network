import React from 'react';
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/redux-store";

let mapStateToProps = (state: RootStateType)=>{
    return {
        state: state.dialogsPage
    }
}
type dispatchType = {
    dispatch: (action: ActionType)=>void
}

let mapDispatchToProps = (dispatch: any)=>{
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (text: string)=>{
            const action: ActionType = changeNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)