import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {MessagesPageType} from "../../redux/state";
import {NavLink, Route, Routes} from "react-router-dom";


type DialogsPropsType = {
    state: MessagesPageType

}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const TextAreaRef = React.createRef<HTMLTextAreaElement>()
    const AddMessage = () => {
        alert(TextAreaRef.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <Routes>
                <Route path={'/'} element={<div className={s.dialogsItems}>{dialogsElements}</div>}/>
                <Route path={'dialogs/*'} element={<div className={s.messages}>
                    <NavLink to={'/dialogs'}>Back</NavLink>
                    {messagesElements}
                    <textarea ref={TextAreaRef} className={s.messageTextarea}>Сообщение</textarea>
                    <button onClick={AddMessage} className={s.messageButton}>Отправить сообщение</button>
                </div>}/>
            </Routes>
        </div>
    );
};