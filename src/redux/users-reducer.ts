import {v1} from 'uuid'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type InitialStateType = typeof initialState

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type FollowACType = {
    type: 'FOLLOW'
    userId: string
}

type UnfollowACType = {
    type: 'UNFOLLOW'
    userId: string
}

type SetUsersACType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
export type ActionType =
    FollowACType |
    UnfollowACType |
    SetUsersACType

let initialState = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Andrew',
            status: 'And I am a boss)))',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
export default usersReducer;

