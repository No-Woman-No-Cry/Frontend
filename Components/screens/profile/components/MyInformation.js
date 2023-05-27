import {
  colors,
  headingText,
  inputText,
  sectionText,
} from '@/Components/assets/style';
import { GetProfile, UpdateProfile } from '@/services/jobSeeker/profile';
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
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyInformation = () => {
  const [email, setEmail] = useState('');
  const [waNumber, setWaNumber] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [headline, setHeadline] = useState('');
  const [cv, setCv] = useState('');

  const router = useRouter();

  const { user } = useContext(UserContext);

  async function handleSubmit() {
    const data = {
      email: email,
      job_seeker_headline: headline,
      whatsapp_number: waNumber,
      linkedin_url: linkedin,
      portofolio_url: portfolio,
      cv_url: cv,
    };

    if (user && user.length !== 0) {
      const response = await UpdateProfile(user.profile_id, data);

      if (response && response.data) {
        toast.info('Profile updated');

        setTimeout(() => {
          router.refresh();
        }, 2000);
      }
    }
  }

  useEffect(() => {
    const data = window.localStorage.getItem('user');

    const result = JSON.parse(data);

    const response = async () => {
      const { profile_id } = result;

      const res = await GetProfile(+profile_id);

      if (res && res.data) {
        const {
          email,
          job_seeker_headline,
          cv_url,
          linkedin_url,
          portofolio_url,
          whatsapp_number,
        } = res.data.data;

        setWaNumber(whatsapp_number);
        setEmail(email);
        setHeadline(job_seeker_headline);
        setCv(cv_url);
        setLinkedin(linkedin_url);
        setPortfolio(portofolio_url);
      }
    };

    response();
  }, []);

  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`1px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Information
      </Text>
      <VStack spacing={3} marginTop={5}>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Email</FormLabel>
          <Input
            isDisabled
            variant={'filled'}
            type='email'
            placeholder='Email'
            defaultValue={email}
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
          <FormLabel sx={{ ...sectionText }}>Headline</FormLabel>
          <Input
            type='text'
            placeholder='Headline'
            value={headline}
            onChange={(e) => setHeadline(e.currentTarget.value)}
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
            value={waNumber}
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
            value={linkedin}
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
            value={portfolio}
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
            value={cv}
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
            onClick={() => handleSubmit()}
          >
            <Text sx={{ ...sectionText, color: colors.primaryBg }}>Submit</Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default MyInformation;
