import { createSelector } from "@reduxjs/toolkit";
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

const selectContacts = (state) => state.contacts.items;
const selectFilterName = (state) => state.filters.name;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
