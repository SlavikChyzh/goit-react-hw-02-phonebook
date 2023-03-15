export const ContactItem = ({ id, number, name, deleteContact }) => (
  <li>
    <p>name: {name}</p>
    <p>number: {number}</p>
    <button onClick={() => deleteContact(id)}>delete</button>
  </li>
);
