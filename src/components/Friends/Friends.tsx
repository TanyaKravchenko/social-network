import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';
import {InitialStateType} from '../../redux/sidebar-reducer';

type FriendsType = {
    sidebar: InitialStateType
}

const Friends: React.FC<FriendsType> = (props) => {
    let frendsBlock = props.sidebar.friendsBlock.map(f => <Friend key={f.id} avatar={f.avatar} friendName={f.friendName} id={f.id}/>)
    return (
        <div className={classes.headerFriends}>
            <div className={classes.titleFriends}>
                <span>My friends</span>
            </div>
            <div></div>
            <div className={classes.itemFriends}>{frendsBlock}</div>
        </div>
    );
}

export default Friends;
