import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./App.css";
import ImageGallery from "./components/ImageFinder/ImageGallery";
import SearchBar from "./components/ImageFinder/SearchBar";
import ErrorMsg from "./components/ImageFinder/ErrorMsg";
import LoadMoreBtn from "./components/ImageFinder/LoadMoreBtn";
import fetchImages from "./services/fetchImages";

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (text) => {
    setSearchQuery(text);
  };

  const searchImages = () => {
    const images = fetchImages(searchQuery).then((results) =>
      console.log(results)
    );
    // console.log(images);
  };
  searchImages();

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery />
      {isLoading && (
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
      {errorMsg && <ErrorMsg />}
      {images.length !== 0 && <LoadMoreBtn />}
    </>
  );
}

export default App;
