import * as axios from 'axios';
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from '../../redux/profileReducer'
import Profile from './Profile/Profile'
import { useParams } from 'react-router-dom' 

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.params.userId
        
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId).then(respons => {
            this.props.setUserProfile(respons.data)})
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

export default  connect(mapStateToProps, {setUserProfile})(ParamsUrlUser)