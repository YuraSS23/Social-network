import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import img from '../../assets/images/image.png'
import axios from "axios";

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=4`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render (){
        const numberClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e.currentTarget.textContent}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
            this.props.setCurrentPage(Number(e.currentTarget.textContent))
        }
        const startClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
            this.props.setCurrentPage(1)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
        const nextClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage+1}&count=4`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
            this.props.setCurrentPage(this.props.usersPage.currentPage+1)
        }
        return <div>
            <div className={s.pageName}>Users</div>
            <div className={s.usersMap}>
                {this.props.usersPage.users.map(el => {
                    return (
                        <div key={el.id} className={s.user}>
                            <img src={el.photos.small !== null ? el.photos.small: img} className={s.userPhoto} alt={'avatar'}/>
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
                                    this.props.unFollow(el.id)
                                }}>UNFOLLOW</button>
                                : <button className={s.follow} onClick={() => {
                                    this.props.follow(el.id)
                                }}>FOLLOW</button>}
                        </div>
                    )
                })}
            </div>
            <div className={s.showMore}>
                {this.props.usersPage.currentPage>3&&<button className={s.startend} onClick={startClick}>В начало</button>}
                {this.props.usersPage.pages.map(el=>{
                    return <button className={`${s.number} ${this.props.usersPage.currentPage===el?s.current:""}`} onClick={numberClick}>{el}</button>
                })}
                <button className={s.startend} onClick={nextClick}>дальше</button>
            </div>
        </div>
    }
}