import { connect } from "react-redux";
import FrendsNavBar from "./FrendsNavBar/FrendsNavBar";

const mapStateToProps = (state) => {
     
    return {
        frends: state.navBar.frends
    }
}

const FrendsNavBarContainer = connect(mapStateToProps)(FrendsNavBar)

export default FrendsNavBarContainer