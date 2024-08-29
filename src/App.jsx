import "./App.css";
import userData from "./testData/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import friends from "./testData/friends.json";
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
    </>
  );
}

export default App;
