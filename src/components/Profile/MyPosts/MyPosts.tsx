import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hello'} likes={5}/>
                <Post message={'Hi'} likes={15}/>
            </div>
        </div>
    );
}

export default MyPosts;
