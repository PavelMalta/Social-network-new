import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"

export type UsersPropsType = {
    usersPage: Array<UsersType>
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsersAC: (users: Array<UsersType>) => void

}

export function Users(props: UsersPropsType) {

    return (
        <div>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photoUrl} className={s.userPhoto}/>
                       </div>
                       <div>
                           { u.followed
                               ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                               : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                       </div>
                   </span>
                    <span>
                       <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                   </span>
                </div>)
            }
        </div>
    )
}