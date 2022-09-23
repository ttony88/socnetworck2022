import React from "react";
import styles from './MyPost.module.css'

const MyPost = (props) => {

  const newPost = React.createRef();

  const addPost = () => {
    return props.addPost()
  }

  const newPostChange = () => {
    let text = newPost.current.value;
    return props.newPostChange(text)
  }

  return (
    <div>
      <textarea onChange={newPostChange} value={props.postText}  ref={newPost} className={styles.post}/>
      <button onClick={addPost} className={styles.newPost}>add post</button>
    </div>
  );
};

export default MyPost