import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export const SET_USER_DATA = 'SET_USER_DATA'

type DataType = {
    userId: string | null
    email: string | null
    login: string | null
}

type SetUsrDataType = {
    type: 'SET_USER_DATA'
    data: DataType
}

export type ActionType =
    SetUsrDataType

export type InitialStateType = typeof initialState

let initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null): SetUsrDataType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export default authReducer;