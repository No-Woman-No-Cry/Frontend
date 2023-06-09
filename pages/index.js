import React, { Fragment, useContext } from 'react';
import Dashboard from '@/Components/screens/home/Dashboard';
import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { UserContext } from '@/utils/UserContext';
import { useRouter } from 'next/router';
// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function Home() {
  const { user, employer, token } = useContext(UserContext);
  const router = useRouter();

  function handleClicked() {
    if (user && token) {
      router.push('/jobs');
    } else {
      router.push('/login');
    }
  }

  return (
    <Container maxW={'7xl'}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                Quality
              </Text>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  // height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'highlight',
                  zIndex: -1,
                }}
                px={3}
                color={'headline'}
              >
                Recruitment
              </Text>
              <br />{' '}
              <Text color={'headline'} as={'span'}>
                At Your Service
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. Its
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            {!user.name && (
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Please login first, to looking for your dream job!
              </Text>
            )}
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'highlight',
                }}
                onClick={() => handleClicked()}
              >
                {!user.name ? 'Login!' : 'Learn More'}
              </Button>
              <Button
                rounded={'full'}
                colorScheme={'gray'}
                onClick={() => router.push('/employer/login')}
              >
                Are you employer ?
              </Button>
              {/* <Button rounded={"full"}>How It Works</Button> */}
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    </Container>
  );
}
