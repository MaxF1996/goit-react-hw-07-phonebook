// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter, getError, getIsLoading } from '../redux/selectors';
// import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { AppHeader, AppSubheader, AppBody } from './App.styled';

const App = () => {
  return (
    <AppBody>
      <AppHeader>Phonebook</AppHeader>
      <ContactForm />
      <AppSubheader>Contacts</AppSubheader>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </AppBody>
  );
};

export default App;
