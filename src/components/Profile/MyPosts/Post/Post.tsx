import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";



function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img
                src={'https://www.pngkey.com/png/full/258-2584901_caricatures-illustrations-storyboards-servicing-tampa-commission.png'}/>
            {props.message}
            <div>
                <span>like  </span>  { props.likesCount }
            </div>
        </div>

    )
}

export default Post