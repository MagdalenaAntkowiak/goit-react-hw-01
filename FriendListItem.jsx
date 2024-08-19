import React from "react";
import styles from "./friendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <div>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`${name} avatar`}
          width="48"
        />
        <p className={styles.friendName}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
