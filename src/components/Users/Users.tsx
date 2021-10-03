import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<string>
}

const Users: React.FC<UsersPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, user, followingInProgress, unfollow, follow,  ...props}) => {
    return (
        <div className={classes.usersItemContainer}>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}/>
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                />
            )}
        </div>
    )
}
export default Users;