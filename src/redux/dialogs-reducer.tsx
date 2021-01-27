import {addPostActionCreator, onPostChangeActionCreator} from "./profile-reducer";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageCreator>


const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
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