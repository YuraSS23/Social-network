import React from 'react';
import s from "./Users.module.css"
import img from '../../assets/images/image.png'
import {FilterType, UsersPageType} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader";
import {NavLink} from "react-router-dom";
import {UsersSearchForm} from "./UsersSearchForm";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    onPageNumberClick: (clickedTextContent: string | null) => void
    onFilterChanged: (filter: FilterType) => void
}

export const Users = (props: UsersPropsType) => {
    return <div>
        <div className={s.pageName}>Users</div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
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
                                ? <button className={s.unFollow}
                                          onClick={() => {props.unFollow(el.id)}}
                                          disabled={props.usersPage.isLoading.some(id=>id ===el.id)}
                                >UNFOLLOW</button>
                                : <button className={s.follow}
                                          onClick={() => {props.follow(el.id)}}
                                          disabled={props.usersPage.isLoading.some(id=>id ===el.id)}
                                >FOLLOW</button>}
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