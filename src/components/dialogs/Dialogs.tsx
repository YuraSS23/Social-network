import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogsType, MessagesType} from "../../App";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d=><DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m=><Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};