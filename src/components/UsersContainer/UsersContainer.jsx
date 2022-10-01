import { connect } from "react-redux";
import Users from "./Users/Users";
import { setUsers, follow, unfollow, setTotalUsersCount, setCurrentPage } from "../../redux/usersReducer"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(follow(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },

        setUsers: (users) => {
            dispatch(setUsers(users))
        },

        setTotalUsersCount: (totalUsersCount) => {
            dispatch (setTotalUsersCount(totalUsersCount))
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer