import { connect } from "react-redux";
import FrendsNavBar from "./FrendsNavBar/FrendsNavBar";
import { compose } from 'redux'

const mapStateToProps = (state) => {
     
    return {
        frends: state.navBar.frends
    }
}

export default compose(connect(mapStateToProps))(FrendsNavBar)