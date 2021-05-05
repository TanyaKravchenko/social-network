import React from 'react';
import classes from './Dialogs.module.css'
import header_image from '../../images/speech-bubble.png';
import {NavLink} from 'react-router-dom';

type MessageType = {
    message: string
}

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}
const Dialogs = () => {
    let dialogsData = [
        {id:1, name: 'Dimych'},
        {id:2, name: 'Sveta'},
        {id:3, name: 'Valera'},
        {id:4, name: 'Ignat'},
        {id:5, name: 'Victor'},
    ]

    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'Yo'},
        {id:3, message: 'Hello!'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
            {/*<div>*/}
            {/*    <img src={header_image} alt={'header_image'}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Dialogs;