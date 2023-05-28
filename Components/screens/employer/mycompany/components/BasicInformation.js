import {
  colors,
  headingText,
  inputText,
  sectionText,
} from '@/Components/assets/style';
import { GetBasicInfo, UpdateBasicInfo } from '@/services/employer/mycompany';
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

const CompanyInformation = () => {
  const [companyIcon, setCompanyIcon] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [email, setEmail] = useState('');
  const [waNumber, setWaNumber] = useState('');
  const [workingPlace, setWorkingPlace] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const router = useRouter();

  const { employer } = useContext(UserContext);

  async function handleSubmit() {
    const data = {
      company_icon_url: companyIcon,
      company_name: companyName,
      company_description: description,
      company_location: location,
      company_size: companySize,
      company_email: email,
      company_whatsapp_number: waNumber,
      company_work_place: workingPlace,
      company_website_url: websiteUrl,
    };

    if (employer && employer.length !== 0) {
      const response = await UpdateBasicInfo(employer.company_id, data);
      console.log(data);
      if (response && response.data) {
        toast.info('Profile updated');

        setTimeout(() => {
          router.refresh();
        }, 2000);
      }
    }
  }

  useEffect(() => {
    const data = window.localStorage.getItem('employer');

    const result = JSON.parse(data);

    const response = async () => {
      const { company_id } = result;

      const res = await GetBasicInfo(+company_id);

      if (res && res.data) {
        const {
          company_icon,
          company_name,
          description,
          location,
          company_size,
          email,
          whatsapp_number,
          working_place,
          website_url,
        } = res.data.data;

        setCompanyIcon(company_icon);
        setCompanyName(company_name);
        setDescription(description);
        setLocation(location);
        setCompanySize(company_size);
        setEmail(email);
        setWaNumber(whatsapp_number);
        setWorkingPlace(working_place);
        setWebsiteUrl(website_url);
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
        Company Information
      </Text>
      <VStack spacing={3} marginTop={5}>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Company Icon</FormLabel>
          <Input
            type='text'
            placeholder='Company Icon'
            value={companyIcon}
            onChange={(e) => setCompanyIcon(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Company Name</FormLabel>
          <Input
            type='text'
            placeholder='Company Name'
            value={companyName}
            onChange={(e) => setCompanyName(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Description</FormLabel>
          <Input
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Location</FormLabel>
          <Input
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
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
            value={companySize}
            onChange={(e) => setCompanySize(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Email</FormLabel>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>WhatsApp Number</FormLabel>
          <Input
            type='text'
            placeholder='WhatsApp Number'
            value={waNumber}
            onChange={(e) => setWaNumber(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
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
            placeholder='onsite|remote|hybird'
            value={workingPlace}
            onChange={(e) => setWorkingPlace(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
                outlineOffset: 0,
                outlineWidth: 0,
              },
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ ...sectionText }}>Website URL</FormLabel>
          <Input
            type='text'
            placeholder='Website URL'
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.currentTarget.value)}
            sx={{
              ...inputText,
              borderColor: colors.grey[300],
              '&:hover': {
                background: '#FBFAFA',
                outline: '0.5px solid #3182CE',
                outlineOffset: 0,
              },
              '&:focus': {
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

export default CompanyInformation;
