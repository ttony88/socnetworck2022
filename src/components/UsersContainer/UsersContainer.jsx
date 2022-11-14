import React from "react"
import { connect } from "react-redux";
import Users from "./Users/Users";
import { follow, unfollow, setCurrentPage, addUsers } from "../../redux/usersReducer"
import { compose } from 'redux'
import { getUsers, getPageSize, getPage,
         getTotalUsersCount, getIsFetching, getFollowingInProgres } from '../../selectors/selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.addUsers(this.props.pageSize, this.props.currentPage)
    }
    // при таком синтаксее определения методов не нужен bind
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        this.props.addUsers(this.props.pageSize, numberPage)
    }

    render() {
        return <Users onPageChange={this.onPageChange} {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state)
    }
}

export default compose (connect (mapStateToProps, {follow, unfollow, setCurrentPage, addUsers}))
                       (UsersContainer)

 