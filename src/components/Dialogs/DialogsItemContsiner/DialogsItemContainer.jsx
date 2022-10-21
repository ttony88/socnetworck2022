import { connect } from "react-redux";
import DialogItem from "./DialogsItem/DialogItem";
import { compose } from 'redux'

const mapStateToProps = (state) => {
    return {
       dialogs: state.massagesPage.dialogs
    }
}
export default compose(connect(mapStateToProps))(DialogItem)
