import { Field, reduxForm } from "redux-form"
import { Textarea } from "../../../../../FormControl/FormControl"
import { required, maxLength30 } from '../../../../../../utils/validatorsForm'

const MyPostForm = (props) => {
    return( 
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='myPostTextarea' validate={[required, maxLength30]}/>
            <button type='submit'>add post</button>
        </form>
    )
}

export default reduxForm({form: 'addMyPost'})(MyPostForm)