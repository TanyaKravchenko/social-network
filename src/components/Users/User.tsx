import React from 'react';
import classes from '../Users/Users.module.css';
import src3 from '../../assets/images/avatar3.jpg';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../types/types';

type UsersPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const User: React.FC<UsersPropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={classes.userItem}>
            <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                             <img src={user.photos.small !== null ? user.photos.large : src3} alt={'userImage'}
                                  className={classes.photoItem}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>Follow</button>
                        }
                    </div>
            </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </span>
        </div>)
}
export default User;