import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfile, getUserStatus, savePhoto, updateStatus} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import { ProfileType } from '../../types/types';

type ProfileContainerType = {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
    status: string
    savePhoto: (file: File) => void
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type PathParamsType = {
    userId: any
}
type PropsType = ProfileContainerType & mapStateToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer)
