import { usersAPI, followAPI } from '../api/api'

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER ='UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGES = 'SET_CURRENT_PAGES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const  TOGGLE_FOLLOWING_PROGRES = 'TOGGLE_FOLLOWING_PROGRES'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRES:
            return {
                ...state,
                followingInProgres: action.isFetching
                ? [...state.followingInProgres, action.userId]
                : state.followingInProgres.filter(id => id !== action.userId)
            }
    
        default:
            return state
    }
}

export default usersReducer

export const showFollow = (userId) => ({type: FOLLOW_USER, userId})
export const showUnfollow = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGES, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgres = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOWING_PROGRES, isFetching, userId}
}
export const addUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgres(true, userId))
        followAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0){
                dispatch(showUnfollow(userId))
            }
            dispatch(toggleFollowingInProgres(false, userId))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgres(true, userId))
        followAPI.followUser(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(showFollow(userId))

            }
            dispatch(toggleFollowingInProgres(false, userId))
        })
    }
}