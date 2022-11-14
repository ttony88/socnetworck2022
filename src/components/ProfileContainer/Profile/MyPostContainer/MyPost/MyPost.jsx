import React from "react";
import MyPostForm from './MyPostForm/MyPostForm'

const MyPost = (props) => {

  const addPost = (values) => {
    return props.addPostsItem(values.myPostTextarea)
  }

  return (
    <div>
      <MyPostForm onSubmit={addPost}/>
    </div>
  );
};

export default MyPost