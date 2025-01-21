import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../../redux/contactsSlice";
// export default function Contact({ contact, deleteContact }) {

//   return (
//     <li className={css.wrapper}>
//       <h3>{contact.name}</h3>
//       <p>{contact.number}</p>
//       <button onClick={() => deleteContact(contact.id)}>Delete</button>
//     </li>
//   );
// }

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.wrapper}>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </li>
  );
}
