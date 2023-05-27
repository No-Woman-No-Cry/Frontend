import { colors, headingText, inputText, sectionText } from '@/Components/assets/style';
import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const MyEducation = ({ userEducation }) => {
  const [userEdu, setUserEdu] = useState({
    name: '',
    major: '',
    degree: '',
    start: '',
    end: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function formatDate(isDate) {
    const date = new Date(isDate)

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate
  }

  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Education
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3} marginTop={5}>
          <FormControl>
            <FormLabel sx={{ ...sectionText }}>Nama Universitas</FormLabel>
            <Input
              isDisabled
              variant={'filled'}
              type='text'
              placeholder='Universitas'
              value={userEducation[0]?.name || userEdu?.name}
              onChange={(e) =>
                setUserEdu({
                  ...userEdu,
                  name: e.currentTarget.value,
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
            <FormLabel sx={{ ...sectionText }}>Jurusan</FormLabel>
            <Input
              type='text'
              placeholder='Jurusan'
              value={
                userEducation[0]?.major || userEdu?.major
              }
              onChange={(e) =>
                setUserEdu({
                  ...userEdu,
                  major: e.currentTarget.value,
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
            <FormLabel sx={{ ...sectionText }}>Gelar</FormLabel>
            <Input
              type='text'
              placeholder='Gelar'
              value={userEducation[0]?.degree || userEdu?.degree}
              onChange={(e) =>
                setUserEdu({
                  ...userEdu,
                  degree: e.currentTarget.value,
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
            <FormLabel sx={{ ...sectionText }}>Start</FormLabel>
            <Input
            isDisabled
              type='text'
              placeholder='Start'
              value={
                formatDate(userEducation[0]?.start) || '-'
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
            <FormLabel sx={{ ...sectionText }}>Lulus</FormLabel>
            <Input
            isDisabled
              type='text'
              placeholder='End'
              value={formatDate(userEducation[0]?.end) || '-'}
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
          {/* <Box
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
          </Box> */}
        </VStack>
      </form>
    </Box>
  );
};

export default MyEducation;
