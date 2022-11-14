import MyMassage from "./MyMassage/MyMassage";
import { connect } from "react-redux";
import { addMassageItem } from "../../../../../redux/messagesReducer";

const mapStateToProps = (state) => {
  return {
    massageText: state.massagesPage.massageText
  }
}
 
const MyMassageContainer = connect(mapStateToProps, {addMassageItem})(MyMassage);

export default MyMassageContainer;
