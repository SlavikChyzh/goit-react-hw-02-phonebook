import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = cont => {
    const newContact = {
      ...cont,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <>
        <h3>PhoneBook</h3>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        ></ContactForm>
        <Filter></Filter>
        <h3>Contacts</h3>
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </>
    );
  }
}
