import css from "./ImageCard.module.css";

export default function ImageCard({ previewURL, tags }) {
  return (
    <div>
      <img className={css.image} src={previewURL} alt={tags} />
    </div>
  );
}
