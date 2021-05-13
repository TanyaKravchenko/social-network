import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';

export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type MessageType = {
    id: string
    message: string
}

type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

type ActionType =
    AddNewMessageTextType |
    UpdateNewMessageTextType

type AddNewMessageTextType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}

type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    updateNewMessageText: string
}

let initialState: InitialStateType = {
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
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            let newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.updateNewMessageText;
            return state
        default:
            return state;
    }
}
export const addNewMessageActionCreator = (newMessageText: string): AddNewMessageTextType => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    }
}
export const updateNewMessageActionCreator = (updateNewMessageText: string): UpdateNewMessageTextType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateNewMessageText: updateNewMessageText
    }
}
export default dialogsReducer;