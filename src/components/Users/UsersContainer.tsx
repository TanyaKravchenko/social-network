import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ActionType, followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UserType} from '../../redux/users-reducer';

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);
