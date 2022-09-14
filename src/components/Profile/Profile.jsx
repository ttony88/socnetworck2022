import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import styles from "./Profile.module.css";

const Profile = (props) => {

  let posts = props.profilePage.posts.map(post => <Post key={post.id} massage={post.massage} like={post.like} />)

  return (
    <div className={styles.profile}>
      <div>ava + status</div>
      <MyPost dispatch={props.dispatch} 
              postText={props.profilePage.postText} />
      {posts}
    </div>
  );
};
export default Profile;
