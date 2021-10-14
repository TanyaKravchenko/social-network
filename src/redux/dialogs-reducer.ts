import {v1} from 'uuid';
import src1 from '../assets/images/avatar3.jpg';
import src2 from '../assets/images/avatar5.jpg';
import src3 from '../assets/images/avatar4.jpeg';
import src4 from '../assets/images/avatar1.png';
import src5 from '../assets/images/avatar2.jpg';
import {InferActionsTypes} from './redux-store';

export const ADD_NEW_MESSAGE_TEXT = 'SN/dialogs/ADD-NEW-MESSAGE-TEXT'

type DialogType = {
    id: string
    name: string
    avatar: string
}

export type MessageType = {
    id: string
    message: string
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych', avatar: src1},
        {id: v1(), name: 'Sveta', avatar: src2},
        {id: v1(), name: 'Valera', avatar: src3},
        {id: v1(), name: 'Ignat', avatar: src4},
        {id: v1(), name: 'Victor', avatar: src5},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Hello!'},
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

export const actions = {
    addNewMessageActionCreator: (nameMessageBody: string) => {
        return {
            type: ADD_NEW_MESSAGE_TEXT,
            nameMessageBody
        } as const
    }
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>