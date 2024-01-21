import React from 'react';
import s from "./Users.module.css"
import img from '../../assets/images/image.png'
import {UsersPageType} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    onPageNumberClick: (clickedTextContent: string | null) => void
}

export const Users = (props: UsersPropsType) => {
    return <div>
        <div className={s.pageName}>Users</div>
        <div className={s.usersMap}>
            {props.usersPage.isFetching ? <Preloader/>
                : props.usersPage.users.map(el => {
                    return (
                        <div key={el.id} className={s.user}>
                            <img src={el.photos.small !== null ? el.photos.small : img} className={s.userPhoto}
                                 alt={'avatar'}/>
                            <div>
                                <div className={s.name}>{el.name}</div>
                                <div className={s.status}>{el.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{"el.location.city"},</div>
                                <div>{"el.location.country"}</div>
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
            {props.usersPage.currentPage > 3 &&
                <button className={s.startend} onClick={(e) => props.onPageNumberClick(e.currentTarget.textContent)}>В
                    начало</button>}
            {props.usersPage.pages.map(el => {
                return <button className={`${s.number} ${props.usersPage.currentPage === el ? s.current : ""}`}
                               onClick={(e) => props.onPageNumberClick(e.currentTarget.textContent)}>{el}</button>
            })}
            <button className={s.startend}
                    onClick={(e) => props.onPageNumberClick(e.currentTarget.textContent)}>дальше
            </button>
        </div>
    </div>
}