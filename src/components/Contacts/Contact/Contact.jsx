export default function Contact({ contact }) {
  return (
    <li>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
    </li>
  );
}
