import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// export default function ContactList({ contacts, deleteContact }) {
//   return (
//     <ul className={css.wrapper}>
//       {contacts.map((contact) => (
//         <Contact
//           key={contact.id}
//           contact={contact}
//           deleteContact={deleteContact}
//         />
//       ))}
//     </ul>
//   );
// }

export default function ContactList({ contacts }) {
  return (
    <ul className={css.wrapper}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
