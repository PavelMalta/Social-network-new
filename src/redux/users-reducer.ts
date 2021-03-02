/*export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}*/
import {usersAPI} from "../api/api";

type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    name: string
    id: string
    unigueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
export type ActionsUsersTypes = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'SET-USERS':
            return {
                ...state, users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state, totalUsersCount: action.count
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
                   ? [...state.followingInProgress, action.userID]
                   : state.followingInProgress.filter(id => id !== action.userID)
            }

        default:
            return state
    }
}

export const follow = (userID: string) => {
    return {
        type: "FOLLOW",
        userID: userID
    } as const
}
export const unfollow = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID: userID
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count: totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userID: string) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userID
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const userUnfollow = (id: string) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export const userFollow = (id: string) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}