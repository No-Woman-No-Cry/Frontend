import { colors, headingText } from '@/Components/assets/style';
import { Box, Text, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import React from 'react';

const MyBenefit = () => {
  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`3px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        Our Company Benefits
      </Text>

      <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Checkbox value='naruto'>Naruto</Checkbox>
          <Checkbox value='sasuke'>Sasuke</Checkbox>
          <Checkbox value='kakashi'>Kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Box>
  );
};

export default MyBenefit;
