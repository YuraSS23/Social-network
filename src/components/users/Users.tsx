import React from 'react';
import s from "./Users.module.css"
import img from '../../assets/images/image.png'
import {UsersPageType} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            <NavLink to={`/profile/${el.id}`}>
                                <img src={el.photos.small !== null ? el.photos.small : img} className={s.userPhoto}
                                     alt={'avatar'}/>
                            </NavLink>
                            <div>
                                <div className={s.name}>{el.name}</div>
                                <div className={s.status}>{el.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>{"el.location.city"},</div>
                                <div>{"el.location.country"}</div>
                            </div>
                            {el.followed
                                ? <button className={s.unFollow} onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                        {withCredentials: true})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(el.id)
                                            }
                                        })
                                }}>UNFOLLOW</button>
                                : <button className={s.follow} onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},
                                        {withCredentials: true})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(el.id)
                                            }
                                        })
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