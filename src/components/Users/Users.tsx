import React from 'react';
import classes from '../Users/Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {UserType} from '../../types/types';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             pageSize,
                                             currentPage,
                                             onPageChanged,
                                             users,
                                             followingInProgress,
                                             unfollow,
                                             follow
                                         }) => {
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