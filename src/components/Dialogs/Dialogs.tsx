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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Sveta'} id={2}/>
                <DialogItem name={'Valera'} id={3}/>
                <DialogItem name={'Ignat'} id={4}/>
                <DialogItem name={'Victor'} id={5}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hello'}/>
                <Message message={'Yo'}/>
            </div>
            {/*<div>*/}
            {/*    <img src={header_image} alt={'header_image'}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Dialogs;