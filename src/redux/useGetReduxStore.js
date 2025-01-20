import { useSelector } from "react-redux";

export const useGetReduxStore = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);
  return {
    contacts,
    filters,
  };
};
