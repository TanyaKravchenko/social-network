import React from 'react';
import profile_img from './../../images/anons.jpg'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src={profile_img} alt={'profile_img'}/>
            </div>
            <div className={classes.item}>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
