import {v1} from 'uuid'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type PostType = {
    id: string
    message: string
    likes: number
}

export type InitialStateType = typeof initialState

type AddPostType = {
    type: 'ADD-POST'
    //newPostText: string
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionType =
    AddPostType |
    UpdateNewPostTextType

let initialState = {
    posts: [
        {id: v1(), message: 'HiHello', likes: 5},
        {id: v1(), message: 'YoHello', likes: 15}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            if (state.newPostText.trim() !== '') {
            } else {
                alert('Error. Нужно доделать')
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostType => {
    return {
        type: ADD_POST,
        // newPostText: newPostText
    }
}
export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export default profileReducer;

