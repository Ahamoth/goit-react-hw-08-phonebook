import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.link, isActive && s.active);

export const Navigation = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={getNavLinkClassName}>
        Home
      </NavLink>
      {isLoggedInUser && (
        <NavLink to="/contacts" className={getNavLinkClassName}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};