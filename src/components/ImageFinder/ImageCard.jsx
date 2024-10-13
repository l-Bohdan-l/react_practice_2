export default function ImageCard({ previewURL, tags }) {
  return (
    <div>
      <img src={previewURL} alt={tags} />
    </div>
  );
}
