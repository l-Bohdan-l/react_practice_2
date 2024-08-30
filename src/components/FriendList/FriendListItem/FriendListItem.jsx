import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendListItem}>
      <img className={css.friendLogo} src={avatar} alt="user avatar" />
      <p className={css.friendName}>{name}</p>
      {isOnline && (
        <p className={clsx(css.friendStatus, css.isOnline)}>Online</p>
      )}
      {!isOnline && (
        <p className={clsx(css.friendStatus, css.isOffline)}>Offline</p>
      )}
    </div>
  );
}
