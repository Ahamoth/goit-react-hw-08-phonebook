import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  component,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return isLoggedInUser && restricted ? (
    <Navigate to={redirectTo} />
  ) : (
    component
  );
};