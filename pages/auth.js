import React, { Fragment } from 'react';
import Login from '@/Components/screens/auth/Login';
import { Box } from '@chakra-ui/react';
import BannerLogin from '@/Components/screens/auth/BannerLogin';

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

  return (
    <Fragment>
      <Box
        sx={{
          maxWidth: '1280px',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          marginX: 'auto',
          paddingX: 8,
        }}
      >
        <Box sx={{ width: '40%', background: 'aqua', marginLeft: 0 }}>
          <BannerLogin />
        </Box>
        <Box sx={{ width: '60%', marginTop: '30%', marginBottom: 'auto' }}>
          <Login />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Auth;
