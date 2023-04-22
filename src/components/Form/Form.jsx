import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, { resetForm }) => {
          if (
            contacts.find(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase()
            )
          ) {
            toast.info(`${values.name} is already in your contacts.`, {
              position: toast.POSITION.TOP_CENTER,
              theme: 'colored',
            });
            resetForm();
            return '';
          }
          const item = {
            ...values,
            id: nanoid(),
          };
          dispatch(addContact(item));
          resetForm();
        }}
      >
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};