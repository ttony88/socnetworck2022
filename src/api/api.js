import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6742bfbb-b768-4fb0-8adf-26e2c9f9bf7b'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const followAPI = {
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(respons => respons.data)},

    followUser(id) {
        return instance.post(`follow/${id}`).then(respons => respons.data)}
}

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(respons => respons.data)}
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(respons => respons.data)},
    
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe}).then(respons => respons.data)},

    logout() {
        return instance.delete('auth/login').then(respons => respons.data)
    }
} 

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId).then(respons => respons.data)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(respons => respons.data)
    },

    updataStatus(status) {
        return instance.put('profile/status', {status}).then(respons => respons.data)
    }
}



