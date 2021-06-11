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

    getUsers2(id: number) {
        return instance.get(baseURL + `follow/${id}`)
            .then((response) => {
                return response.data
            });
    }
}