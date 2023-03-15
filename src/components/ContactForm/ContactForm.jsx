import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  submitHandler = e => {
    e.preventDefault();
    const { addContact, contacts } = this.props;
    const arrOfName = contacts.map(({ name }) => name);
    {
      arrOfName.includes(this.state.name)
        ? console.log('444')
        : addContact({ ...this.state });
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.changeHandler}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
