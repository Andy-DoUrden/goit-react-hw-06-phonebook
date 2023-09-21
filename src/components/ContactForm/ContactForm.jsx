import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import {
  Form,
  InputBlock,
  InputName,
  NewContactValue,
  AddContact,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <InputName>Name:</InputName>
        <NewContactValue
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
      </InputBlock>

      <InputBlock>
        <InputName>Number:</InputName>
        <NewContactValue
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
      </InputBlock>

      <AddContact>Add contact</AddContact>
    </Form>
  );
}
