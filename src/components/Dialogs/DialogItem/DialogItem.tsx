import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string
    id: number
    avatar: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialogItem}>
            <div className={classes.dialogAvatar}>
                <NavLink to={path}><img src={props.avatar} alt={'avatar'}/></NavLink>
            </div>
            <div className={classes.dialogName}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    )
}

export default DialogItem;