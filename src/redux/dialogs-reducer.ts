import {v1} from 'uuid';
import { AddNewMessageTextType, UpdateNewMessageTextType } from './state';

export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type MessageType = {
    id: string
    message: string
}

const dialogsReducer = (state: any, action: any): any => {
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