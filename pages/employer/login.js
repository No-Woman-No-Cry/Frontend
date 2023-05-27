import React, { Fragment, useContext, useEffect } from 'react';
import Login from '@/Components/screens/employer/auth/Login';
import { useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/utils/UserContext';

const LoginPage = () => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();
  const { employer } = useContext(UserContext);
  console.log('>>>>>>>>>>>>>>>>>>>>>', employer);

  useEffect(() => {
    const hasUser = window.localStorage.getItem('token');

    if (hasUser) {
      router.replace('/employer/my-job/' + employer.company_id);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <Login isLowerThanLg={isLowerThanLg} />
    </Fragment>
  );
};

export default LoginPage;
