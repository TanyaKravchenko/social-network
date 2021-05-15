import React, {ChangeEvent} from 'react';
import MyPosts from '../MyPosts';
import {AppStateType, RootReducerType} from '../../../../redux/redux-store';
import {ActionType, ProfilePageType} from '../../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';

export type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.profilePage.newPostText));
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
