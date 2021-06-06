import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';

type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                profile={this.props.profile}/>
            </div>
        );
    }
}

let mapSateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapSateToProps, {
    setUserProfile
})(ProfileContainer);
