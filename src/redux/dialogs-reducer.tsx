import {ActionsTypes, DialogsPageType, MessageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    if (action.type === 'SEND-MESSAGE') {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageText = action.body;
    }

    return state
}