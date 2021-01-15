import {ActionsTypes, DialogsPageType, MessageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageText = action.body;
            break;
    }

    return state
}
export const sendMessageCreator = (messageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        messageText: messageText
    } as const
}
export const updateNewMessageCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}