import axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '22d983b1-894f-49cd-9ef9-5c17b8e4c8a6'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            });
    },
    follow(id: string) {
        return instance.post(baseURL + `follow/${id}`)
    },
    unfollow(id: string) {
        return instance.delete(baseURL + `unfollow/${id}`)
    },
    getProfile(userId: string) {
        return axios.get(baseURL + `profile/` + userId);
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(baseURL + `profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(baseURL + `status/` + userId)
    },
    updateStatus(userId: string) {
        return instance.put(baseURL + `status/`)
    },
}

export const authAPI = {
    me() {
        return instance.get(baseURL + `auth/me`)
    }
}

