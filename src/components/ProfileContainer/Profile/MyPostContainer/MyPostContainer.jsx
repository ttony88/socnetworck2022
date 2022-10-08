import MyPost from "./MyPost/MyPost";
import { addPostsItem, updatePostText } from "../../../../redux/profileReducer";
import { connect } from "react-redux"

let mapStateToProps = (state) => {

  return {
    postText: state.profilePage.postText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostsItem());
    },

    newPostChange: (text) => {
      dispatch(updatePostText(text));
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
