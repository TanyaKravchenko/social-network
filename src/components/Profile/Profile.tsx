import React from 'react';
import content_img from './../../images/anons.jpg'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src={content_img} alt={'content_img'}/>
            </div>
            <div className={classes.item}>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
