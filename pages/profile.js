import React from 'react';
import ProfilePage from '@/Components/screens/profile';
import { Box } from '@chakra-ui/react';

const ProfilePages = () => {
  return (
    <Box
      sx={{
        scrollbarWidth: 'thin',
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <ProfilePage />
    </Box>
  );
};

export default ProfilePages;
