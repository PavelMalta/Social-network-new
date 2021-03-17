import React from "react";
import {
    ActionsProfileTypes,
    addPostActionCreator,
    ProfilePageType
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/store-redux";

type MapStateToPropsType = {
    postsState: ProfilePageType
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsState: state.profilePage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsProfileTypes>): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer