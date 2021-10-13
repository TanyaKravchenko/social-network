import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from './redux-store';
import {FormAction} from 'redux-form/lib/actions';
import {getAuthUserData} from './auth-reducer';

export const INITIALIZED_SUCCESS = 'SN/app/INITIALIZED_SUCCESS'

// export type ActionType = ReturnType<typeof initializedSuccess> | FormAction
export type ActionsType = InferActionsTypes<typeof actions> | FormAction

export type InitialStateType = typeof initialState

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
export const actions = {
    initializedSuccess: () => {
        return {
            type: INITIALIZED_SUCCESS
        } as const
    }
}

export const initializeApp = (): ThunkType => (dispatch: DispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer;