
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
}
export type ActionsUsersTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState: UsersPageType = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        userID: userID
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID: userID
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return{
        type: "SET-USERS",
        users: users
    } as const
}
