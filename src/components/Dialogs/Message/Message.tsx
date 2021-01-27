import React from "react";
import s from './Message.module.css'
import {MessageType} from "../../../redux/dialogs-reducer";


export function Message(props: MessageType) {
    return (
                <div className={s.massage}>{props.message}</div>
    )
}