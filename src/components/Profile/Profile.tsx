import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {AppStateType, RootStateType} from '../../redux/redux-store';
import {InitialStateType} from '../../redux/profile-reducer';

type ProfileType = {
    profilePage: InitialStateType
    // addPost: () => void
    // onPostChange: (text: string) => void
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
