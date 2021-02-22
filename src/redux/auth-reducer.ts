
export type UserLoginType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
export type ActionsUsersTypes = ReturnType<typeof setAuthUserData>




const initialState: UserLoginType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: UserLoginType = initialState, action: ActionsUsersTypes): UserLoginType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            login,
            email
        }
    } as const
}

