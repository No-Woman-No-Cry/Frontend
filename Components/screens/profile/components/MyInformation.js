import {
  colors,
  headingText,
  inputText,
  sectionText,
} from '@/Components/assets/style';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const MyInformation = ({ userInfo }) => {
  const [userInformation, setUserInformation] = useState({
    whatsapp_number: '',
    linkedin_url: '',
    cv_url: '',
    portofolio_url: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Information
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3} marginTop={5}>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Email</FormLabel>
            <Input
              isDisabled
              variant={'filled'}
              type='email'
              placeholder='Email'
              value={userInfo.email}
              sx={{
                ...inputText,
                borderColor: colors.grey[300],
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
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>WhatsApp Number</FormLabel>
            <Input
              type='number'
              placeholder='Whatsapp Number'
              value={
                userInfo?.whatsapp_number || userInformation?.whatsapp_number
              }
              onChange={(e) =>
                setUserInformation({
                  ...userInformation,
                  whatsapp_number: e.currentTarget.value,
                })
              }
              sx={{
                ...inputText,
                borderColor: colors.grey[300],
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
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Linked in</FormLabel>
            <Input
              type='text'
              placeholder='Linked in'
              value={userInfo?.linkedin_url || userInformation?.linkedin_url}
              onChange={(e) =>
                setUserInformation({
                  ...userInformation,
                  linkedin_url: e.currentTarget.value,
                })
              }
              sx={{
                ...inputText,
                borderColor: colors.grey[300],
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
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Portfolio url</FormLabel>
            <Input
              type='text'
              placeholder='Portflio'
              value={
                userInfo?.portofolio_url || userInformation?.portofolio_url
              }
              onChange={(e) =>
                setUserInformation({
                  ...userInformation,
                  portofolio_url: e.currentTarget.value,
                })
              }
              sx={{
                ...inputText,
                borderColor: colors.grey[300],
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
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>CV url</FormLabel>
            <Input
              type='text'
              placeholder='CV'
              value={userInfo?.cv_url || userInformation?.cv_url}
              onChange={(e) =>
                setUserInformation({
                  ...userInformation,
                  cv_url: e.currentTarget.value,
                })
              }
              sx={{
                ...inputText,
                borderColor: colors.grey[300],
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
          <Box
            width='100%'
            sx={{
              display: 'flex',
              justifyContent: 'end',
              paddingTop: 2,
              columnGap: 4,
            }}
          >
            <Button
              colorScheme='blue'
              type='submit'
              variant='solid'
              sx={{ borderRadius: '25px' }}
            >
              <Text sx={{ ...sectionText, color: colors.primaryBg }}>
                Submit
              </Text>
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

export default MyInformation;
