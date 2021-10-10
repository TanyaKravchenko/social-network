import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {requestUsers,actions} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from '../../redux/users-selectors';
import {UserType} from '../../types/types';

type UsersPropsType = {
    users: Array<UserType>
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    user={this.props.user}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// const mapStateToProps = (state: AppStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow: actions.followSuccess,
            unfollow: actions.unfollowSuccess,
            setUsers: actions.setUsers,
            setCurrentPage: actions.setCurrentPage,
            setUsersTotalCount: actions.setUsersTotalCount,
            toggleFollowingProgress: actions.toggleFollowingProgress,
            getUsers: requestUsers
        })
)(UsersContainer);


// const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setUsersTotalCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }
