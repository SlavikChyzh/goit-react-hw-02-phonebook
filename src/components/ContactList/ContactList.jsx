import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem
        key={id}
        id={id}
        number={number}
        name={name}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);
