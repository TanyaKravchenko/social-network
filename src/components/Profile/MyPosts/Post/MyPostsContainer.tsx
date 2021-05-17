import React from 'react';
import MyPosts from '../MyPosts';
import {ActionType, ProfilePageType} from '../../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';

export type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let addPost = () => {
        if (props.profilePage.newPostText.trim() !== '') {
            props.dispatch(addPostActionCreator(props.profilePage.newPostText.trim()));
            props.profilePage.newPostText = '';
        } else {
            alert('Error. Нужно доделать')
        }
    }

    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <MyPosts
                addPost={addPost}
                updateNewPostText={onPostChange}
                profilePage={props.profilePage}/>
        </div>
    );
}

export default MyPostsContainer;
