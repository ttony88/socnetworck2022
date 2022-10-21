import React from "react"
import Header from "./Header/Header"
import { connect } from "react-redux"
import { getMeAuthData, setUserAuthData } from '../../redux/authReducer'
import { compose } from 'redux'

class HeaderContainer extends React.Component {

    componentDidMount(){
       this.props.getMeAuthData()
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default compose(connect(mapStateToProps, {getMeAuthData}))(HeaderContainer)