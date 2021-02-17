import { v1 } from "uuid"


export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}
export type ActionsProfileTypes = ReturnType<typeof addPostActionCreator>
                                | ReturnType<typeof onPostChangeActionCreator>
                                | ReturnType<typeof setUserProfile>

/*export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}*/

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11},
        {id: v1(), message: "It's my second post", likesCount: 120},
        {id: v1(), message: "It's my second post", likesCount: 10}
    ],
        newPostText: "",
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = '';
            return {...state, posts: [...state.posts]};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}

        default: return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const   // воспринимай обьект как константу
}
export const onPostChangeActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: string) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}