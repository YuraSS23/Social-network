import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {} from "../../App";
import {FriendType} from "../../redux/state";

type NavbarPropsType = {
    friends: FriendType[]
}

export const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={'/profile'} className={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to={'/dialogs'}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink to={'/music'}>Music</NavLink></div>
            <div className={s.item}><NavLink to={'/settings'}>Settings</NavLink></div>
            <div>Friends</div>
            {props.friends.map(el=> {
                return (
                    <div key={el.id} className={s.friend}>
                        <img className={s.img} src={el.avatar}/>
                        <span key={el.id}>
                            {el.name}
                        </span>
                    </div>
                )})}
        </nav>
    );
};