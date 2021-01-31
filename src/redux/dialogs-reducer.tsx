import { v1 } from "uuid";

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type ActionsDialogsTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageCreator>


const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: "Dimych"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Valera"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra?"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsDialogsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
           return {...state, messages: [...state.messages]}
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageText = action.body;
            return {...state, newMessageText: action.body}
        default: return state
    }
}
export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const updateNewMessageCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}