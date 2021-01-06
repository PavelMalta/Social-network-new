import React from "react";
import { MessageType } from "../../../redux/state";
import s from './Message.module.css'


export function Message(props: MessageType) {
    return (
                <div className={s.massage}>{props.message}</div>
    )
}