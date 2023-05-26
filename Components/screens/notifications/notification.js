import {
  Text,
  Box,
  Center,
  Flex,
  Spacer,
  Container,
  Icon,
} from '@chakra-ui/react';

import { ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
export default function Notification({ props }) {
  const [data, setData] = useState(props);
  // console.log(data[0].message);
  // console.log(data.message);
  return (
    <Container maxW='3xl' mt='10'>
      <Flex mb='10'>
        <Box fontWeight='bold' fontSize='lg'>
          Notifications
        </Box>

        <Spacer />
        <Box fontSize='12px'>
          Only Show Unread <Icon as={ViewOffIcon} w='20px' h='20px' />
        </Box>
      </Flex>
      <Text fontWeight='bold' fontSize='sm' mb='2'>
        Older
      </Text>
      {data.map((datas) => (
        <>
          <Center w='740px' h='1px' bg='black' />
          <Flex my='3'>
            <Box ml='6'>
              <Text fontWeight='bold'>{datas.message}</Text>
            </Box>
            <Spacer />
          </Flex>
          <Center w='740px' h='1px' mt='6' bg='black' />
        </>
      ))}
    </Container>
  );
}
