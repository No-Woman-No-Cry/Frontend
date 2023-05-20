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
import React from 'react';

const MyInformation = () => {
  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Information
      </Text>
      <form>
        <VStack spacing={3} marginTop={5}>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Email</FormLabel>
            <Input
              isDisabled
              variant={'filled'}
              type='email'
              placeholder='Email'
              value={'email'}
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
              value={'0818'}
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
              // value={'linked in'}
              // onChange={(e) => setEmail(e.currentTarget.value)}
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
              value={'portflio'}
              // onChange={(e) => setEmail(e.currentTarget.value)}
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
              value={'cv'}
              // onChange={(e) => setEmail(e.currentTarget.value)}
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
