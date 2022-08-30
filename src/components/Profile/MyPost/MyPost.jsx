import styles from './MyPost.module.css'

const MyPost = () => {
  return (
    <div>
      <input className={styles.post}/>
      <button className={styles.newPost}>add post</button>
    </div>
  );
};

export default MyPost