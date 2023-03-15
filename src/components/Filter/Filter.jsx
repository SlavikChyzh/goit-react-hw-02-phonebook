import { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };
  changeHandler = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  render() {
    const { filter } = this.state;
    return (
      <input
        type="text"
        name="name"
        value={filter}
        onChange={this.changeHandler}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    );
  }
}

export default Filter;
