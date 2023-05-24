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
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from '@chakra-ui/react';
import React from 'react';

const BasicInformation = () => {
  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Information
      </Text>
      <Editable defaultValue='Description'>
        <EditablePreview />
        <EditableTextarea />
      </Editable>
      <form>
        <VStack spacing={3} marginTop={5}>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Location</FormLabel>
            <Input
              type='text'
              placeholder='Location'
              value={'Input Your Company Location'}
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
            <FormLabel sx={{ ...sectionText }}>Company Size</FormLabel>
            <Input
              type='text'
              placeholder='Company Size'
              value={'1200'}
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
            <FormLabel sx={{ ...sectionText }}>WhatsApp Number</FormLabel>
            <Input
              type='number'
              placeholder='+62'
              value={'+62'}
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
            <FormLabel sx={{ ...sectionText }}>Working Place</FormLabel>
            <Input
              type='text'
              placeholder='Fulltime / Intern / Parttime'
              value={''}
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
            <FormLabel sx={{ ...sectionText }}>Website</FormLabel>
            <Input
              type='text'
              placeholder='https://'
              value={''}
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

export default BasicInformation;
