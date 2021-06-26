import axios from 'axios';
import {stopSubmit} from 'redux-form';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '22d983b1-894f-49cd-9ef9-5c17b8e4c8a6'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

type loginPostType = {
    resultCode: 0 | 1 | 100
    messages: Array<string>
        data: {
        userId: 2
    }
}

type StopSubmitType = {
    stopSubmit: (form: string, errors?: any) => void
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
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
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<loginPostType & StopSubmitType>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

