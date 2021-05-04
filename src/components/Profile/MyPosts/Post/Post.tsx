import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../images/avatar1.png';

type PostType = {
    message: string
    likes: number
}

const Post = (props:PostType) => {
    return (
        <div className={classes.item}>
            <div className={classes.post_avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <span>
                    Like: {props.likes}
                </span>
            </div>
        </div>
    );
}

export default Post;
