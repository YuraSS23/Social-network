import React from 'react';
import {StateType} from "../../redux/store";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType} from "../../redux/redux-store";

let mapStateToProps = (state: StateType)=>{
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