import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectRoute = ({ children }) => {
  const location = useLocation();
  const authToken = Cookies.get('auth_token')
  const publicPages = ['/login', '/signup']
  if (authToken && publicPages.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }
  if (!authToken && !publicPages.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectRoute;
