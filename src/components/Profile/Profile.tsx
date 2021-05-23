import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {InitialStateType} from '../../redux/profile-reducer';

type ProfileType = {
    profilePage: InitialStateType
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}
export default Profile;
