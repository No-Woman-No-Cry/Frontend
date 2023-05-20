import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { EmployeeList,  } from '@/Components/elements/Element';
// import { colors } from '@/Components/assets/style';



const BannerLogin = () => {
  const img = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

  return (
    <Fragment>
      <Box sx={{
        display: 'flex'
      }}>
        <EmployeeList imgs={img} />
      </Box>
    </Fragment>
  );
};

export default BannerLogin;
