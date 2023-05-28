import {
  Stack,
  Text,
  Button,
  Box,
  UnorderedList,
  ListItem,
  Avatar,
  Icon,
  Image,
  Flex,
  SimpleGrid,
  Center,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Container,
  Grid,
  GridItem,
  Card,
} from '@chakra-ui/react';

import {
  ChevronLeftIcon,
  CheckCircleIcon,
  LinkIcon,
  StarIcon,
  ChatIcon,
  ChevronRightIcon,
  TimeIcon,
} from '@chakra-ui/icons';
import { getCompanyDetails } from '@/services/jobSeeker/companiesList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaBuilding, FaMapMarker, FaSign } from 'react-icons/fa';
import { colors } from '@/Components/assets/style';

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function lowercaseFirstLetter(text) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

const CompanyDetails = ({ props }) => {
  const [data, setData] = useState(props);
  // console.log(props);

  return (
    <Container maxW={'7xl'}>
      <Stack ml='10' mt='5'>
        <Flex
          fontSize={'12px'}
          fontWeight={'bold'}
          color={'#A3A3A3'}
          pb={'10px'}
        ></Flex>
        <Image width={10} src={data.company_logo} alt='' />
        <Text fontSize={'xl'} fontWeight={'semibold'} color={'black'}>
          {' '}
          {data.company_name}{' '}
          <sup>
            <Icon as={CheckCircleIcon} color='#009C9A' w='13px' />
          </sup>
        </Text>
      </Stack>
      <Stack px='10' mt='10' bg={'white'}>
        <Stack
          justifyContent='space-between'
          direction={{ base: 'column', md: 'row' }}
        >
          <Tabs variant='enclosed' size='sm'>
            <TabList mb='1rem'>
              <Tab>Overview</Tab>
              <Tab>Jobs</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack
                  justifyContent='space-between'
                  direction={{ base: 'column', md: 'row' }}
                >
                  <Box>
                    <Box mb='100px'>
                      <Box
                        width='90%'
                        fontSize='13px'
                        textAlign={'left'}
                        maxW={'7xl'}
                        rounded='lg'
                        borderRadius='lg'
                        bg={'#F4F2FF'}
                        py='4'
                        px='6'
                        mr='10'
                      >
                        <Flex
                          minWidth='max-content'
                          alignItems='center'
                          gap='2'
                          fontWeight='bold'
                        >
                          <Box pb='2'>
                            <Text>About Companies</Text>
                          </Box>
                          <Spacer />
                          <Center color='#6913D8'></Center>
                        </Flex>
                        <Text fontSize='14px'>{data.company_description}</Text>
                        <Flex fontSize='12px'>
                          <Box m='4'>
                            <Text>Industry</Text>
                            <Text fontWeight='bold'>
                              {data.insight[0]?.industry}
                            </Text>
                          </Box>
                          <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
                          <Box m='4'>
                            <Text>Location</Text>
                            <Text fontWeight='bold'>
                              {data.insight[0]?.location}
                            </Text>
                          </Box>
                          <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
                          <Box m='4'>
                            <Text>Company Size</Text>
                            <Text fontWeight='bold'>
                              {data.insight[0]?.company_size}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Box width='40%'>
                    <Box>
                      <Stack direction='row' alignItems='center' pb='2' mt='3'>
                        <Text fontWeight='bold'>Benefits</Text>
                      </Stack>
                      <Box
                        border='1px'
                        rounded='lg'
                        borderColor='#ECEDF0'
                        bg='#F9F9F9'
                        p='5'
                      >
                        {data.benefits.map((benefit, index) => (
                          <Text
                            key={index}
                            fontSize='12px'
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 3,
                              marginBottom: '10px',
                            }}
                          >
                            <Image
                              src={benefit.icon}
                              width={4}
                              height={4}
                              style={{ marginRight: '5px' }}
                              alt=''
                            />
                            {benefit.name}
                          </Text>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel>
                {/*
                job_type: "intern"
​​                location: "Jakarta, Indonesia"
​​                ​salary: "Rp. 3.000.000 - Rp. 5.000.000"
​​                work_location: "onsite"*/}
                <Container maxW={'7xl'} px={0}>
                  <Grid templateColumns='repeat(4, 1fr)' gap={6} my={2}>
                    {data.jobs.map((job, index) => (
                      <GridItem key={index}>
                        <Box as='a' href={`/jobs/${job.id}`}>
                          <Card
                            border={'ActiveBorder'}
                            p='4'
                            rounded='sm'
                            bg='white'
                          >
                            <Text
                              fontWeight={'bold'}
                              fontSize={'12px'}
                              marginBottom={'6px'}
                            >
                              {job.job_title}
                            </Text>
                            <Text
                              fontWeight={'light'}
                              fontSize={'16px'}
                              noOfLines={1}
                            >
                              {' '}
                              {job.job_category}{' '}
                              <Icon
                                as={CheckCircleIcon}
                                color='#009C9A'
                                w='10px'
                              />
                            </Text>
                            <Text
                              fontSize='16px'
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 23,
                                marginBottom: '10px',
                              }}
                            >
                              <Flex align='center' mb='2'>
                                <Icon
                                  as={FaMapMarker}
                                  color='grey'
                                  w='10px'
                                  mr='1'
                                />
                                <Text>{job.location}</Text>
                              </Flex>
                              <Flex align='center' mb='2'>
                                <Icon
                                  as={FaBuilding}
                                  color='grey'
                                  w='10px'
                                  mr='1'
                                />
                                <Text>{job.work_location}</Text>
                              </Flex>
                            </Text>
                            <Button
                              variant='outline'
                              borderWidth='thin'
                              borderRadius='full'
                              borderColor='gray.300'
                              p={0}
                              fontSize={'10px'}
                              width={'10'}
                              height={'4'}
                              size={'xs'}
                              marginTop={'5px'}
                              color={'#E75480'}
                              backgroundColor={'#fff2f4'}
                            >
                              {job.job_type}
                            </Button>
                          </Card>
                        </Box>
                      </GridItem>
                    ))}
                  </Grid>
                </Container>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CompanyDetails;
