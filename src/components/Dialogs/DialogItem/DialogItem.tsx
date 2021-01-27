import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css"
import {DialogType} from "../../../redux/dialogs-reducer";


export function DialogItem (props: DialogType) {
    return (
        <div className={s.dialogs + ' ' + s.active }>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

