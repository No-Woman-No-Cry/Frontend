import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = window.localStorage.getItem('token');
    const userData = JSON.parse(window.localStorage.getItem('user'));

    if (!userToken && !userData) return;

    setUser(userData);
    setToken(userToken);
  }, []);

  let defaultProps;

  if (user.length !== 0) {
    defaultProps = {
      user,
      token,
    };
  } else {
    return
  }

  return (
    <UserContext.Provider value={defaultProps}>{children}</UserContext.Provider>
  );
};
