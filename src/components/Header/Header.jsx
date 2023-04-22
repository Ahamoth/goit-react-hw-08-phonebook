import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Header.module.css';

export const Header = () => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedInUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
};