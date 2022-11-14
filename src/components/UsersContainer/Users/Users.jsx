import Preloader from '../../common/Preloader/Preloader'
import Pagination from '../../common/Pagination/Pagination'
import User from './User/User'

const Users = (props) => {
    let users = props.users.map(user => {
        return (
            <div>
                <User user={user} key={user.id} 
                      followingInProgres={props.followingInProgres}
                      unfollow={props.unfollow} follow={props.follow} />
            </div>
        )
    })

    return(
        <div>
            {props.isFetching ? <Preloader /> : null}
            <Pagination onPageChange={props.onPageChange}
                        currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize} />
            {users}
        </div>
    )
}
export default Users