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

import React from 'react';
import { GetBenefits, PostBenefits } from '@/services/employer/mycompany';
import { useContext } from 'react';
import { UserContext } from '@/utils/UserContext';
import { toast } from 'react-toastify';

const MyBenefit = () => {
  const [benefit, setBenefit] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const { employer } = useContext(UserContext);
  useEffect(() => {
    // Fetch skills
    fetchBenefit();
  }, []);
  const fetchBenefit = async () => {
    try {
      const data = await GetBenefits();
      setBenefit(data.data.data);
      // console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setSelectedBenefits([...selectedBenefits, selectedValues]);
  };
  const handleSubmit = async () => {
    const array = selectedBenefits.map((ben) => ben[0]);
    const postBenefits = await PostBenefits(employer.company_id, {
      benefit_id: array,
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
        <FormLabel>My Benefit:</FormLabel>
        <Select
          size='md'
          placeholder='Select benefits (multiple choise)'
          onChange={handleSelectChange}
          bg={'secondaryBg'}
        >
          {benefit.map((bnft) => (
            <option key={bnft.benefit_id} value={bnft.benefit_id}>
              {bnft.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Wrap spacing={2} marginTop={2} marginBottom={2}>
        {selectedBenefits.length > 0
          ? selectedBenefits.map((option) => {
              const selectedBenefits = benefit.find(
                (bnft) => bnft.benefit_id == option
              );
              if (selectedBenefits) {
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
                        <Image
                          src={selectedBenefits.icon}
                          alt='icon'
                          width={'20px'}
                        ></Image>
                        {selectedBenefits.name}
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

export default MyBenefit;
