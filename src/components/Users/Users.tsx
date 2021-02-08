import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

export type UsersPropsType = {
    usersPage: Array<UsersType>
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: Array<UsersType>) => void

}

export function Users(props: UsersPropsType) {
    let getUsers = () => {
        if (props.usersPage.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   props.follow(u.id)
                               }}>Follow</button>}
                       </div>
                   </span>
                    <span>
                       <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                   </span>
                </div>)
            }
        </div>
    )
}