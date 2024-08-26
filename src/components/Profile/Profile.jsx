import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={css.wrapper}>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p> <p>@{tag}</p> <p>{location}</p>
      </div>
      <ul>
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
