import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsState: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {

    let postsElement = props.postsState.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => props.dispatch(addPostActionCreator(props.newPostText))

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    {props.dispatch(onPostChangeActionCreator(e.currentTarget.value))}

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={ onPostChange }/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts