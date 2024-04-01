import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {NavLink, Route, Routes} from "react-router-dom";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogForm} from "./DialogForm";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)
    const onAddMessage = (message: string) => {
        props.addMessage(message)
    }
    return (
        <div className={s.dialogs}>
            <Routes>
                <Route path={'/'} element={<div className={s.dialogsItems}>{dialogsElements}</div>}/>
                <Route path={'dialogs/*'} element={<div className={s.messages}>
                    <NavLink to={'/dialogs'}>Back</NavLink>
                    {messagesElements}
                    <DialogForm onAddMessage={onAddMessage}/>
                </div>}/>
            </Routes>
        </div>
    );
};