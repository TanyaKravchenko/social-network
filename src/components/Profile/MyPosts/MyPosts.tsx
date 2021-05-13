import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import {ActionType, ProfilePageType} from '../../../redux/store';

export type MyPostsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.profilePage.posts.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likes={post.likes}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.profilePage.newPostText));
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;
