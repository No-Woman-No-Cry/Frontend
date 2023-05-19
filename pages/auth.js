import React, { Fragment, useState } from 'react';
import Login from '@/Components/screens/auth/Login';
import { Box } from '@chakra-ui/react';
import BannerLogin from '@/Components/screens/auth/BannerLogin';
import Registration from '@/Components/screens/auth/Registration';

const Auth = () => {
  //   useEffect(() => {
  //     saveLocal();
  //   });

  //   const saveLocal = () => {
  //     window.localStorage.setItem(
  //       'user',
  //       JSON.stringify({
  //         user: {
  //           data: 'admin',
  //         },
  //       })
  //     );
  //   };

  const [activeComponent, setActiveComponent] = useState('login');

  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingX: 8,
        }}
      >
        <Box
          sx={{
            maxWidth: '230px',
            maxHeight: '80px',
          }}
        >
          <BannerLogin />
        </Box>
        <Box
          sx={{
            width: '100%',
            marginX: 'auto',
            paddingLeft: { xl: 80, lg: '250px', md: 40 },
          }}
        >
          {activeComponent === 'login' ? (
            <Login setActiveComponent={setActiveComponent} />
          ) : (
            <Registration setActiveComponent={setActiveComponent} />
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Auth;
