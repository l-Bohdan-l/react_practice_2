import { useEffect, useState } from "react";
import "./App.css";
import userData from "./testData/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./testData/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./testData/transactions.json";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import SearchBar from "./components/Contacts/SearchBar/SearchBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
function App() {
  const [reviewsObj, setReviewsObj] = useState(getLocalStorageReviews());
  const [contacts, setContacts] = useState(getLocalStoragecontacts());
  const [filter, setFilter] = useState("");

  function getLocalStorageReviews() {
    const defaultReviews = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    const prevReviews = localStorage.getItem("feedbacks");
    if (prevReviews) {
      return JSON.parse(prevReviews);
    }
    return defaultReviews;
  }

  function getLocalStoragecontacts() {
    const defaultValues = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
    const prevContacts = localStorage.getItem("contacts");
    if (prevContacts) {
      return JSON.parse(prevContacts);
    }
    return defaultValues;
  }

  const isReviewsEmpty = Object.values(reviewsObj).every((e) => e === 0);

  const updateFeedback = (feedbackType) => {
    setReviewsObj((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviewsObj({ good: 0, neutral: 0, bad: 0 });
  };

  const filteredContacts = contacts.filter((e) =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(reviewsObj));
  }, [reviewsObj]);

  const addContact = (contact) => {
    setContacts((prevState) => [...prevState, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <div className="wrapper">
        <Description />
        <Options
          updateFeedback={updateFeedback}
          isReviewsEmpty={isReviewsEmpty}
          resetFeedback={resetFeedback}
        />
        {isReviewsEmpty && <p>No feedback yet</p>}
        {!isReviewsEmpty && <Feedback reviewsObj={reviewsObj} />}
      </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBar filterValue={filter} changeFilter={setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
