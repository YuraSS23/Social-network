import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {NavLink, Route, Routes} from "react-router-dom";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const onAddMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <Routes>
                <Route path={'/'} element={<div className={s.dialogsItems}>{dialogsElements}</div>}/>
                <Route path={'dialogs/*'} element={<div className={s.messages}>
                    <NavLink to={'/dialogs'}>Back</NavLink>
                    {messagesElements}
                    <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}
                              className={s.messageTextarea} placeholder={"Напииште сообщение..."}></textarea>
                    <button onClick={onAddMessage} className={s.messageButton}>Отправить сообщение</button>
                </div>}/>
            </Routes>
        </div>
    );
};