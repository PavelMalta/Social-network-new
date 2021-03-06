import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<string>
    unfollow: (id: string) => void
    follow: (id: string) => void
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
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
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
                               ? <button
                                   disabled={props.followingInProgress.some(id => id === u.id)}
                                   onClick={() => {
                                       props.unfollow(u.id)
                                   }}
                               >Unfollow</button>
                               : <button
                                   disabled={props.followingInProgress.some(id => id === u.id)}
                                   onClick={() => {
                                       props.follow(u.id)
                                   }}
                               >Follow</button>
                           }
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