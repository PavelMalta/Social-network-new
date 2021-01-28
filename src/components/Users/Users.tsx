import React from "react";
import { UsersType } from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: Array<UsersType>
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsersAC: (users: Array<UsersType>) => void

}

export function Users (props: UsersPropsType) {
    return(
        <div>
            Users
        </div>
    )
}