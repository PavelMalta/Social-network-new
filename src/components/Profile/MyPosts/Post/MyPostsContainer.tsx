import React from "react";
import {addPostActionCreator, onPostChangeActionCreator, ProfilePageType} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {CombinedState, Store} from "redux";
import {ActionsTypes, DialogsPageType } from "../../../../redux/dialogs-reducer";
import {SidebarType} from "../../../../redux/sidebar-reducer";


type MyPostsContainerPropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

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