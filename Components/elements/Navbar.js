import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaRegBell } from 'react-icons/fa';
import Link from 'next/link';
import { colors } from '../assets/style';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
// const Links = ["Dashboard", "Projects", "Team"];
import { UserContext } from '@/utils/UserContext';

const Links = [
  {
    name: 'Jobs',
    path: '/job',
  },
  {
    name: 'Companies',
    path: '/companies',
  },
  {
    name: 'History',
    path: '/history',
  },
];

const NavLink = ({ children, path }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [token, setToken] = useState('');
  const router = useRouter();

  const {user} = useContext(UserContext);

  useEffect(() => {
    const isToken = window.localStorage.getItem('token');

    if (isToken) {
      setToken(isToken);
    }
  }, [token]);


  return (
    <Box bg='##fffffe'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          opacity={!token && 0}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link href='/'>
            <Text fontSize={'1.5rem'}>
              Job
              <Text as={'span'} fontWeight={'bold'} color={'highlight'}>
                2GO{' '}
              </Text>
            </Text>
          </Link>

          {token && (
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          )}
        </HStack>
        {token && (
          <Flex alignItems={'center'} justifyContent={'space-between'} gap={4}>
            <Link href='/notification' size={'md'}>
              <FaRegBell fill={colors.highlight} size={24} />
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                onClick={() => router.push(`/profile/${user.profile_id}`)}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        )}
      </Flex>

      {isOpen
        ? token && (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map(({ name, path }) => (
                  <NavLink key={path} path={path}>
                    {name}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          )
        : null}
    </Box>
  );
}
