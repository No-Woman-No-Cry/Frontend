import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Image,
  Container,
  Menu,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  MenuButton,
  MenuList,
  Checkbox,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import { colors } from '@/Components/assets/style';
import { GetCompanies } from '@/services/jobSeeker/companiesList';
import { UserContext } from '@/utils/UserContext';

const Companylist = () => {
  const [companies, setCompanies] = useState([]);
  const { user } = useContext(UserContext);

  // console.log('user', user);

  const getCompanyList = async () => {
    const company = await GetCompanies();
    setCompanies(company.data.data);
  };

  useEffect(() => {
    getCompanyList();
  }, []);
  return (
    <Container maxW={'1440px'} px={0}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} my={2}>
        {companies.map((com) => {
          // console.log('com', com)
          return(
          <GridItem key={com.id}>
            <Box as='a' href={`/companies/${com.id}`}>
              <Card align='center' boxShadow='md' p='6' rounded='sm' bg='white'>
                <CardHeader>
                  <Image
                    src={com.icon}
                    alt={com.company_name}
                    boxSize={'100px'}
                    objectFit={'cover'}
                  />
                </CardHeader>
                <Text fontWeight={'bold'} noOfLines={1}>
                  {com.company_name}
                </Text>
                <Text fontWeight={'light'} noOfLines={1}>
                  {' '}
                  {com.industry}
                </Text>
                <Button
                  variant='outline'
                  borderWidth='thin'
                  borderRadius='full'
                  borderColor='gray.300'
                  p={1}
                  fontSize={'11px'}
                  width={'24'}
                  size={'xs'}
                  marginTop={'20px'}
                  color={'#0066A5'}
                  backgroundColor={colors.secondaryBg}
                >
                  {com.job_total} Pekerjaan
                </Button>
              </Card>
            </Box>
          </GridItem>
        )})}
      </Grid>
    </Container>
  );
};

export default Companylist;
