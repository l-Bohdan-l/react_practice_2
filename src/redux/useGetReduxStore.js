import { useSelector } from "react-redux";

export const useGetReduxStore = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const contactsIsLoading = useSelector((state) => state.contacts.loading);
  const contactsError = useSelector((state) => state.contacts.error);

  const filters = useSelector((state) => state.filters.name);
  return {
    contacts,
    contactsIsLoading,
    contactsError,
    filters,
  };
};
