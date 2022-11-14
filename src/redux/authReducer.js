import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    userEmail: null,
    userLogin: null,
    isAuth: false
}

const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    
        default:
            return {
                ...state
            }
    }
}

export default authReducer

const setUserAuthData = (userId, userEmail, userLogin, isAuth) => ({type: SET_AUTH_USER_DATA, 
                                                            data: {userId, userEmail, userLogin, isAuth}})
export const getMeAuthData = () => {
    return (dispatch) => {
        return authAPI.me().then(data => {
            if(data.resultCode === 0){
                let {id, login, email} = data.data
                dispatch(setUserAuthData(id, email, login, true))
            }
        })
    }
} 

export const loginMe = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
                dispatch(getMeAuthData())
            } else {
                const message = data.messages.length > 0 ? data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logoutMe = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if(data.resultCode === 0){
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
    }
}