import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ imagesData, openModal }) {
  // const handleClick = () => {
  //   openModal();
  // };
  return (
    <ul className={css.wrapper}>
      {imagesData.map(({ id, previewURL, tags, largeImageURL }) => (
        <li key={id} onClick={() => openModal(largeImageURL)}>
          <ImageCard previewURL={previewURL} tags={tags} />
        </li>
      ))}
    </ul>
  );
}
