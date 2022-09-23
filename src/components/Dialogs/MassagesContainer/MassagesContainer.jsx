import { connect } from "react-redux";
import Massages from "./Massages/Massages";

let mapStateToProps = (state) => {
     
    return {
        massages: state.massagesPage.massages
    }
}

const MassagesContainer = connect(mapStateToProps)(Massages)

export default MassagesContainer