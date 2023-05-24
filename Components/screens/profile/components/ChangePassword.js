import {
  colors,
  headingText,
  inputText,
  regularText,
  sectionText,
} from '@/Components/assets/style';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let password = '123';

  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        Change Password
      </Text>

      <form>
        <VStack spacing={3} marginTop={5}>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Current Password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                variant={password ? 'outline' : 'filled'}
                // type={showConfirmPassword ? 'password' : 'text'}
                placeholder='Confirm Password'
                value={password}
                // onChange={(e) => setPassword(e.currentTarget.value)}
                sx={{
                  ...inputText,
                  borderColor: colors.grey[300],
                  // background: !password && '#FBFAFA',
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
              <InputRightElement>
                {showConfirmPassword ? (
                  <FaEyeSlash
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEye
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>New Password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                variant={password ? 'outline' : 'filled'}
                // type={showConfirmPassword ? 'password' : 'text'}
                placeholder='Confirm Password'
                value={password}
                // onChange={(e) => setPassword(e.currentTarget.value)}
                sx={{
                  ...inputText,
                  borderColor: colors.grey[300],
                  // background: !password && '#FBFAFA',
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
              <InputRightElement>
                {showConfirmPassword ? (
                  <FaEyeSlash
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEye
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Confirm New Password</FormLabel>
            <InputGroup>
              <Input
                isRequired
                variant={password ? 'outline' : 'filled'}
                // type={showConfirmPassword ? 'password' : 'text'}
                placeholder='Confirm Password'
                value={password}
                // onChange={(e) => setPassword(e.currentTarget.value)}
                sx={{
                  ...inputText,
                  borderColor: colors.grey[300],
                  // background: !password && '#FBFAFA',
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
              <InputRightElement>
                {showConfirmPassword ? (
                  <FaEyeSlash
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEye
                    color=''
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box
            width='100%'
            borderBottom={`1px solid ${colors.grey[400]}`}
            paddingBottom={2}
          >
            <Checkbox
              color={colors.highlight}
              defaultChecked
              size='md'
              alignSelf='flex-start'
              paddingY={2}
            >
              <Text sx={{ ...regularText }}>Checkbox</Text>
            </Checkbox>
          </Box>
          <Box width='100%' sx={{
            display: 'flex',
            justifyContent: 'end',
            paddingTop: 2,
            columnGap: 4
          }} >
          <Button
              colorScheme='blue'
              type='submit'
              variant='solid'
              sx={{ borderRadius: '25px' }}
            >
              <Text sx={{ ...sectionText, color: colors.primaryBg }}>Submit</Text>
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default ChangePassword;
