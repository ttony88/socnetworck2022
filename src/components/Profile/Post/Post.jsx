import styles from './Post.module.css'

const Post = (props) => {
    
    return (
      <div>
        <div className={styles.item}>{props.massage} </div>
        <div>like: {props.licke}</div>
      </div>
    );
} 

export default Post