import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  ContactFormLabel,
  ContactFormBody,
  ContactFormInput,
  ContactFormBtn,
  ContactField,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [localState, setLocalState] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalState(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, number } = localState;

  const contacts = useSelector(selectContacts);

  const checkDoublicate = contacts.some(contact => {
    return (
      contact.name.toLowerCase() === localState.name.toLowerCase() ||
      contact.number === localState.number
    );
  });

  const handleSubmit = e => {
    e.preventDefault();

    checkDoublicate
      ? Notify.failure('This contact already exists')
      : dispatch(addContact(localState));

    setLocalState(() => ({ name: '', number: '' }));
    e.target.reset();
  };

  return (
    <ContactFormBody onSubmit={handleSubmit}>
      <ContactField>
        <ContactFormLabel htmlFor="contactName">Name:</ContactFormLabel>
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
      </ContactField>
      <ContactField>
        <ContactFormLabel htmlFor="contactNumber">Number:</ContactFormLabel>
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
      </ContactField>
      <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
    </ContactFormBody>
  );
};

export default ContactForm;
