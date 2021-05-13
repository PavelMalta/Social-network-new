import {AppStateType} from "./store-redux";
import {UsersType} from "./users-reducer";

export const getUsersSelector = (state: AppStateType):Array<UsersType> => {
    return state.usersPage.users
}
export const getPageSizeSelector = (state: AppStateType):number => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state: AppStateType):number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state: AppStateType):number => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppStateType):boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state: AppStateType):Array<string> => {
    return state.usersPage.followingInProgress
}