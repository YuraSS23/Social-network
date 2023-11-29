import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    return <div>
        <div className={s.pageName}>Users</div>
        <div className={s.usersMap}>
            {props.usersPage.users.map(el => {
                return (
                    <div key={el.id} className={s.user}>
                        <img src={el.avatar} className={s.userPhoto}/>
                        <div>
                            <div className={s.name}>{el.fullName}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{el.location.city},</div>
                            <div>{el.location.country}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={s.showMore}>
            <button>Show more</button>
        </div>
    </div>
}