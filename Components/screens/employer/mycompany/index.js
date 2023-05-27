import React, { useEffect } from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Avatar from './components/AvatarCompany';
import TabSection from './components/TabSectionCompany';

const ProfileCompany = () => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box width='100%' paddingX='10' paddingBottom={10}>
        <Avatar isLowerThanLg={isLowerThanLg} />
        <TabSection isLowerThanLg={isLowerThanLg} />
      </Box>
    </Box>
  );
};

export default ProfileCompany;
