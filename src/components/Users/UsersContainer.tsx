import React from "react";
import {ActionsUsersTypes, followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store-redux";

type MapStateToPropsType = {
    usersPage: Array<UsersType>
}

type MapDispatchToPropsType = {
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsUsersTypes>): MapDispatchToPropsType => {
    return {
        follow: (usersID: string) => {
            dispatch(followAC(usersID))
        },
        unfollow: (usersID: string) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)