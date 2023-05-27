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
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaRegBell } from 'react-icons/fa';
import Link from 'next/link';
import { colors } from '../assets/style';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
// const Links = ["Dashboard", "Projects", "Team"];
import { UserContext } from '@/utils/UserContext';
import { toast } from 'react-toastify';

const Links = [
  {
    name: 'Jobs',
    path: '/jobs',
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

  const { user } = useContext(UserContext);

  useEffect(() => {
    const isToken = window.localStorage.getItem('token');

    if (isToken) {
      setToken(isToken);
    }
  }, [token]);

  const goToProfile = () => {
    router.push(`/profile/${user.profile_id}`);
  };

  const logoutAction = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('employer');

    router.refresh();
    router.push('/login')
    toast.success("You've been logout, thanks!");
  };

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
            <Link href={`/notification/${user.profile_id}`} size={'md'}>
              <FaRegBell fill={colors.highlight} size={24} />
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn-icons-png.flaticon.com/512/1250/1250689.png?w=740&t=st=1685031964~exp=1685032564~hmac=1c3c79ee96d3d48e05b9db3e71d1f1607b462142796a9adc038386e29001d389'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => goToProfile()}>
                  Profile Detail
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => logoutAction()}>Logout</MenuItem>
              </MenuList>
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
