const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type InitialStateType = typeof initialState

type LocationType = {
    city: string
    country: string
}

type PhotoType = {
    small: any
    large: any
}

export type UserType = {
    id: string
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
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

type SetCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

type SetUsersTotalCountACType = {
    type: 'SET_USERS_TOTAL_COUNT'
    totalCount: number
}

type ToggleIsFetchingACType = {
    type: 'TOGGLE_IS_FETCHING'
    IsFetching: boolean
}

export type ActionType =
    FollowACType |
    UnfollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetUsersTotalCountACType |
    ToggleIsFetchingACType

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: ActionType) => {
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
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
            case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.IsFetching
            };
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount: number): SetUsersTotalCountACType => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetchingAC = (IsFetching: boolean): ToggleIsFetchingACType => ({type: TOGGLE_IS_FETCHING, IsFetching})

export default usersReducer;

