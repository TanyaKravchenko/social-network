import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../assets/images/avatar1.png';

type PostType = {
    id: string | number
    message: string
    likes: number
}

const Post: React.FC<PostType> = (props) => {
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
