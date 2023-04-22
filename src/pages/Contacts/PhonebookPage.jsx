import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsContactsEmpty, getError } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PhoneBookPage = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(getIsContactsEmpty);
  const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!Error) {
    toast.error('Something went wrong. Please try again!', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
    });
  }

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isContactsEmpty ? (
        <h2>Contactbook is empty, please add your first contact!</h2>
      ) : (
        <ContactList />
      )}

      <ToastContainer />
    </div>
  );
};