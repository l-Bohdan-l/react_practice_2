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
function App() {
  const [reviewsObj, setReviewsObj] = useState(getLocalStorageReviews());

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
    </>
  );
}

export default App;
