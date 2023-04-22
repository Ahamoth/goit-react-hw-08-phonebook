import s from './ContactListItem.module.css';
import { FcPhone } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} id={id} className={s.listItem}>
      <div className={s.container}>
        <FcPhone />
        <p>{name + ': ' + number}</p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};