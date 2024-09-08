import css from "./Contact.module.css";
export default function Contact({ contact, deleteContact }) {
  return (
    <li className={css.wrapper}>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
}
