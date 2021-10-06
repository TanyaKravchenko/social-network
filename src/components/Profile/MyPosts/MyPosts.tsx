import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControl';
import {PostType} from '../../../types/types';

// export type MyPostsType = {
//     addPost: (newPostText: string) => void
//     posts: Array<PostType>
//     newPostText: string
// }

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

type MyPostsFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10);

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo((props) => {
    let postsElement = props.posts.map(post =>
        <Post key={post.id}
              id={post.id}
              message={post.message}
              likes={post.likesCount}/>)

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
});

const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'Post message'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm<MyPostsFormType>({form: 'postMyPostsForm'})(MyPostsForm)

export default MyPosts;
