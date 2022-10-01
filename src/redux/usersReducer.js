const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER ='UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1
};

const usersReducer = (state=initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })]
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })] 
            }
        case SET_USERS: 
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGES:
            return {
                ...state,
                currentPage: action.currentPage
            }
    
        default:
            return state
    }
}

export default usersReducer

export const follow = (userId) => ({type: FOLLOW_USER, userId})
export const unfollow = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGES, currentPage})
