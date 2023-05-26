import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Avatar from './components/Avatar';
import TabSection from './components/TabSection';
import { UserContext } from '@/utils/UserContext';
import { GetEducation, GetProfile } from '@/services/jobSeeker/profile';

const ProfilePage = ({ userInfo, userEducation }) => {
  const [isLowerThanLg] = useMediaQuery('(min-width: 1024px)');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

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
        {!loading && (
          <>
            <Avatar isLowerThanLg={isLowerThanLg} userInfo={userInfo} />
            <TabSection
              isLowerThanLg={isLowerThanLg}
              userInfo={userInfo}
              userEducation={userEducation}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
