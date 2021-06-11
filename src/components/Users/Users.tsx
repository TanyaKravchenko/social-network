import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import src3 from '../../images/avatar3.jpg';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.usersItemContainer}>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? classes.selectedPage : ' '}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>
                            {p}
                        </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={classes.usersItem}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img src={u.photos.small !== null ? u.photos.large : src3} alt={'userImage'}
                                  className={classes.photoItem}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.toggleFollowingProgress(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '22d983b1-894f-49cd-9ef9-5c17b8e4c8a6'
                                    }
                                })
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false);
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleFollowingProgress(true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '22d983b1-894f-49cd-9ef9-5c17b8e4c8a6'
                                    }
                                })
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false);
                                    })
                            }}>Follow</button>
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
    )
}
export default Users;