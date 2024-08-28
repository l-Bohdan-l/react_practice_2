import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={css.wrapper}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.userStatsList}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li className={clsx(css.statItem, css.secondStatItem)}>
          <span>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
