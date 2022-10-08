import React from "react"
import * as axios from 'axios'
import { connect } from "react-redux";
import Users from "./Users/Users";
import { setUsers, follow, unfollow, setTotalUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/usersReducer"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(respons => {
            this.props.setUsers(respons.data.items)
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(respons.data.totalCount)
        })
    }
    // при таком синтаксее определения методов не нужен bind
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`).then(respons => {
            this.props.setUsers(respons.data.items)
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

 