import React from "react"
import { connect } from "react-redux"
import { getUser, getUserStatus, updataUserStatus } from '../../redux/profileReducer'
import Profile from './Profile/Profile'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'
import { getProfile, getStatus } from '../../selectors/selectors'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId){
            return userId = 2
        }
        console.log(userId)
        this.props.getUser(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return(
        <div>
            <Profile {...this.props} />
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state)
    }
}

const ParamsUrlUser = (props) => {
    return(
        <ProfileContainer {...props} params={useParams()} />
    )
}

export default compose(connect(mapStateToProps, {getUser, getUserStatus, updataUserStatus}), withAuthRedirect)(ParamsUrlUser)