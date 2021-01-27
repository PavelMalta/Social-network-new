import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    updateNewMessage: (body: string) => void
    sendMessage: () => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);
    let newMessageBody = props.state.newMessageText

    let onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessage(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}