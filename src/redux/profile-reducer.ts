import {v1} from 'uuid'
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {BaseThunkType, InferActionsTypes} from './redux-store';
import {FormAction} from 'redux-form/lib/actions';
import {PhotosType, PostType, ProfileType} from '../types/types';

const ADD_POST = 'SN/PROFILE/ADD-POST'
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'SN/PROFILE/SET_STATUS'
const DELETE_POST = 'SN/PROFILE/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS'

// type PostType = {
//     id: string
//     message: string
//     likes: number
// }
//
// type ContactType = {
//     facebook: string | null
//     website: string | null
//     vk: string | null
//     twitter: string | null
//     instagram: string | null
//     youtube: string | null
//     github: string | null
//     mainLink: string | null
// }
//
// type PhotosType = {
//     small: string
//     large: string
// }
//
// export type ProfileType = {
//     aboutMe: string
//     contacts: ContactType
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     userId: string
//     photos: PhotosType
// }

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

let initialState = {
    posts: [
        {id: v1(), message: 'HiHello', likesCount: 5},
        {id: v1(), message: 'YoHello', likesCount: 15}
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0
            }
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        default:
            return state
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: ADD_POST, newPostText} as const),
    setUserProfile: (profile: ProfileType | null) => ({type: SET_USER_PROFILE, profile} as const),
    setStatus: (status: string) => ({type: SET_STATUS, status} as const),
    deletePost: (postId: number) => ({type: DELETE_POST, postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(response.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0)
        dispatch(actions.setStatus(status))
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export default profileReducer;

