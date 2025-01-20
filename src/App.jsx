// import { useEffect } from "react";
import "./App.css";
// import ContactForm from "./components/Contacts/ContactForm/ContactForm";
// import SearchBar from "./components/Contacts/SearchBar/SearchBar";
// import ContactList from "./components/Contacts/ContactList/ContactList";
import { useGetReduxStore } from "./redux/useGetReduxStore";
// import { useSelector } from "react-redux";
function App() {
  const { contacts, filters } = useGetReduxStore();
  console.log(contacts, filters);

  //   const contacts1 = contacts;
  //   const filter = filters;
  //   const filteredContacts = contacts.filter((e) =>
  //     e.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  const addContact = () => {};

  const deleteContact = () => {};

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm addContact={addContact} /> */}
        {/* <SearchBar filterValue={filter} /> */}
        {/* <ContactList contacts={contacts} deleteContact={deleteContact} /> */}
      </div>
    </>
  );
}

export default App;
