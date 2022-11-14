import MyPost from "./MyPost/MyPost";
import { addPostsItem } from "../../../../redux/profileReducer";
import { connect } from "react-redux"
import { getPostText } from '../../../../selectors/selectors'

let mapStateToProps = (state) => {

  return {
    postText: getPostText(state)
  }
}

const MyPostContainer = connect(mapStateToProps, {addPostsItem})(MyPost)

export default MyPostContainer;
