import React from 'react';
import classes from './Message.module.css'

type MessageType = {
    id: string
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={classes.itemText}>
            <div className={classes.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;