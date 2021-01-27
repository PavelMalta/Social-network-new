import { ActionsTypes } from "./dialogs-reducer"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "It's my second post", likesCount: 120},
        {id: 4, message: "It's my second post", likesCount: 10}
    ],
        newPostText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = '';
            return {...state, posts: [...state.posts]};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}

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