import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import {v1} from "uuid";

export type UsersPropsType = {
    usersPage: Array<UsersType>
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: Array<UsersType>) => void

}

export function Users(props: UsersPropsType) {
    if (props.usersPage.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
                followed: false,
                fullName: 'Patrick',
                status: 'I am a driver',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
                followed: true,
                fullName: 'Alex',
                status: 'I am a QA',
                location: {city: 'Sudak', country: 'Crimea'}
            },
            {
                id: v1(),
                photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
                followed: false,
                fullName: 'Tania',
                status: 'I am a QAA',
                location: {city: 'Moscow', country: 'Russia'}
            }])
    }

    return (
        <div>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photoUrl} className={s.userPhoto}/>
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