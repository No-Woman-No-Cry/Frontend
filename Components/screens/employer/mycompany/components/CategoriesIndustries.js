import React from 'react';
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
} from '@chakra-ui/react';
import { GetIndustry } from '@/services/employer/mycompany';

const CategoriesIndustries = () => {
  const [industry, setIndustry] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  useEffect(() => {
    // Fetch skills
    fetchIndustry();
  }, []);
  const fetchIndustry = async () => {
    try {
      const data = await GetIndustry();
      setIndustry(data.data.data);
      console.log(data.data.data);
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
        <FormLabel>Skills Needed :</FormLabel>
        <Select
          size='md'
          placeholder='Select skills (multiple choise)'
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
      <Wrap spacing={2} marginTop={2}>
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
    </Box>
  );
};

export default CategoriesIndustries;
