import React from "react";
import Header from "./Header/Header";
import { setUserAuthData } from '../../redux/authReducer'
import { connect } from "react-redux";
import { authAPI } from '../../api/api'

class HeaderContainer extends React.Component {

    componentDidMount(){
        authAPI.getUserAuthData().then(data => {
            if(data.resultCode === 0){
                let {id, login, email} = data.data
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