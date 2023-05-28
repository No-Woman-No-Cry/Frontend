import React, { useContext } from 'react';
import { colors, headingText } from '@/Components/assets/style';
import { useState, useEffect } from 'react';
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Wrap,
  WrapItem,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import { GetIndustry, PostIndustries } from '@/services/employer/mycompany';
import { UserContext } from '@/utils/UserContext';
import { toast } from 'react-toastify';

const CategoriesIndustries = () => {
  const [industry, setIndustry] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const { employer } = useContext(UserContext);
  useEffect(() => {
    // Fetch skills
    fetchIndustry();
  }, []);
  const fetchIndustry = async () => {
    try {
      const data = await GetIndustry();
      setIndustry(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setSelectedIndustries([...selectedIndustries, selectedValues]);
  };
  const handleSubmit = async () => {
    const array = selectedIndustries.map((ind) => ind[0]);
    const postCategoriesIndustries = await PostIndustries(employer.company_id, {
      industry_id: array,
    });
    toast.info('Industry has added');
  };
  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`3px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        Our Company Benefits
      </Text>

      <FormControl>
        <FormLabel>My Industry</FormLabel>
        <Select
          size='md'
          placeholder='Select industries (multiple choise)'
          onChange={handleSelectChange}
          bg={'secondaryBg'}
        >
          {industry.map((industries) => (
            <option key={industries.industry_id} value={industries.industry_id}>
              {industries.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Wrap spacing={2} marginTop={2} marginBottom={2}>
        {selectedIndustries.length > 0
          ? selectedIndustries.map((option) => {
              const selectedIndustries = industry.find(
                (industries) => industries.industry_id == option
              );
              if (selectedIndustries) {
                return (
                  <WrapItem key={option}>
                    <Box
                      background={'primaryBg'}
                      //   py={1}
                      //   px={2}
                      borderRadius={10}
                      fontSize={'15'}
                      color={'brand.800'}
                      border={'1px'}
                      boxShadow='lg'
                      p='3'
                    >
                      <Flex gap={3} align={'center'}>
                        {/* <Image
                          src={selectedIndustries.icon}
                          alt='icon'
                          width={'20px'}
                        ></Image> */}
                        {selectedIndustries.name}
                      </Flex>
                    </Box>
                  </WrapItem>
                );
              } else {
                return null;
              }
            })
          : ''}
      </Wrap>
      <Button
        colorScheme='blue'
        type='submit'
        variant='solid'
        sx={{ borderRadius: '25px' }}
        onClick={() => handleSubmit()}
      >
        <Text>Submit</Text>
      </Button>
    </Box>
  );
};

export default CategoriesIndustries;
