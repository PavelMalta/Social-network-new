import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {CombinedState, Store} from "redux";
import { ProfilePageType } from "../../redux/profile-reducer";
import {ActionsTypes, DialogsPageType} from "../../redux/dialogs-reducer";
import { SidebarType } from "../../redux/sidebar-reducer";

type ProfilePropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile