import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../types/types';

export type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;
