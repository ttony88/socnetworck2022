import MyPost from "../MyPost/MyPost";
import Post from "../Post/Post";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>ava + status</div>
      <MyPost />
      <Post massage='hi' licke='10' />
      <Post massage='hello' licke='17' />
    </div>
  );
};
export default Profile;
