import React from 'react';
import classes from './Dialogs.module.css';
import {
    ActionType,
    addNewMessageActionCreator, InitialStateType,
    updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import store, {AppStateType} from '../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onMessageChange: () => {
            dispatch(addNewMessageActionCreator(store.getState().dialogsReducer.newMessageText.trim()));
        },
        addNewMessage: () => {
            dispatch(updateNewMessageActionCreator(store.getState().dialogsReducer.newMessageText));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

