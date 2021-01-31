import React from "react";
import {ActionsDialogsTypes, DialogsPageType, sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store-redux";

type MapStateToProps = {
    dialogsPage: DialogsPageType
}
type MapDispatchToProps = {
    updateNewMessage: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsDialogsTypes>): MapDispatchToProps => {
    return{
        updateNewMessage: (body: string) => {
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)