import { profileAPI } from '../api/api'

const ADD_POST_ITEM = 'profile/ADD_POST_ITEM'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'

let initialState = {
    posts: [
        { id: 1, massage: "hi, my frend", like: 99 },
        { id: 2, massage: "hello", like: 17 },
    ],

    profile: null,
    status: ''
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_POST_ITEM:
            let newPost = {id: 3, massage: action.postText, like: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }
        
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
} 
export default profileReducer      

export const addPostsItem = (postText) => ({type: ADD_POST_ITEM, postText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const setUserStatus = (status) => ({type: SET_STATUS, status})

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}
export const updataUserStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI.updataStatus(newStatus).then(data => {
            if (data.resultCode === 0){
                dispatch(setUserStatus(newStatus))
            }
            
        })
    }
}
