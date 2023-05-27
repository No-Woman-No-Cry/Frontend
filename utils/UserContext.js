import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [employer, setEmployer] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = window.localStorage.getItem('token');
    const userData = JSON.parse(window.localStorage.getItem('user'));
    const employerData = JSON.parse(window.localStorage.getItem('employer'));

    if (!userToken) return;

    setUser(userData);
    setEmployer(employerData);
    setToken(userToken);
  }, []);

  let defaultProps;

  defaultProps = {
    employer,
    user,
    token,
  };

  return (
    <UserContext.Provider value={defaultProps}>{children}</UserContext.Provider>
  );
};
