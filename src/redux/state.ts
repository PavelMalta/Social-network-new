



export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "It's my second post", likesCount: 120},
            {id: 4, message: "It's my second post", likesCount: 10}
        ],
        newPostText: ""
    },
    dialogsPage: {
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
        ]
    },
    sidebar: {}
},
    updateNewPostText (newText: string)  {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree()
    },
    addPost ()  {
        const newPost: PostType = {id: new Date().getTime(), message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree()
    },
    _rerenderEntireTree ()  {
        console.log("state changed")
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer
    },
    getState () {
        return this._state
    }
}

export default store