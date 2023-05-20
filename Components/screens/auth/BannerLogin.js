import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { EmployeeList,  } from '@/Components/elements/Element';
// import { colors } from '@/Components/assets/style';



const BannerLogin = () => {

  return (
    <Fragment>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        {Array(9).fill(null).map((_, index) => (
          <EmployeeList  key={index}/>
        ))}
      </Box>
    </Fragment>
  );
};

export default BannerLogin;
