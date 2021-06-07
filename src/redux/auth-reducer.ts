export const SET_USER_DATA = 'SET_USER_DATA'

export type ActionType =
    SetUsrDataType

type DataType = {
    userId: string
    email: string
    login: string
}

type SetUsrDataType = {
    type: 'SET_USER_DATA'
    data: DataType
}

//export type InitialStateType = typeof initialState

let initialState = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}
export const setUserData = (userId: string, email: string, login: string): SetUsrDataType => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export default authReducer;