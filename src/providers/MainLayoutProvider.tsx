import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState
  // useEffect
} from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';

interface MainLayoutContextInterface {
  contentClass: string;
  setContentClass: Dispatch<SetStateAction<string>>;
  footerClass: string;
  setFooterClass: Dispatch<SetStateAction<string>>;
}

export const MainLayoutContext = createContext(
  {} as MainLayoutContextInterface
);

const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  const [contentClass, setContentClass] = useState('');
  const [footerClass, setFooterClass] = useState('');
  // const { isAuthenticated, isLoading } = useAuth0();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoading && isAuthenticated) {
  //     navigate('/'); // Redirect if already logged in
  //   } else {
  //     navigate('/pages/authentication/simple/sign-in');
  //   }
  // }, [isAuthenticated, isLoading, navigate]);

  // if (isLoading) return <p>Loading authentication...</p>; // Prevent flicker
  return (
    <MainLayoutContext.Provider
      value={{ contentClass, setContentClass, footerClass, setFooterClass }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};

export const useMainLayoutContext = () => useContext(MainLayoutContext);

export default MainLayoutProvider;
