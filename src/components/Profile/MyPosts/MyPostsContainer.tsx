import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



function MyPostsContainer() {

    let state = props.store.getState();

    const addPost = () => props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))

    const onPostChange = (text: string) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }


    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postsState={state.profilePage}
        newPostText={state.profilePage.newPostText}/>

}

export default MyPostsContainer