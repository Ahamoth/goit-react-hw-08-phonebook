import { getIsLoggedIn, getIsRefreshing, } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component : Component, redirectTo = '/contacts' }) => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  const IsRefreshingUser = useSelector(getIsRefreshing);
  return !isLoggedInUser && !IsRefreshingUser ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};