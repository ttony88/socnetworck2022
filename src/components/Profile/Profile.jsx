import React from "react";
import MyPostContainer from "./MyPostContainer/MyPostContainer";
import PostsContainer from "./PostsContainer/PostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <MyPostContainer />
      <PostsContainer />
    </div>
  );
};
export default Profile;
