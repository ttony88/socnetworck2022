import React from "react"
import { connect } from "react-redux"
import { getUser } from '../../redux/profileReducer'
import Profile from './Profile/Profile'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.params.userId
        this.props.getUser(userId)
    }

    render() {
        return(
        <div>
            <Profile {...this.props} />
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {profile: state.profilePage.profile}
}

const ParamsUrlUser = (props) => {
    return(
        <ProfileContainer {...props} params={useParams()} />
    )
}

export default compose(connect(mapStateToProps, {getUser}), withAuthRedirect)(ParamsUrlUser)