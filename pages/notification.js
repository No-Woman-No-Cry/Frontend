import {
  Text,
  Box,
  Center,
  Flex,
  Spacer,
  Container,
  Icon,
} from "@chakra-ui/react";

import { ViewOffIcon } from "@chakra-ui/icons";
export default function Notification() {
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
      <Center w='740px' h='1px' mt='6' bg='black' />
      <Flex fontSize='12px' my='3'>
        <Box ml='6'>
          <Text fontWeight='bold'>
            Wanna work at jobs with your dream salary? 💰✨
          </Text>
          <Text>
            Share your desired salary and we`ll match you with jobs in the pay
            range you’re looking for!
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>18 May</Text>
        </Box>
      </Flex>
      <Center w='740px' h='1px' mt='6' bg='black' />
      <Flex fontSize='12px' my='3'>
        <Box ml='6'>
          <Text fontWeight='bold'>
            Wanna work at jobs with your dream salary? 💰✨
          </Text>
          <Text>
            Share your desired salary and we`ll match you with jobs in the pay
            range you’re looking for!
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>18 May</Text>
        </Box>
      </Flex>
      <Center w='740px' h='1px' mt='6' bg='black' />
      <Flex fontSize='12px' my='3'>
        <Box ml='6'>
          <Text fontWeight='bold'>
            Wanna work at jobs with your dream salary? 💰✨
          </Text>
          <Text>
            Share your desired salary and we`ll match you with jobs in the pay
            range you’re looking for!
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text>18 May</Text>
        </Box>
      </Flex>
      <Center w='740px' h='1px' mt='6' bg='black' />
    </Container>
  );
}
