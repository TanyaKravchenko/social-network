import React from 'react';
import classes from './Dialogs.module.css';
import {
    addNewMessageActionCreator,
    updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import {ActionType, DialogsPageType} from '../../redux/store';
import Dialogs from './Dialogs';

type DialogsContainerType = {
    dialogsPage: DialogsPageType;
    dispatch: (action: ActionType) => void
};

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let addMessage = () => {
        if (props.dialogsPage.newMessageText.trim() !== '') {
            props.dispatch(addNewMessageActionCreator(props.dialogsPage.newMessageText.trim()));
            props.dialogsPage.newMessageText = '';
        } else {
            alert('Error. Нужно доделать')
        }

    };

    let onMessageChange = (textMessage: string) => {
        props.dispatch(updateNewMessageActionCreator(textMessage));
    }

    return (
        <div className={classes.dialogs}>
            <Dialogs dialogsPage={props.dialogsPage}
                     addNewMessage={addMessage}
                     onMessageChange={onMessageChange}
            />
        </div>
    );
};

export default DialogsContainer;
