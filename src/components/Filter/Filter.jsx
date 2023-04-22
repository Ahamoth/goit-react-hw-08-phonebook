import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsReducer';
import { getContactsFilter } from 'redux/contacts/contactsSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getContactsFilter);

  return (
    <label htmlFor="filter" className={s.filterLabel}>
      {' '}
      Find contacts by name
      <input
        className={s.filterInput}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
};