import axios from 'axios';
import {PhotosType, UserType} from '../types/types';

export const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '22d983b1-894f-49cd-9ef9-5c17b8e4c8a6'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            });
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id: string) {
        return instance.delete(`unfollow/${id}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    }
}



export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

type SavePhotoResponseDataType = {
    photos: PhotosType
}

