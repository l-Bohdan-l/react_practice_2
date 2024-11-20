import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/">Main page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
}
