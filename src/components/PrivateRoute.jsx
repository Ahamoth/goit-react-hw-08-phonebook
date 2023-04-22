import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return isLoggedInUser ? component : <Navigate to={redirectTo} />;
};