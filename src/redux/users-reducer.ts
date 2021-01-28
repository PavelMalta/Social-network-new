import {v1} from "uuid";

export type LocationType = {
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
}
export type UsersPageType = {
    users: Array<UsersType>
}
export type ActionsUsersTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const initialState: UsersPageType = {
    users: [
        {id: v1(), photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
            followed: false, fullName: 'Patrick', status: 'I am a driver', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
            followed: true, fullName: 'Alex', status: 'I am a QA', location: {city: 'Sudak', country: 'Crimea'}},
        {id: v1(), photoUrl: "https://www.infox.ru/photo/0ef/bb4/0efbb4171708f115504317829d31f35aasdasdasd5a4e496e566ed4.22782928-650x433-0efbb4171708f115504317829d31f35a.jpg",
            followed: false, fullName: 'Tania', status: 'I am a QAA', location: {city: 'Moscow', country: 'Russia'}}
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersTypes) => {
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
