import Modal from "react-modal";

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  Modal.setAppElement("#root");

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <img src={imageUrl} alt="large version" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
