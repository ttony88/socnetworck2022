const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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
                ...action.data,
                isAuth: true
            }
    
        default:
            return {
                ...state
            }
    }
}

export default authReducer

export const setUserAuthData = (userId, userEmail, userLogin) => ({type: SET_AUTH_USER_DATA, data: {userId, userEmail, userLogin}
})