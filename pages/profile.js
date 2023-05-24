import React, { useEffect } from 'react';
import ProfilePage from '@/Components/screens/profile';
import { Box } from '@chakra-ui/react';
import { GetProfile } from '@/services/jobSeeker/profile';

const ProfilePages = () => {
  const getProfile = async () => {
    const fetch = await GetProfile(1);
    if (fetch) {
      console.log(fetch);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
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
