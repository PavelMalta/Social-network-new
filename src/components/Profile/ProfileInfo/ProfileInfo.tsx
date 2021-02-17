import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={'https://p4.wallpaperbetter.com/wallpaper/725/655/806/landscape-field-tractors-vehicle-wallpaper-preview.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.fullName}
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

