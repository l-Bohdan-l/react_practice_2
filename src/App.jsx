// import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import SearchBar from "./components/Contacts/SearchBar/SearchBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useGetReduxStore } from "./redux/useGetReduxStore";
import { BallTriangle } from "react-loader-spinner";
function App() {
  const dispatch = useDispatch();
  const { contactsIsLoading, contactsError } = useGetReduxStore;
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBar />
        {contactsIsLoading && !contactsError && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <ContactList />
      </div>
    </>
  );
}

export default App;
