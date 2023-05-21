import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  color,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useState, Fragment } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BannerLogin from './BannerLogin';
import { useRouter } from 'next/router';
import {
  colors,
  headingText,
  inputText,
  regularText,
  sectionText,
} from '@/Components/assets/style';

const Login = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingX: 8,
          paddingBottom: 4,
          gap: 8,
          marginTop: '4rem'
        }}
      >
        <BannerLogin />
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            rowGap: '16px',
            marginY: 'auto',
            marginX: 'auto',
          }}
        >
          <Box>
            <Text sx={{ ...headingText }}>Sign In</Text>
            <Text sx={{ ...sectionText, fontWeight: 500 }}>
              Unlock job offers especially for you
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl id='email'>
                <FormLabel sx={{ ...sectionText }}>Email</FormLabel>
                <Input
                  isRequired
                  variant={email ? 'outline' : 'filled'}
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  sx={{
                    ...inputText,
                    background: !email && '#FBFAFA',
                    '&: hover': {
                      background: '#FBFAFA',
                      outline: '0.5px solid #3182CE',
                      outlineOffset: 0,
                    },
                    '&: focus': {
                      outlineOffset: 0,
                      outlineWidth: 0,
                    },
                  }}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel sx={{ ...sectionText }}>Password</FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    variant={password ? 'outline' : 'filled'}
                    type={showPassword ? 'password' : 'text'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    sx={{
                      ...inputText,
                      background: !password && '#FBFAFA',
                      '&: hover': {
                        background: color.red,
                        outline: '0.5px solid #3182CE',
                        outlineOffset: 0,
                      },
                      '&: focus': {
                        outlineOffset: 0,
                        outlineWidth: 0,
                      },
                    }}
                  />
                  <InputRightElement>
                    {showPassword ? (
                      <FaEyeSlash
                        color=''
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye
                        color=''
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box paddingTop={3}>
                <Button
                  colorScheme='blue'
                  type='submit'
                  variant='solid'
                  sx={{ borderRadius: '50px', width: '100%' }}
                >
                  <Text sx={{ ...sectionText, color: colors.primaryBg }}>
                    Login
                  </Text>
                </Button>
              </Box>
            </Stack>
          </form>

          <Text sx={{ ...regularText, fontWeight: 500 }}>
            New to Jobs?
            <span
              onClick={() => route.replace('/register')}
              style={{
                color: 'blue',
                marginLeft: 4,
                textDecoration: 'underline',
              }}
            >
              Sign Up
            </span>
          </Text>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Login;
