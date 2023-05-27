import React, { Fragment, useEffect } from 'react';
import Login from '@/Components/screens/auth/Login';
import { useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();

  useEffect(() => {
    const hasUser = window.localStorage.getItem('token');

    if (hasUser && hasUser.length !== 0) {
      router.replace('/');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <Login isLowerThanLg={isLowerThanLg} />
    </Fragment>
  );
};

export default LoginPage;
