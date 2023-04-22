import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { getUsername } from 'redux/auth/authSelectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  return (
    <div className={s.wrapper}>
      <span>Welcome, {name}!</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logOutUser())}
      >
        Log out
      </button>
    </div>
  );
};