import React from "react"
import Header from "./Header/Header"
import { connect } from "react-redux"
import { getMeAuthData, logoutMe } from '../../redux/authReducer'
import { compose } from 'redux'
import { getAuthData } from '../../selectors/selectors'

class HeaderContainer extends React.Component {

    componentDidMount(){
       this.props.getMeAuthData()
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    auth: getAuthData(state)
})

export default compose(connect(mapStateToProps, {getMeAuthData, logoutMe}))(HeaderContainer)