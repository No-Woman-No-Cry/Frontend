import React, { useEffect } from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Avatar from './components/AvatarCompany';
import TabSection from './components/TabSectionCompany';
import { useRouter } from 'next/router';

const ProfileCompany = () => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();
  const { company_id } = router.query;

  if (!company_id) {
    return;
  }
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
        <Avatar isLowerThanLg={isLowerThanLg} company_id={company_id} />
        <TabSection isLowerThanLg={isLowerThanLg} companyId={company_id} />
      </Box>
    </Box>
  );
};

export default ProfileCompany;
