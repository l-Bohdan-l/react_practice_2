import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./App.css";
import ImageGallery from "./components/ImageFinder/ImageGallery";
import SearchBar from "./components/ImageFinder/SearchBar";
import ErrorMsg from "./components/ImageFinder/ErrorMsg";
import LoadMoreBtn from "./components/ImageFinder/LoadMoreBtn";
import fetchImages from "./services/fetchImages";
import ImageModal from "./components/ImageFinder/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [largeUrl, setLargeUrl] = useState(null);

  function openModal(largeUrl) {
    setIsOpen(true);
    setLargeUrl(largeUrl);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const searchImages = async (searchQuery, page) => {
    try {
      setIsLoading(true);
      const fetchedImages = await fetchImages(searchQuery, page);
      const imageData = [];
      fetchedImages.data.hits.forEach((e) => {
        const isImgExist = images.some((el) => el.id === e.id);
        if (!isImgExist) imageData.push(e);
      });
      page !== 1
        ? setImages((prevState) => [...prevState, ...imageData])
        : setImages(fetchedImages.data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
      setErrorMsg(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (text) => {
    setSearchQuery(text);
    setPage(1);
    // searchImages(text, page);
  };

  const handleClickLoadMore = () => {
    setPage((prevState) => prevState + 1);
    // searchImages(searchQuery, page);
  };

  useEffect(() => {
    if (searchQuery !== "") searchImages(searchQuery, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery imagesData={images} openModal={openModal} />
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
      {errorMsg && <ErrorMsg errorMessage={errorMsg} />}
      {images.length !== 0 && (
        <LoadMoreBtn handleClickLoadMore={handleClickLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={largeUrl}
      />
    </>
  );
}

export default App;
