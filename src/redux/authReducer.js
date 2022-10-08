const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    userId: null,
    userEmail: null,
    userLogin: null
}

const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                data: [...state.data, ...action.data]
            }
    
        default:
            return {
                ...state
            }
    }
}

export default authReducer

export const setUserAuthData = (userId, userEmail, userLogin) => ({
    type: SET_USER_AUTH_DATA, data: [userId,userEmail,userLogin]
})