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
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  console.log(setContacts);

  function getLocalStorageReviews() {
    const defaultReviews = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    const prevReviews = localStorage.getItem("feedbacks");
    console.log("prev", prevReviews);
    if (prevReviews) {
      return JSON.parse(prevReviews);
    }
    return defaultReviews;
  }

  const isReviewsEmpty = Object.values(reviewsObj).every((e) => e === 0);
  console.log("reviewsObj", reviewsObj);
  const updateFeedback = (feedbackType) => {
    setReviewsObj((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviewsObj({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(reviewsObj));
  }, [reviewsObj]);

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
        <ContactForm />
        <SearchBar />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
