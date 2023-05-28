import { colors, sectionText, smallText } from '@/Components/assets/style';
import { GetBasicInfo } from '@/services/employer/mycompany';
import { Box, WrapItem, Avatar, Text, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';

const AvatarPicture = ({ company_id }) => {
  const [user, setUser] = useState({});

  const getProfile = async (id) => {
    const res = await GetBasicInfo(+id);

    if (res && res.data) {
      setUser(res.data.data);
    }
  };

  useEffect(() => {
    if (company_id) {
      getProfile(company_id);
    }
  }, [company_id]);

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
          <Avatar
            size='lg'
            name='Christian Nwamba'
            src={user.company_icon}
          />
        </WrapItem>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Text sx={{ ...sectionText }}>{user.company_name}</Text>
          <FaUserEdit fill={colors.tertiary} size='10px' />
        </Flex>
        <Text sx={{ ...smallText }}>{user.website_url}</Text>
      </Box>
    </Box>
  );
};

export default AvatarPicture;
