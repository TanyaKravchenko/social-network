import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';

export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export type MessageType = {
    id: string
    message: string
}

export type InitialStateType = typeof initialState

export type ActionType =
    ReturnType<typeof addNewMessageActionCreator>


let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych', avatar: src1},
        {id: v1(), name: 'Sveta', avatar: src2},
        {id: v1(), name: 'Valera', avatar: src3},
        {id: v1(), name: 'Ignat', avatar: src4},
        {id: v1(), name: 'Victor', avatar: src5},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Hello!'},
    ]
}

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            let newMessage: MessageType = {
                id: v1(),
                message: action.nameMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}
export const addNewMessageActionCreator = (nameMessageBody: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        nameMessageBody
    } as const
}

export default dialogsReducer;