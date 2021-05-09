import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

export type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likes={post.likes}/>)

    let addPost = () => {
            props.addPost()
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
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
