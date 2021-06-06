import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';

export type ProfileInfoType = {
    profile: ProfileType | null
}

const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}
export default Profile;
