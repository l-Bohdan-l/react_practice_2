// import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/ImageFinder/SearchBar";

function App() {
  const handleSubmit = (text) => {
    console.log(text);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

export default App;
