import React from "react";
import {ActionsUsersTypes, followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./UsersClass";
import {AppStateType} from "../../redux/store-redux";

type MapStateToPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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