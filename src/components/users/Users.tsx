import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import img from '../../assets/images/image.png'
import axios from "axios";

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render (){
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
                <button>Show more</button>
            </div>
        </div>
    }
}