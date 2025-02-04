import { useSelector } from "react-redux";
import {
  selectVisibleContacts,
  // useGetReduxStore
} from "../../../redux/useGetReduxStore";
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

export default function ContactList() {
  // const { contacts, filters } = useGetReduxStore();
  // console.log(contacts, filters);

  // const filteredContacts = contacts.filter((e) =>
  //   e.name.toLowerCase().includes(filters.toLowerCase())
  // );
  const filteredContacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
