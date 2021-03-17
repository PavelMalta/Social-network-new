import { v1 } from "uuid"
import {ProfileType} from "../components/Profile/ProfileContainer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}
export type ActionsProfileTypes = ReturnType<typeof addPostActionCreator>
                                | ReturnType<typeof setUserProfile>
                                | ReturnType<typeof setStatusProfile>


const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11},
        {id: v1(), message: "It's my second post", likesCount: 120},
        {id: v1(), message: "It's my second post", likesCount: 10}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            return {...state, posts: [...state.posts]};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        case 'SET-STATUS-PROFILE':
            return {...state, status: action.status}


        default: return state
    }
}

export const addPostActionCreator = (newText: string) => {
    return {
        type: "ADD-POST",
        newText
    } as const   // воспринимай обьект как константу
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setStatusProfile = (status: string) => {
    return {
        type: "SET-STATUS-PROFILE",
        status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionsProfileTypes>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionsProfileTypes>) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusProfile(response.data))
        })
    }
}
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<ActionsProfileTypes>) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfile(status ))
            }
        })
    }
}