import React from "react"
import { connect } from "react-redux";
import Users from "./Users/Users";
import { follow, unfollow, setCurrentPage, addUsers } from "../../redux/usersReducer"
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres
    }
}

export default compose (connect (mapStateToProps, {follow, unfollow, setCurrentPage, addUsers}),
                        withAuthRedirect)(UsersContainer)

 