import {authAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';

export const SET_USER_DATA = 'SET_USER_DATA'

type DataType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

export type ActionType = ReturnType<typeof setAuthUserData>

export type InitialStateType = typeof initialState

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

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
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean | null) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = (): ThunkType => (dispatch: DispatchType) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const Login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: DispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
}

export const Logout: ThunkType = () => (dispatch: DispatchType) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;