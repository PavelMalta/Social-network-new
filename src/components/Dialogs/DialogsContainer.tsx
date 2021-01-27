import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import {ProfilePageType} from "../../redux/profile-reducer";
import {SidebarType} from "../../redux/sidebar-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

export function DialogsContainer(props: DialogsContainerPropsType) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(state.newMessageText))
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageCreator(body))
    }

    return (
       <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} state={state}/>
    )
}