import Modal from "react-modal";

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={imageUrl} alt="large version" />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
