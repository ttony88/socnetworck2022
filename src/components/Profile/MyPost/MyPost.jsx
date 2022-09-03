import styles from './MyPost.module.css'

const MyPost = () => {
  return (
    <div>
      <textarea className={styles.post}/>
      <button className={styles.newPost}>add post</button>
    </div>
  );
};

export default MyPost