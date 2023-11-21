import React from 'react';
import {
    ActionType,
} from "../../redux/store";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (text: string) => {
        const action: ActionType = changeNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <Dialogs state={props.store.getState().dialogsPage} addMessage={addMessage} onMessageChange={onMessageChange}/>
};