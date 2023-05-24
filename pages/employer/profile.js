import React from 'react';
import { Box } from '@chakra-ui/react';
import ProfileCompany from '@/Components/screens/employer/mycompany';
const profilecompany = () => {
  return (
    <Box
      sx={{
        scrollbarWidth: 'thin',
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <ProfileCompany />
    </Box>
  );
};

export default profilecompany;
