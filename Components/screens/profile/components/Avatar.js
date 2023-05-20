import {
  colors,
  sectionText,
  smallText,
} from '@/Components/assets/style';
import { Box, WrapItem, Avatar, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaUserEdit } from 'react-icons/fa';

const AvatarPicture = () => {
  return (
    <Box
      sx={{
        border: `1px solid ${colors.stroke}`,
        borderRadius: '8px',
        marginTop: 8,
        marginBottom: 10,
        padding: 4
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
          gap: 2
        }}
      >
        <WrapItem>
          <Avatar
            size='lg'
            name='Christian Nwamba'
            src='https://bit.ly/code-beast'
          />
        </WrapItem>
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Text sx={{ ...sectionText }}>Erik Mikael</Text>
          <FaUserEdit fill={colors.tertiary} size='10px' />
        </Flex>
        <Text sx={{ ...smallText }}>Android Developer at Warung Kelontong</Text>
      </Box>
    </Box>
  );
};

export default AvatarPicture;
