import { connect } from "react-redux";
import DialogItem from "./DialogsItem/DialogItem";
import { compose } from 'redux'
import { getDialogs } from '../../../selectors/selectors'

const mapStateToProps = (state) => {
    return {
       dialogs: getDialogs(state)
    }
}
export default compose(connect(mapStateToProps))(DialogItem)
