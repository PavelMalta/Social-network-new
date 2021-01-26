import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../../redux/profile-reducer";
import {ActionsTypes, ProfilePageType } from "../../../../redux/store";
import MyPosts from "../MyPosts";


type MyPostsContainerPropsType = {
    postsState: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

    const addPost = () => props.dispatch(addPostActionCreator(props.newPostText))

    const onPostChange = (text: string) => {
        props.dispatch(onPostChangeActionCreator(text))
    }


    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postsState={props.postsState}
        newPostText={props.newPostText}/>

}

export default MyPostsContainer