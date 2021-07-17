import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {FormAction} from 'redux-form/lib/actions';
import {getAuthUserData} from './auth-reducer';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type ActionType = ReturnType<typeof initializedSuccess> | FormAction

export type InitialStateType = typeof initialState

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const initializeApp = (): ThunkType => (dispatch: DispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;