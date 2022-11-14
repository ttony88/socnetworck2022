import { Field, reduxForm } from "redux-form"
import { Textarea } from '../../../../../../FormControl/FormControl'
import { required, maxLength30 } from '../../../../../../../utils/validatorsForm'

const MyMassageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="myMassageTexarea" placeholder="My message"
            validate={[required, maxLength30]}/>
            <button type='submit'>Add massage</button>
        </form>
    )
}
export default reduxForm({form: 'addMyMassage'})(MyMassageForm)