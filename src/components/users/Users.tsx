import React from 'react';
import {userType} from "../../redux/usersReducer";
import s from "./Users.module.css"

type UsersPropsType = {
    users: userType[]
}

export const Users = (props: UsersPropsType)=>{

 return <div>
     <div className={s.pageName}>Users</div>
     <div className={s.usersMap}>
         {props.users.map(el=> {
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
             )})}
     </div>
     <div className={s.showMore}>
         <button>Show more</button>
     </div>
 </div>
}