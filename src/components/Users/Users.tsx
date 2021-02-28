import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    onPageChanged: (pageNumber: number) => void
}

export function Users(props: UsersPropsType) {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}

            </div>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <NavLink to={'/profile/' + u.id}>
                           <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                           </NavLink>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   usersAPI.unfollow(u.id)
                                       .then(response => {
                                           console.log(response)
                                           if (response.data.resultCode === 0) {
                                               props.unfollow(u.id)
                                           }
                                       })
                                   
                                   props.unfollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                       {
                                           withCredentials: true,
                                           headers: {
                                               "API-KEY": "5adec434-290c-4eac-9a59-2a005f8dd341"
                                           }
                                       })
                                       .then(response => {
                                           console.log(response)
                                           if (response.data.resultCode === 0) {
                                               props.follow(u.id)
                                           }
                                       })
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