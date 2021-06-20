import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {InitialStateType} from '../../redux/dialogs-reducer';
import {AddMessageFormRedux, AddMessageFormType} from './AddMessageForm/AddMessageForm';

type DialogsType = {
    onMessageChange: (textMessage: string) => void
    addNewMessage: (nameMessageBody: string) => void
    dialogsPage: InitialStateType;
    isAuth: boolean
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    ));
    let messagesElements = props.dialogsPage.messages.map((m) => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ));

    let addNewMessage = (values: AddMessageFormType) => {
        props.addNewMessage(values.nameMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;
