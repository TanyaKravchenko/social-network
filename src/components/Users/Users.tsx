import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import {v1} from 'uuid';
import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';
import axios from 'axios';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            debugger
            props.setUsers(response.data.items)
        })
    }

    return (
        <div className={classes.usersItemContainer}>
            {props.users.map(u => <div key={u.id} className={classes.usersItem}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : src3} className={classes.photoItem}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}
export default Users;
