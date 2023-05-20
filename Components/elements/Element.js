import { Box, Text  } from '@chakra-ui/react';
import tiktokImg from '/public/Images/tiktok.png';
import Image from 'next/image';

export const PrimaryButton = ({ label }) => {
  return (
    <Box>
      <Text>{label}</Text>
    </Box>
  );
};

export const EmployeeList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}
    >
      <Image
        objectFit='cover'
        src={tiktokImg}
        alt=''
        width={60}
        // height={'auto'}
      />
    </Box>
  );
};
