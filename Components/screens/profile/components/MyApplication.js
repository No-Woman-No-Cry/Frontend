import { colors, headingText } from '@/Components/assets/style';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const MyApplication = () => {
  return (
    <Box width='100%'>
      <Text
        borderBlockEnd={`3px solid ${colors.grey[400]}`}
        paddingBottom='0.75rem'
        sx={{ ...headingText }}
      >
        My Application
      </Text>
    </Box>
  );
};

export default MyApplication;
