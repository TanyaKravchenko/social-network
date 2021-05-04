import React from 'react';
import classes from './Dialogs.module.css'
import header_image from '../../images/image-header.jpg';

const Dialogs = () => {
    return (
        <div className={classes.item}>
            <img src={header_image} alt={'header_image'}/>
            Dialogs
        </div>
    );
}

export default Dialogs;