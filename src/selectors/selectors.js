export const getPostText = (state) => {
    return state.profilePage.postText
}

export const getPosts = (state) => { 
    return state.profilePage.posts
}

export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getStatus = (state) => {
    return state.profilePage.status
}

export const getUsers = (state) => {
    return state.usersPage.users
} 

export const getPageSize = (state) => {
    return state.usersPage.pageSize
} 

export const getPage = (state) => {
    return state.usersPage.currentPage
} 
       
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
} 
        
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}  

export const getFollowingInProgres = (state) => {
    return state.usersPage.followingInProgres
}

export const getFrends = (state) => {
    return state.navBar.frends
} 

export const getAuthData = (state) => {
    return state.auth
} 

export const getDialogs = (state) => {
    return state.massagesPage.dialogs
} 
        
        