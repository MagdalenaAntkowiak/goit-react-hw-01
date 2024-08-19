import React from "react";
import styles from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <img src={image} alt="User avatar" />
          <p className={styles.userName}>{name}</p>
          <p className={styles.userTag}>{tag}</p>
          <p className={styles.userLocation}>{location}</p>
        </div>

        <ul className={styles.dataProfile}>
          <li>
            <span>Followers</span>
            <span className={styles.userFollowers}>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={styles.userViews}>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={styles.userLikes}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
