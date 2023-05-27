import { colors, sectionText, smallText } from '@/Components/assets/style';
import { GetProfile } from '@/services/jobSeeker/profile';
import { UserContext } from '@/utils/UserContext';
import { Box, WrapItem, Avatar, Text, Flex } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

const AvatarPicture = ({ userInfo }) => {
  const dummyImg = 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png?w=740&t=st=1685031964~exp=1685032564~hmac=1c3c79ee96d3d48e05b9db3e71d1f1607b462142796a9adc038386e29001d389'
  
  return (
    <Box
      sx={{
        border: `1px solid ${colors.stroke}`,
        borderRadius: '8px',
        marginTop: 8,
        marginBottom: 10,
        padding: 4,
      }}
    >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            borderRadius: '8px',
            background: colors.secondaryBg,
            gap: 2,
          }}
        >
          <WrapItem>
            <Avatar size='lg' name={userInfo.name} src={dummyImg} />
          </WrapItem>
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Text sx={{ ...sectionText }}>{userInfo.name}</Text>
            <FaUserEdit fill={colors.tertiary} size='10px' />
          </Flex>
          <Text sx={{ ...smallText }}>{userInfo?.job_seeker_headline || 'null'}</Text>
        </Box>
    </Box>
  );
};

export default AvatarPicture;
