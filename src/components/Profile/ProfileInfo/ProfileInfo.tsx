import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileInfoType} from '../Profile';
import Preloader from '../../common/Preloader/Preloader';
import avatar from '../../../images/avatar3.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <div className={classes.descriptionBlock}>
                    <div className={classes.ProfilePhotos}>
                        <img src={props.profile.photos.small ? props.profile.photos.large : avatar} alt={'photos'}/>
                    </div>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div>
                        {props.profile.aboutMe}
                    </div>
                    <div>
                        {props.profile.contacts.github}
                    </div>
                    <div>
                        <ProfileStatusWithHooks
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
