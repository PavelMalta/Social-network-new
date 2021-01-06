import React from "react";
import s from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src={'https://p4.wallpaperbetter.com/wallpaper/725/655/806/landscape-field-tractors-vehicle-wallpaper-preview.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

