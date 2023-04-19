import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';

import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';

import {
  ContactListUl,
  ContactListItem,
  ContactItemDeleteBtn,
  ContactItemInfo,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteringContacts = contacts => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <ContactListUl>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading &&
        !error &&
        filteringContacts(contacts).map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <ContactItemInfo>
                <b>{contact.name}</b>:<br /> {contact.number}
              </ContactItemInfo>
              <ContactItemDeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </ContactItemDeleteBtn>
            </ContactListItem>
          );
        })}
    </ContactListUl>
  );
};

export default ContactList;
