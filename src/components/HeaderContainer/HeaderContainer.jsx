import * as axios from "axios";
import React from "react";
import Header from "./Header/Header";
import { setUserAuthData } from '../../redux/authReducer'
import { connect } from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true})
        .then(respons => {
            if(respons.data.resultCode === 0){
                let {id, login, email} = respons.data.data
                this.props.setUserAuthData(id, email, login)
            }
        })
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer)