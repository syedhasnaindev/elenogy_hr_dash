import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate('/pages/authentication/simple/sign-in'); // Redirect to login page
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <p>Loading authentication...</p>; // Can replace with a loader
  }

  return isAuthenticated ? children : null;
};

export default AuthGuard;
