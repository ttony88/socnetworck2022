import { connect } from "react-redux";
import Massages from "./Massages/Massages";
import { compose } from 'redux'

let mapStateToProps = (state) => {
     
    return {
        massages: state.massagesPage.massages
    }
}

export default compose(connect(mapStateToProps))(Massages)