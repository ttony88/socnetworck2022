import userPhoto from '../../../assets/images/user_person.png'
import Preloader from '../../common/Preloader/Preloader'
import styles from "./Users.module.css"
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let users = props.users.map(user => {
        return (
            <div className={styles.users} key={user.id}>
                <NavLink to={'/profile/' + user.id} >
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
                </NavLink>
                <div>
                    {user.followed ? 
                    <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> :
                    <button onClick={() => {props.follow(user.id)}}>follow</button>
                    }
                </div>
                <dir>name: {user.name}</dir>
                <div>status: {user.status}</div>
                <div>country: {'user.location.country'}</div>
                <div>city: {'user.location.city'}</div>
            </div>
        )
    })

    let pagesCaunt = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCaunt; i++){
        pages.push(i)
    }
    console.log(pages)

    return(
        <div>
            {props.isFetching ? <Preloader /> : null}
            <div>{pages.map(page => <span onClick={() => {props.onPageChange(page)}} 
                                    className={props.currentPage === page && styles.selectPage}>
                                        {page}|
                                    </span>)}
            </div>
            {users}
        </div>
    )
}
export default Users