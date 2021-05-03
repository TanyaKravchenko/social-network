import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../images/avatar1.png';

const Post = () => {
    return (
        <div className={classes.item}>
            <div className={classes.post_avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div>
                post1
            </div>
            <div>
                <span>
                    Like 5
                </span>
            </div>
        </div>
    );
}

export default Post;
