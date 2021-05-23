import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import {v1} from 'uuid';
import src1 from '../../images/avatar3.jpg';
import src2 from '../../images/avatar5.jpg';
import src3 from '../../images/avatar4.jpeg';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    // props.setUsers(
    //     users: [
    //     {
    //         id: v1(),
    //         photo: src1,
    //         followed: false,
    //         fullName: 'Dmitry',
    //         status: 'I am a boss',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: v1(),
    //         photo: src2,
    //         followed: false,
    //         fullName: 'Sasha',
    //         status: 'I am a boss too',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: v1(),
    //         photo: src3,
    //         followed: true,
    //         fullName: 'Andrew',
    //         status: 'And I am a boss)))',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     }
    // ])
    return (
        <div className={classes.usersItemContainer}>
            {props.users.map(u => <div key={u.id} className={classes.usersItem}>
                <span>
                    <div>
                        <img src={u.photo} className={classes.photoItem}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}
export default Users;
