import MyMassage from "./MyMassage/MyMassage";
import { connect } from "react-redux";
import { addMassageItem } from "../../../../../redux/messagesReducer";

let mapDispatchToProps = (dispatch) => {
  return {
    addMassage: (text) => {
      
      dispatch(addMassageItem(text));
    },
  };
};
 
const MyMassageContainer = connect(null, mapDispatchToProps)(MyMassage);

export default MyMassageContainer;
