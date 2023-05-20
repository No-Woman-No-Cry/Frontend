import {
  colors,
  headingText,
  inputText,
  regularText,
  sectionText,
} from '@/Components/assets/style';
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
import { useRouter } from 'next/router';
import React, { useState, Fragment } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registration = ({}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const route = useRouter();

  const visibilityPassword = (e, text) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email, password);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px',
          marginY: 'auto',
          marginX: 'auto',
          paddingX: 10,
          paddingBottom: 4,
          marginTop: '4rem'
        }}
      >
        <Box>
          <Text sx={{ ...headingText }}>
            2 Minute Sign Up to Land Your Dream Career
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl id='fullname'>
              <FormLabel sx={{ ...sectionText }}>Full Name</FormLabel>
              <Input
                isRequired
                variant={fullname ? 'outline' : 'filled'}
                type='text'
                placeholder='Fullname'
                value={fullname}
                onChange={(e) => setEmail(e.currentTarget.value)}
                sx={{
                  ...inputText,
                  background: !fullname && '#FBFAFA',
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
            <FormControl id='confirm password'>
              <FormLabel sx={{ ...sectionText }}>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  isRequired
                  variant={password ? 'outline' : 'filled'}
                  type={showConfirmPassword ? 'password' : 'text'}
                  placeholder='Confirm Password'
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
                  {showConfirmPassword ? (
                    <FaEyeSlash
                      color=''
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  ) : (
                    <FaEye
                      color=''
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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
                sx={{ borderRadius: '25px', width:'100%' }}
              >
                <Text sx={{ ...sectionText, color: colors.primaryBg }}>
                  Register
                </Text>
              </Button>
            </Box>
          </Stack>
        </form>
        <Text sx={{ ...regularText, fontWeight: 500 }}>
          Have already account?
          <span
            onClick={() => route.replace('/login')}
            style={{
              color: 'blue',
              marginLeft: 4,
              textDecoration: 'underline',
            }}
          >
            Sign In
          </span>
        </Text>
      </Box>
    </Fragment>
  );
};

export default Registration;
