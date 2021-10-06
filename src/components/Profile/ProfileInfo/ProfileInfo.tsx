import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileInfoType} from '../Profile';
import Preloader from '../../common/Preloader/preloader';
import avatar from '../../../assets/images/avatar3.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <div className={classes.descriptionBlock}>
                    <div className={classes.ProfilePhotos}>
                        <img src={profile.photos.small ? profile.photos.large : avatar} alt={'photos'}/>
                    </div>
                    <div>
                        {profile.fullName}
                    </div>
                    <div>
                        {profile.aboutMe}
                    </div>
                    <div>
                        {profile.contacts.github}
                    </div>
                    <div>
                        <ProfileStatusWithHooks
                            status={status}
                            updateUserStatus={updateUserStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
