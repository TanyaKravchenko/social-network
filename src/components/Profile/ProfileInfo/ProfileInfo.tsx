import React from 'react';
import classes from './ProfileInfo.module.css';
import profileImg from '../../../images/anons.jpg';
import {ProfileInfoType} from '../Profile';
import Preloader from '../../common/Preloader/Preloader';
import avatar from '../../../images/avatar3.jpg';

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<div className={classes.profileImg}>*/}
                {/*    <img src={profileImg} alt={'profileImg'}/>*/}
                {/*</div>*/}
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
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
