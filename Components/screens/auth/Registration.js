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
import { PrimaryButton } from '../../elements/Element';

const Registration = ({ setActiveComponent }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const visibilityPassword = (e, text) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
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
        }}
      >
        <Box>
          <Text fontSize='xl' sx={{ fontWeight: 700 }}>
            2 Minute Sign Up to Land Your Dream Career
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl id='fullname'>
              <FormLabel>Full Name</FormLabel>
              <Input
                isRequired
                variant={fullname ? 'outline' : 'filled'}
                type='text'
                placeholder='Fullname'
                value={fullname}
                onChange={(e) => setEmail(e.currentTarget.value)}
                sx={{
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
              <FormLabel>Email</FormLabel>
              <Input
                isRequired
                variant={email ? 'outline' : 'filled'}
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                sx={{
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
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  isRequired
                  variant={password ? 'outline' : 'filled'}
                  type={showPassword ? 'password' : 'text'}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  sx={{
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
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  isRequired
                  variant={password ? 'outline' : 'filled'}
                  type={showConfirmPassword ? 'password' : 'text'}
                  placeholder='Confirm Password'
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  sx={{
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
            <Button
              colorScheme='blue'
              type='submit'
              variant='solid'
              sx={{ borderRadius: '50px' }}
            >
              Register
            </Button>
            <Button
              colorScheme='whatsapp'
              variant='outline'
              sx={{ borderRadius: '50px' }}
            >
              <Text>Google</Text>
            </Button>
          </Stack>
        </form>
        <Text>
          Have already account?
          <span
            onClick={() => setActiveComponent('login')}
            style={{ color: 'blue', marginLeft: 4 }}
          >
            Sign In
          </span>
        </Text>
      </Box>
    </Fragment>
  );
};

export default Registration;
