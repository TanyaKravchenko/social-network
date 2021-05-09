import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfileType = {
    ProfilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.ProfilePage.posts}
                     newPostText={props.ProfilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    );
}
export default Profile;
