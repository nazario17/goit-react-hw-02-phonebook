import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForms extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  uniqueId1 = nanoid();

  render() {
    return (
      <form className="forms" onSubmit={this.handleSubmitForm}>
        <label htmlFor={this.uniqueId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.uniqueId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.uniqueId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.uniqueId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

