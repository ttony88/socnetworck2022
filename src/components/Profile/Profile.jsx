import MyPost from "./MyPost/MyPost";
import Post from "./Post/Post";
import styles from "./Profile.module.css";

const Profile = (props) => {

  let posts = props.profilePage.posts.map(post => <Post massage={post.massage} like={post.like} />)

  return (
    <div className={styles.profile}>
      <div>ava + status</div>
      <MyPost addPostsItem={props.addPostsItem} 
              postText={props.profilePage.postText}
              changePostText={props.changePostText} />
      {posts}
    </div>
  );
};
export default Profile;
