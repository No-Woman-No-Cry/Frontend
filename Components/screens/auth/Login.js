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
  
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
  
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
              Sign In
            </Text>
            <Text sx={{ fontWeight: 400 }}>
              Unlock job offers especially for you
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
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
              <Button
                colorScheme='blue'
                type='submit'
                sx={{ borderRadius: '50px' }}
              >
                Login
              </Button>
              <Button colorScheme='whatsapp' sx={{ borderRadius: '50px' }}>
                Google
              </Button>
            </Stack>
          </form>
        </Box>
      </Fragment>
    );
  };
  
  export default Login;
  