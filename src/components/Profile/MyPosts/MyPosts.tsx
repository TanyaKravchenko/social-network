import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/store';


export type MyPostsType = {
    //profilePage: InitialStateType
    addPost: () => void
    onPostChange: (text: string) => void
    posts: Array<PostType>
    newPostText: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likes={post.likes}/>)

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onPostChange(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder={'Enter your message'}
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
