import { profileAPI } from '../api/api'

const ADD_POST_ITEM = 'ADD_POST_ITEM'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, massage: "hi, my frend", like: 99 },
        { id: 2, massage: "hello", like: 17 },
    ],

    postText: '',
    profile: null
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_POST_ITEM:
            let newPost = {id: 3, massage: state.postText, like: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }
        
        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.postText
            }
        
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
} 
export default profileReducer      

export const addPostsItem = () => ({type: ADD_POST_ITEM})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, postText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))})
    }
}
