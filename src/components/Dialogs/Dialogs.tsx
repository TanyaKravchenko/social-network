import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsType = {
    state: DialogsPageType;
    addNewMessage: () => void
    newMessageText: string
    updateNewMessage: (updateNewMessageText: string) => void
};

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.state.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    ));
    let messagesElements = props.state.messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ));

    let addMessage = () => {
        props.addNewMessage();
    };

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
