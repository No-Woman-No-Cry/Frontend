import {
  colors,
  headingText,
  inputText,
  regularText,
  sectionText,
} from '@/Components/assets/style';
import { Registration as RegistrationAction } from '@/services/employer/authentication';
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
import { toast } from 'react-toastify';

const Registration = ({}) => {
  const [fullname, setFullname] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const route = useRouter();

  const handleShowPassword = (text) => {
    switch (text) {
      case 'password':
        setShowPassword(!showPassword);
        break;
      case 'confirmPassword':
        setShowConfirmPassword(!showConfirmPassword);
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.warning('password tidak sama dengan confirm password');
    }

    if (password.length < 8) {
      return toast.warning('password harus minimal 8 character');
    }

    await RegistrationAction({
      username: fullname,
      email: email,
      password: password,
      company_name: companyName,
    });

    toast.success('akun berhasil dibuat');
    route.replace('/employer/login');
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
          marginTop: '4rem',
        }}
      >
        <Box>
          <Text sx={{ ...headingText }}>
            2 Minute Sign Up to Land Your Dream Career
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
            <FormControl id='fullname'>
              <FormLabel sx={{ ...sectionText }}>Username</FormLabel>
              <Input
                isRequired
                variant={fullname ? 'outline' : 'filled'}
                type='text'
                placeholder='Username'
                value={fullname}
                onChange={(e) => setFullname(e.currentTarget.value)}
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
                      onClick={() => handleShowPassword('password')}
                    />
                  ) : (
                    <FaEye
                      color=''
                      onClick={() => handleShowPassword('password')}
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
                  variant={confirmPassword ? 'outline' : 'filled'}
                  type={showConfirmPassword ? 'password' : 'text'}
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  sx={{
                    ...inputText,
                    background: !confirmPassword && '#FBFAFA',
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
                      onClick={() => handleShowPassword('confirmPassword')}
                    />
                  ) : (
                    <FaEye
                      color=''
                      onClick={() => handleShowPassword('confirmPassword')}
                    />
                  )}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id='companyName'>
              <FormLabel sx={{ ...sectionText }}>Company Name</FormLabel>
              <Input
                isRequired
                variant={companyName ? 'outline' : 'filled'}
                type='text'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.currentTarget.value)}
                sx={{
                  ...inputText,
                  background: !companyName && '#FBFAFA',
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
            <Box paddingTop={3}>
              <Button
                colorScheme='blue'
                type='submit'
                variant='solid'
                sx={{ borderRadius: '25px', width: '100%' }}
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
            onClick={() => route.replace('/employer/login')}
            style={{
              color: 'blue',
              marginLeft: 4,
              textDecoration: 'underline',
              cursor: 'pointer',
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
