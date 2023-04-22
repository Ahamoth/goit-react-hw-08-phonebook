import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.btnGrad, isActive && s.active);

export const AuthNav = () => {
  return (
    <nav className={s.navigation}>
      <NavLink to="/login" className={getNavLinkClassName}>
        Log in
      </NavLink>
      <NavLink to="/register" className={getNavLinkClassName}>
        Sign up
      </NavLink>
    </nav>
  );
};