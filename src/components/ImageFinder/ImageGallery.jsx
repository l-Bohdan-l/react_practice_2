import ImageCard from "./ImageCard";

export default function ImageGallery({ imagesData }) {
  return (
    <ul>
      {imagesData.map(({ id, previewURL }) => (
        <li key={id}>
          <ImageCard previewURL={previewURL} />
        </li>
      ))}
    </ul>
  );
}
