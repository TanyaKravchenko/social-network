import {v1} from 'uuid'
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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

export type ActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof deletePost>

let initialState = {
    posts: [
        {id: v1(), message: 'HiHello', likes: 5},
        {id: v1(), message: 'YoHello', likes: 15}
    ],
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likes: 0
            }
            // if (action.newPostText.trim() !== '') {
            // } else {
            //     alert('Error. Нужно доделать')
            // }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
                case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    }as const
}

export const deletePost = (postId: string) => {
    return {
        type: DELETE_POST,
        postId
    }as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status))
        })
}

export default profileReducer;

