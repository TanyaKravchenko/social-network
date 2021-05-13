import {v1} from 'uuid';
import {AddPostType,UpdateNewPostTextType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type PostType = {
    id: string
    message: string
    likes: number
}

const profileReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostType => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export default profileReducer;

