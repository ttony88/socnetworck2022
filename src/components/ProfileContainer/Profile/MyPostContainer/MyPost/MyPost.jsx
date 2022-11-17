import React from "react";
import MyPostForm from './MyPostForm/MyPostForm'
import { reset } from "redux-form"

const MyPost = (props) => {

  const addPost = (values, dispatch) => {
    props.addPostsItem(values.myPostTextarea)
    dispatch(reset('addMyPost'))
  }

  return (
    <div>
      <MyPostForm onSubmit={addPost}/>
    </div>
  );
};

export default MyPost