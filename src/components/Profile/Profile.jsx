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
        <li>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li>
          <span>Views</span> <span>{views}</span>
        </li>
        <li>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
