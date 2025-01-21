import css from "./SearchBar.module.css";
import { useGetReduxStore } from "../../../redux/useGetReduxStore";
import { changeFilter } from "../../../redux/filtersSlice";
import { useDispatch } from "react-redux";
// export default function SearchBar({ filterValue, changeFilter }) {
//   return (
//     <div className={css.wrapper}>
//       <label htmlFor="search">Find contacts by name</label>
//       <input
//         type="text"
//         name="search"
//         placeholder="Search..."
//         value={filterValue}
//         onChange={(e) => changeFilter(e.target.value)}
//       />
//     </div>
//   );
// }

export default function SearchBar() {
  const dispatch = useDispatch();
  const { filters } = useGetReduxStore();

  const handleChange = (value) => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={filters}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
