import { connect } from 'react-redux'
import LoginForm from './LoginForm/LoginForm'
import { loginMe } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
    
    let loginMe = (formData) => {
        return props.loginMe(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to={`/profile/${props.userId}`} />
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm onSubmit={loginMe} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps, {loginMe})(Login)