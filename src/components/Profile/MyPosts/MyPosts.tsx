import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/store';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';


export type MyPostsType = {
    addPost: (newPostText: string) => void
    posts: Array<PostType>
    newPostText: string
}

type MyPostsFormType = {
    newPostText: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likes={post.likes}/>)

    const addNewPost = (values: MyPostsFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm<MyPostsFormType>({form: 'postMyPostsForm'})(MyPostsForm)

export default MyPosts;
