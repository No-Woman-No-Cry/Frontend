import {
  colors,
  headingText,
  inputText,
  sectionText,
} from '@/Components/assets/style';
import { UpdateProfile } from '@/services/jobSeeker/profile';
import { UserContext } from '@/utils/UserContext';
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
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const MyInformation = ({ userInfo }) => {
  const [waNumber, setWaNumber] = useState(userInfo.whatsapp_number)
  const [linkedin, setLinkedin] = useState(userInfo.linkedin_url)
  const [portfolio, setPortfolio] = useState(userInfo.portofolio_url)
  const [cv, setCv] = useState(userInfo.cv_url)
  
  const router = useRouter();

  const { user } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      whatsapp_number: waNumber,
      linkedin_url: linkedin,
      portofolio_url: portfolio,
      cv_url: cv
    }
    
    if (user) {
      await UpdateProfile(user.profile_id, data);

      router.refresh();
    }
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
        {userInfo && (
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
                value={waNumber || userInfo.whatsapp_number}
                onChange={(e) => setWaNumber(e.currentTarget.value)}
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
                value={linkedin || userInfo.linkedin_url}
                onChange={(e) => setLinkedin(e.currentTarget.value)}
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
                value={portfolio || userInfo.portofolio_url}
                onChange={(e) => setPortfolio(e.currentTarget.value)}
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
                value={cv || userInfo.cv_url}
                onChange={(e) => setCv(e.currentTarget.value)}
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
        )}
      </form>
    </Box>
  );
};

export default MyInformation;
