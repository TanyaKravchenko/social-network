import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css';

type FriendType = {
    id: number
    friendName: string
    avatar: string
}

const Friend: React.FC<FriendType> = (props) => {
    let path = '/friendsBlock/' + props.id
    return (
        <div className={classes.itemFriend}>
            <div className={classes.friendAvatar}>
                <NavLink to={path}><img src={props.avatar} alt={'avatar'}/></NavLink>
            </div>
            <div className={classes.nameClass}>
                <NavLink style={{textDecoration: 'none', color: 'blanchedalmond'}} to={path}>{props.friendName}</NavLink>
            </div>
        </div>
    );
}

export default Friend;
