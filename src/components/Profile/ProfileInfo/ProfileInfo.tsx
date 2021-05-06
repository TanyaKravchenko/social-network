import React from 'react';
import profile_img from '../../../images/anons.jpg'
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                {/*<img src={profile_img} alt={'profile_img'}/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;
