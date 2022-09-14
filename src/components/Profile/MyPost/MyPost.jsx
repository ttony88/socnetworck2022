import React from 'react';
import styles from './MyPost.module.css'
import { addPostsItem, updatePostText } from '../../../redux/profileReducer';

const MyPost = (props) => {

  const newPost = React.createRef()

  const addPost = () => {
    let text = newPost.current.value
    props.dispatch(addPostsItem(text))
  }

  const newPostChange = () => {
    let text = newPost.current.value
    props.dispatch(updatePostText(text))
  }

  return (
    <div>
      <textarea onChange={newPostChange} value={props.postText}  ref={newPost} className={styles.post}/>
      <button onClick={addPost} className={styles.newPost}>add post</button>
    </div>
  );
};

export default MyPost