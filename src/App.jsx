// import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import SearchBar from "./components/Contacts/SearchBar/SearchBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        <ContactList />
      </div>
    </>
  );
}

export default App;
