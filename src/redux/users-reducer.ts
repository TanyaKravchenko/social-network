import {usersAPI} from '../api/users-api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/object-helpers';
import {BaseThunkType, InferActionsTypes} from './redux-store';
import {UserType} from '../types/types';
import {APIResponseType} from '../api/api';

const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const SET_FILTER = 'SN/USERS/SET_FILTER'
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SN/USERS/SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
export type FilterType = typeof initialState.filter
type ThunkType = BaseThunkType<ActionsTypes>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.IsFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}
export const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setFilter: (filter: FilterType) => ({type: 'SN/USERS/SET_FILTER', payload: filter} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
    setUsersTotalCount: (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount} as const),
    toggleIsFetching: (IsFetching: boolean) => ({type: TOGGLE_IS_FETCHING, IsFetching} as const),
    toggleFollowingProgress: (IsFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        IsFetching,
        userId
    } as const)
}

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}
export default usersReducer;

