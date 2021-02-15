import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

export type UsersAPIPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (usersID: string) => void
    unfollow: (usersID: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersAPIComponent extends React.Component <UsersAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
            return <Users usersPage={this.props.usersPage}
                          pageSize={this.props.pageSize}
                          totalUsersCount={this.props.totalUsersCount}
                          currentPage={this.props.currentPage}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          onPageChanged={this.onPageChanged}
                          />
    }
}