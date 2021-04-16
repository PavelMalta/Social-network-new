import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {toggleIsFetching} from "./users-reducer";
import {stopSubmit} from "redux-form";

const SET_INITIALIZED = 'SET-INITIALIZED'

export type ActionsAppTypes = ReturnType<typeof setInitialized>


const initialState = {
    initialized: false
}
type stateType = typeof initialState

export const appReducer = (state: stateType = initialState, action: ActionsAppTypes): stateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true };

        default:
            return state
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED})

// export const getAuthUserData = () => {
//     return (dispatch: Dispatch<ActionsUsersTypes>) => {
//         authAPI.me()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true))
//                 }
//             })
//     }
// }
//
// export const loginTC = (email: string, password: string, rememberMe: boolean) => {
//     return (dispatch: Dispatch<ActionsUsersTypes>) => {
//         dispatch(toggleIsFetching(true))
//         authAPI.login(email, password, rememberMe)
//             .then(data => {
//                     if (data.resultCode === 0) {
//                         dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true))
//                     } else {
//                         let message = data.messages.length > 0 ? data.messages[0] : "Some error"
//                         // @ts-ignore
//                         dispatch(stopSubmit('login', {_error: message}))
//                     }
//                 }
//             )
//             .finally(() => {
//                 dispatch(toggleIsFetching(false))
//             })
//     }
// }
// export const logoutTC = () => {
//     return (dispatch: Dispatch<ActionsUsersTypes>) => {
//         authAPI.logout()
//             .then(data => {
//                     if (data.resultCode === 0) {
//                         dispatch(setAuthUserData(null, null, null, false))
//                     }
//                 }
//             )
//     }
// }