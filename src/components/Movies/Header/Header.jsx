import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Main page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
}
