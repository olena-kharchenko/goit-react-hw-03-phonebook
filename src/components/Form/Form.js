import { Component } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import PropTypes from 'prop-types';
import s from './Form.module.css';

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, 'Please enter between 3 and 15 characters')
//     .max(15, 'Please enter between 3 and 15 characters')
//     .required('Required'),
//   number: Yup.number()
//     .positive()
//     .min(3, 'Please enter 10 digits')
//     .max(10, 'Please enter 10 digits')
//     .required('Required'),
// });

class MyForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  contactMatching = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all data');
      return true;
    }
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    this.setState({ name: '', number: '' });
    if (this.contactMatching()) {
      return;
    }

    this.props.onSubmit(name, number);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Rosie Simpson"
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <label>
          Number
          <PhoneInput
            country={'ua'}
            value={number}
            placeholder="+380 (66) 123-4567"
            onChange={number => this.setState({ number })}
          />
        </label>
        {/* <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="459-12-56"
            onChange={this.handleChange}
            className={s.input}
          />
        </label> */}
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default MyForm;
