import React from "react"
import styles from "./Users.module.css"
import * as axios from 'axios'
import userPhoto from '../../../assets/images/user_person.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(respons => {
            this.props.setUsers(respons.data.items) 
            this.props.setTotalUsersCount(respons.data.totalCount)
        })
    }

    onClickNumberPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${numberPage}`).then(respons => {
            this.props.setUsers(respons.data.items) 
        })
    }

    render() {
        let users = this.props.users.map(user => {
            return (
                
                <div className={styles.users} key={user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
                    <div>
                        {user.followed ? 
                        <button onClick={() => {this.props.unfollow(user.id)}}>unfollow</button> :
                        <button onClick={() => {this.props.follow(user.id)}}>follow</button>
                        }
                    </div>
                    <dir>name: {user.name}</dir>
                    <div>status: {user.status}</div>
                    <div>country: {'user.location.country'}</div>
                    <div>city: {'user.location.city'}</div>
                </div>
            )
        })

        let pagesCaunt = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCaunt; i++){
            pages.push(i)
        }
        console.log(pages)
    
        return(
            
            <div>
                <div>{pages.map(page => <span onClick={() => {this.onClickNumberPage(page)}} 
                                        className={this.props.currentPage === page && styles.selectPage}>
                                            {page}|
                                        </span>)}
                </div>
                {users}
            </div>
        )
    }
}

export default Users

/*const Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
            props.addUsers(respons.data.items)    
            })
        
    }

    let users = props.users.map(user => {
        return (
            <div className={styles.users} key={user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
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

    return(
        <div>
            {users}
        </div>
    )
}

export default Users*/