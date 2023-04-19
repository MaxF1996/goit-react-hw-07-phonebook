import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';

import { getContacts, getFilter } from 'redux/selectors';

import { ContactListUl, ContactListItem, ContactItemDeleteBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteringContacts = contacts => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <ContactListUl>
      {filteringContacts(contacts).map(contact => {
        return (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <ContactItemDeleteBtn type="button" onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </ContactItemDeleteBtn>
          </ContactListItem>
        );
      })}
    </ContactListUl>
  );
};

export default ContactList;
