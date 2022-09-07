import React from 'react';
import styles from './MyPost.module.css'

const MyPost = (props) => {

  const newPost = React.createRef()

  const addPost = () => {
    let text = newPost.current.value
    props.addPostsItem(text)
  }

  const newPostChange = () => {
    let text = newPost.current.value
    props.changePostText(text)
  }

  return (
    <div>
      <textarea onChange={newPostChange} value={props.postText}  ref={newPost} className={styles.post}/>
      <button onClick={addPost} className={styles.newPost}>add post</button>
    </div>
  );
};

export default MyPost