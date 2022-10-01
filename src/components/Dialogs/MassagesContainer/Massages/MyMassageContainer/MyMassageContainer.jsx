import MyMassage from "./MyMassage/MyMassage";
import { connect } from "react-redux";
import { addMassageItem, updateMassageText } from "../../../../../redux/messagesReducer";

const mapStateToProps = (state) => {
  return {
    massageText: state.massagesPage.massageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMassage: () => {
      dispatch(addMassageItem());
    },

    updateMassageText: (text) => {
      dispatch(updateMassageText(text));
    },
  };
};
 
const MyMassageContainer = connect(mapStateToProps, mapDispatchToProps)(MyMassage);

export default MyMassageContainer;
