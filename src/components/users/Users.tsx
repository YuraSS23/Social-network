import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: false,
                fullName: 'Dimych',
                status: "I am Boss",
                location: {city: "Minsk", country: "Belarus"},
                avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Valera',
                status: "I am Boss",
                location: {city: "Minsk", country: "Belarus"},
                avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Svetlana',
                status: "I am Boss",
                location: {city: "Minsk", country: "Belarus"},
                avatar: 'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png'
            },
        ])
    }
    return <div>
        <div className={s.pageName}>Users</div>
        <div className={s.usersMap}>
            {props.usersPage.users.map(el => {
                return (
                    <div key={el.id} className={s.user}>
                        <img src={el.avatar} className={s.userPhoto} alt={'avatar'}/>
                        <div>
                            <div className={s.name}>{el.fullName}</div>
                            <div className={s.status}>{el.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{el.location.city},</div>
                            <div>{el.location.country}</div>
                        </div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unFollow(el.id)
                            }}>UNFOLLOW</button>
                            : <button className={s.follow} onClick={() => {
                                props.follow(el.id)
                            }}>FOLLOW</button>}
                    </div>
                )
            })}
        </div>
        <div className={s.showMore}>
            <button>Show more</button>
        </div>
    </div>
}