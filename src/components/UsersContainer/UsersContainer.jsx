import React from "react"
import { connect } from "react-redux";
import Users from "./Users/Users";
import { setUsers, follow, unfollow, setTotalUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/usersReducer"
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }
    // при таком синтаксее определения методов не нужен bind
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, numberPage).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <Users onPageChange={this.onPageChange}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

//Вместо mapDispatchToProps передаем объект с ac, эффект тот же

export default connect (mapStateToProps, {follow,
                                          unfollow,
                                          setUsers,
                                          setTotalUsersCount,
                                          setCurrentPage,
                                          toggleIsFetching})(UsersContainer)

 