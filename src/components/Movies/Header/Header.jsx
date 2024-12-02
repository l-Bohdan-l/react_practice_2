import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Main page
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
