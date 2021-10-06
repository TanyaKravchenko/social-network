import React from 'react';
import classes from './Music.module.css'
import music_image from '../../assets/images/music.png';

const Music = () => {
    return (
        <div className={classes.item}>
            <img src={music_image} alt={'music_image'}/>
            Music
        </div>
    );
}

export default Music;