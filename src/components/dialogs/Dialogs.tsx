import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';

export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Tolik'}
    ]
    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'This is IT-kamasutra'},
        {id: 4, message: 'Bye'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'},
    ]

    const dialogsElements = dialogsData.map(el=><DialogItem key={el.id} name={el.name} id={el.id}/>)
    const messagesElements = messagesData.map(el=><Message key={el.id} message={el.message}/>)

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