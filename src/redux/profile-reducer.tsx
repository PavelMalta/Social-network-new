import {ActionsTypes, PostType, ProfilePageType} from "./state";

export const profileReducer = (state:ProfilePageType, action:ActionsTypes) => {
    if (action.type === 'ADD-POST') {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.unshift(newPost)
        state.newPostText = '';
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }

    return state
}