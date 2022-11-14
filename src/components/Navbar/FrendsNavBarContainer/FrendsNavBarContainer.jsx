import { connect } from "react-redux";
import FrendsNavBar from "./FrendsNavBar/FrendsNavBar";
import { compose } from 'redux'
import { getFrends } from '../../../selectors/selectors'

const mapStateToProps = (state) => {
     
    return {
        frends: getFrends(state)
    }
}

export default compose(connect(mapStateToProps))(FrendsNavBar)