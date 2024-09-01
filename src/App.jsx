import "./App.css";
import userData from "./testData/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./testData/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./testData/transactions.json";
import Description from "./components/Description/Description";
function App() {
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
      <Description />
    </>
  );
}

export default App;
