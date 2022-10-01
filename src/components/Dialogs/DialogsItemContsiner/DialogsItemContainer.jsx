import { connect } from "react-redux";
import DialogItem from "./DialogsItem/DialogItem";

const mapStateToProps = (state) => {
    return {
       dialogs: state.massagesPage.dialogs
    }
}

const DialogsItemContainer = connect(mapStateToProps)(DialogItem)

export default DialogsItemContainer