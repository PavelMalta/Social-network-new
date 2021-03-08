import React from "react";
import {ActionsDialogsTypes, DialogsPageType, sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToProps = {
    dialogsPage: DialogsPageType
}
type MapDispatchToProps = {
    updateNewMessage: (body: string) => void
    sendMessage: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)