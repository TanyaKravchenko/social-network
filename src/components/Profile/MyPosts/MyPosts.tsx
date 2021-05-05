import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        {id:1, message: 'HiHello', likes: 5},
        {id:2, message: 'YoHello', likes: 15}
    ]

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
            </div>
        </div>
    );
}

export default MyPosts;
