import {v1} from 'uuid'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type PostType = {
    id: string
    message: string
    likes: number
}

type ContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: PhotosType
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

type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType | null
}

export type ActionType =
    AddPostType |
    UpdateNewPostTextType |
    setUserProfileType

let initialState = {
    posts: [
        {id: v1(), message: 'HiHello', likes: 5},
        {id: v1(), message: 'YoHello', likes: 15}
    ],
    newPostText: '',
    profile: null as ProfileType | null
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile: ProfileType | null): setUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;

