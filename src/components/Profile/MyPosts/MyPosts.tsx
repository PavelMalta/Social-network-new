import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    postsState: ProfilePageType
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    let postsElement = props.postsState.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => props.addPost()

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

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