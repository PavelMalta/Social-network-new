import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {toggleIsFetching} from "./users-reducer";
import {stopSubmit} from "redux-form";
import {ActionsUsersTypes, getAuthUserData} from "./auth-reducer";

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


export const initializedApp = () => {
     return (dispatch: any) => {
           let dispatchResult = dispatch(getAuthUserData())
         dispatchResult.then(() => {
             dispatch(setInitialized())
         })

     }}

type thunkDispatch = Dispatch<ActionsAppTypes | ActionsUsersTypes>

