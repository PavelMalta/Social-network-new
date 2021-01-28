import {v1} from "uuid";
import {ActionsTypes} from "./dialogs-reducer";

type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type UsersPageType = {
    users: Array<UsersType>
}

const initialState: UsersPageType = {
    users: [
        {id: v1(), followed: false, fullName: 'Patrick', status: 'I am a driver', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fullName: 'Alex', status: 'I am a QA', location: {city: 'Sudak', country: 'Crimea'}},
        {id: v1(), followed: false, fullName: 'Tania', status: 'I am a QAA', location: {city: 'Moscow', country: 'Russia'}},
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {

}