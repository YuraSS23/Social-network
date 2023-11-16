import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {
    ActionType,
    MessagesPageType
} from "../../redux/store";
import {NavLink, Route, Routes} from "react-router-dom";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    state: MessagesPageType
    dispatch: (action: ActionType)=>void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const AddMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action: ActionType = changeNewMessageTextActionCreator(e.currentTarget.value)
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <Routes>
                <Route path={'/'} element={<div className={s.dialogsItems}>{dialogsElements}</div>}/>
                <Route path={'dialogs/*'} element={<div className={s.messages}>
                    <NavLink to={'/dialogs'}>Back</NavLink>
                    {messagesElements}
                    <textarea value={props.state.newMessageText} onChange={onMessageChange} className={s.messageTextarea} placeholder={"Напииште сообщение..."}></textarea>
                    <button onClick={AddMessage} className={s.messageButton}>Отправить сообщение</button>
                </div>}/>
            </Routes>
        </div>
    );
};