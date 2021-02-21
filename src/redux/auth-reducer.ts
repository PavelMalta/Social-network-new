
export type UserLoginType = {
    id: number | null
    login: string | null
    email: string | null
}
export type ActionsUsersTypes = ReturnType<typeof setUserData>




const initialState: UserLoginType = {
    id: null,
    login: null,
    email: null
}

export const authReducer = (state: UserLoginType = initialState, action: ActionsUsersTypes): UserLoginType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            };

        default:
            return state
    }
}

export const setUserData = (id: number | null, login: string | null, email: string | null) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            login,
            email
        }
    } as const
}

