import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    ActionType,
    ADD_NEW_MESSAGE_TEXT,
    addNewMessageActionCreator,
    DialogsPageType,
    UPDATE_NEW_MESSAGE_TEXT, updateNewMessageActionCreator
} from '../../redux/state';

type DialogsType = {
    dialogsPage: DialogsPageType;
    dispatch: (action: ActionType) => void
};

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    ));
    let messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ));

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator(props.dialogsPage.newMessageText));
    };

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textMessage = e.currentTarget.value;
        props.dispatch(updateNewMessageActionCreator(textMessage));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
