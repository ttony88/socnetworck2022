import userPhoto from '../../../../assets/images/user_person.png'
import styles from "./User.module.css"
import { NavLink } from "react-router-dom"

const User = ({user, ...props}) => {
    return(
        <div className={styles.users} key={user.id}>
            <NavLink to={'/profile/' + user.id} >
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
            </NavLink>
            <div>
                {user.followed ? 
                <button disabled={props.followingInProgres.some(id => id === user.id)} onClick={() => {
                    props.unfollow(user.id)
                }}>unfollow</button> :
                <button disabled={props.followingInProgres.some(id => id === user.id)} onClick={() => {
                    props.follow(user.id)
                }}>follow</button>
                }
            </div>
            <dir>name: {user.name}</dir>
            <div>status: {user.status}</div>
            <div>country: {'user.location.country'}</div>
            <div>city: {'user.location.city'}</div>
        </div>
    )
}

export default User