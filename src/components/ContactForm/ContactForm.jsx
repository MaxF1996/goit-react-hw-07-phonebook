import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

import {
  ContactFormLabel,
  ContactFormBody,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [localState, setLocalState] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalState(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, number } = localState;

  const checkDoublicate = contacts.some(contact => {
    return (
      contact.name.toLowerCase() === localState.name.toLowerCase() ||
      contact.number === localState.number
    );
  });

  const handleSubmit = e => {
    e.preventDefault();
    checkDoublicate
      ? alert(`${localState.name} is already in contacts`)
      : dispatch(addContact(localState));
    setLocalState(() => ({ name: '', number: '' }));
  };

  return (
    <ContactFormBody onSubmit={handleSubmit}>
      <ContactFormLabel htmlFor="contactName">Name</ContactFormLabel>
      <ContactFormInput
        type="text"
        name="name"
        value={name}
        id="contactName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
      <ContactFormLabel htmlFor="contactNumber">Number</ContactFormLabel>
      <ContactFormInput
        type="tel"
        id="contactNumber"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleChange}
        required
      />
      <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
    </ContactFormBody>
  );
};

export default ContactForm;
