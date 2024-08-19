import styles from "./friendList.module.css";
import React from "react";
import FriendListItem from "./FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendContainer}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
