import "./App.css";
import userData from "./testData/userData.json";
import Profile from "./components/Profile/Profile";

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
    </>
  );
}

export default App;
