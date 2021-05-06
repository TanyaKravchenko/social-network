import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

export type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsType> = (props ) => {
    let postsElement = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
