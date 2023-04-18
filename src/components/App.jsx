// import useLocalStorage from './hooks/useLocalStorage';

import { AppHeader, AppSubheader, AppBody } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const searchContact = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <AppBody>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm />
      <AppSubheader>Contacts</AppSubheader>
      <Filter />
      <ContactList filteredContacts={searchContact()} />
    </AppBody>
  );
};

export default App;
