import Contacts from "../Contact/Contact";
export default function ContactList({ phones, onDelete }) {
  return (
    <ul>
      {phones.map((phone, index) => (
        <li key={`${phone.id}-${index}`}>
          <Contacts data={phone} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}