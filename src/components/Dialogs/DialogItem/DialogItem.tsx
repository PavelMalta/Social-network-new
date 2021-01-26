import React from "react";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../redux/store";
import s from "./DialogItem.module.css"


export function DialogItem (props: DialogType) {
    return (
        <div className={s.dialogs + ' ' + s.active }>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

