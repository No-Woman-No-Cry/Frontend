import React, { Fragment, useEffect } from 'react';
import Register from '@/Components/screens/auth/Registration';
import { useRouter } from 'next/router';

const RegistrationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hasUser = window.localStorage.getItem('token');

    if (hasUser) {
      router.replace('/');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <Register />
    </Fragment>
  );
};

export default RegistrationPage;
