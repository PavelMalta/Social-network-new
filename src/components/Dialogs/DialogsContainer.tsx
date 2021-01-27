import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect, MapDispatchToPropsParam} from "react-redux";

type mapDispatchToPropsType = MapDispatchToPropsParam<{ updateNewMessage: (body: string) => void; sendMessage: () => void; }, {}>

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps:mapDispatchToPropsType = (dispatch) => {
    return{
        updateNewMessage: (body: string) => {
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)