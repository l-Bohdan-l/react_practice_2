import css from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" name="search" placeholder="Search..." />
    </div>
  );
}
