import ImageCard from "./ImageCard";

export default function ImageGallery({ imagesData, openModal }) {
  // const handleClick = () => {
  //   openModal();
  // };
  return (
    <ul>
      {imagesData.map(({ id, previewURL, tags, largeImageURL }) => (
        <li key={id} onClick={() => openModal(largeImageURL)}>
          <ImageCard previewURL={previewURL} tags={tags} />
        </li>
      ))}
    </ul>
  );
}
