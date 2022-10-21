import { Navigate } from 'react-router-dom'
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})

export let withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {return  <Navigate to='/login' />}
        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToProps)(RedirectComponent)
    
    return ConnectedAuthRedirectComponent
}



