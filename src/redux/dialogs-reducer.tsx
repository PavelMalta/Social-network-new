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
}
export type ActionsDialogsTypes = ReturnType<typeof sendMessageCreator>


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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsDialogsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: v1(),
                message: action.body
            }
            state.messages.push(newMessage)
           return {...state, messages: [...state.messages]}

        default: return state
    }
}
export const sendMessageCreator = (body: string) => {
    return {
        type: 'SEND-MESSAGE',
        body
    } as const
}
