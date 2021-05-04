import React from 'react';
import classes from './Settings.module.css'
import settings_image from '../../images/settings.png';

const Settings = () => {
    return (
        <div className={classes.item}>
            <div>
                Settings
            </div>
            <img src={settings_image} alt={'settings_image'}/>

        </div>
    );
}

export default Settings;