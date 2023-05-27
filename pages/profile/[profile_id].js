import React, { useEffect, useState } from 'react';
import ProfilePage from '@/Components/screens/profile';
import { Box } from '@chakra-ui/react';
import { UserContext } from '@/utils/UserContext';
import { GetEducation, GetProfile } from '@/services/jobSeeker/profile';
import { useRouter } from 'next/router';

const ProfilePages = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [userEducation, setUserEducation] = useState([]);
  const router = useRouter();
  const { profile_id } = router.query;

  const getUserInformation = async (id) => {
    const response = await GetProfile(id);

    if (response && response.data) {
      setUserInfo(response.data.data);
    }
  };

  const getUserEducation = async (id) => {
    const response = await GetEducation(id);

    if (response) {
      // console.log(response.data.data)
      setUserEducation(response.data.data);
    }
  };

  useEffect(() => {
    if (profile_id) {
      getUserInformation(profile_id);
      getUserEducation(profile_id);
    }
  }, [profile_id]);

  useEffect(() => {
    const getToken = window.localStorage.getItem('token');

    if (!getToken) {
      router.replace('/login');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box
      sx={{
        scrollbarWidth: 'thin',
        '& ::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <ProfilePage userInfo={userInfo} userEducation={userEducation} />
    </Box>
  );
};

export default ProfilePages;
