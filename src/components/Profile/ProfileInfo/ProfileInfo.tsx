import React from 'react';
import classes from './ProfileInfo.module.css';
import profileImg from '../../../images/anons.jpg';
import {ProfileInfoType} from '../Profile';
import Preloader from '../../common/Preloader/Preloader';

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
                        <img src={props.profile.photos.large} alt={'photos'}/>
                    </div>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div>
                        {props.profile.aboutMe}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
