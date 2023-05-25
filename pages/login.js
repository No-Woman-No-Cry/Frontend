import React, { Fragment } from 'react';
import Login from '@/Components/screens/auth/Login';
import { useMediaQuery } from '@chakra-ui/react';

const LoginPage = () => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');

  return (
    <Fragment>
      <Login isLowerThanLg={isLowerThanLg} />
    </Fragment>
  );
};

export default LoginPage;
