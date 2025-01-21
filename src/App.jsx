// import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import SearchBar from "./components/Contacts/SearchBar/SearchBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
import { useGetReduxStore } from "./redux/useGetReduxStore";
function App() {
  const { contacts, filters } = useGetReduxStore();
  console.log(contacts, filters);

  const filteredContacts = contacts.filter((e) =>
    e.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
