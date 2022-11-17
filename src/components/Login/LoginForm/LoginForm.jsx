import { Field, reduxForm  } from "redux-form"
import { Input } from "../../FormControl/FormControl"
import { required, maxLength30 } from '../../../utils/validatorsForm'
import styles from '../../FormControl/FormControl.module.css'
import { reset } from 'redux-form'

const LoginForm = (props) => {
    
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field placeholder="email" component={Input} type='email' name='email' 
               validate={[required, maxLength30]} />
            </div>
            <div>
               <Field placeholder="password" component={Input} type='password' name='password'
               validate={[required, maxLength30]} />
            </div>
            <div>
                <label htmlFor="rememberMe">remember me</label>
                <Field component='input' type='checkBox' name='rememberMe' />
            </div>
            <button type='submit'>submit</button>
            {props.error && <div className={styles.formGeneralError}>
                {props.error}
            </div>}
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)