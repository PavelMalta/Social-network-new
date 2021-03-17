import React from "react";
import {ActionsDialogsTypes, DialogsPageType, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/store-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToProps = {
    dialogsPage: DialogsPageType
}
type MapDispatchToProps = {
    sendMessage: (body: string) => void
}


let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsDialogsTypes>): MapDispatchToProps => {
    return{
        sendMessage: (body:string) => {
            dispatch(sendMessageCreator(body))
        }
    }
}

export default  compose<React.ComponentType>(
    connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

