import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {toggleIsFetching} from "./users-reducer";

export type UserLoginType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
export type ActionsUsersTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleIsFetching>


const initialState: UserLoginType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: UserLoginType = initialState, action: ActionsUsersTypes): UserLoginType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            };

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionsUsersTypes>) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true))
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<ActionsUsersTypes>) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(email, password, rememberMe)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true))
                        dispatch(toggleIsFetching(false))
                    }
                }
            )
    }
}
export const logoutTC = () => {
    return (dispatch: Dispatch<ActionsUsersTypes>) => {
        authAPI.logout()
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false))
                    }
                }
            )
    }
}