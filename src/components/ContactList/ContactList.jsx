import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  getIsLoading,
  getFilteredContacts,
} from 'redux/contacts/contactsSelectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  return isLoading ? (
    <h2>...Loading</h2>
  ) : (
    <ul className={s.contactListWrapper}>
      {filteredContacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ul>
  );
};