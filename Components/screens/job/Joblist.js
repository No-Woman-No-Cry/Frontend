import React, { useEffect, useState } from 'react';
// import Images from 'next/image';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
  Avatar,
  IconButton,
  Icon,
  Box,
  Stack,
  Center,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  PhoneIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ChevronDownIcon,
  Checkbox,
  Button,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { MdTimelapse } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GetAllJobs, GetCategories } from '@/services/jobSeeker/mainPage';
import { useRouter } from 'next/router';

const Joblist = () => {
  const [categories, setCategories] = useState([]);
  const [jobsList, setJobsList] = useState([]);

  const getCategoriesList = async () => {
    const categories = await GetCategories();
    setCategories(categories.data.data);
  };

  const getJobsList = async () => {
    const jobsList = await GetAllJobs();
    setJobsList(jobsList.data.data.jobs);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  useEffect(() => {
    getJobsList();
  }, []);

  const router = useRouter();
  console.log(jobsList);

  return (
    <Container maxW={'1440px'} px={0}>
      <Flex direction={'column'}>
        <Box>
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            textAlign={'Center'}
          >
            <Text>
              Find Your{' '}
              <Text as={'span'} color={'blue.400'}>
                {' '}
                Dream
              </Text>{' '}
              Job Here!
            </Text>
          </Heading>
        </Box>
        <Box align={'center'}>
          <Center maxW={'800px'} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae lacus sit amet arcu eleifend tincidunt. Praesent non ipsum ac
            urna venenatis lacinia quis at tortor. Quisque in vestibulum dui.
          </Center>
        </Box>
      </Flex>

      <Stack direction={'row'} gap={2} my={3}>
        {categories.map((cat) => (
          <LinkBox
            key={cat.id}
            as={'article'}
            w={'160px'}
            h={'80px'}
            bgGradient='linear(to-l, #103783, #42047e)'
            color={'white'}
            p={3}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <LinkOverlay href={`/categories/${cat.id}`}>
              <Center fontSize={'1rem'}>{cat.category_name}</Center>
            </LinkOverlay>
          </LinkBox>
        ))}
      </Stack>

      <Stack spacing={4} direction={'row'}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            {/* <PhoneIcon color='gray.300' /> */}
          </InputLeftElement>
          <Input type='text' placeholder='Search Job' />
        </InputGroup>
        <Popover>
          <PopoverTrigger>
            <Button>Job Type</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight={'bold'}>Job Type</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>

      <Grid templateColumns='repeat(3, 1fr)' gap={6} my={2}>
        {jobsList.map((job) => (
          <GridItem
            key={job.id}
            h={'168px'}
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
            onClick={() => router.push(`/jobs/${job.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src={job.company_icon} />

                <Box>
                  <Heading size='sm'>{job.job_title}</Heading>
                  <Text>{job.company_name}</Text>
                </Box>
              </Flex>
              <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                // icon={<BsThreeDotsVertical />}
              />
            </Flex>

            <Box p={3}>
              <Stack direction={'row'} align={'center'}>
                <Icon as={GoLocation} />
                <text>{job.location}</text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Icon as={MdTimelapse} />
                <text>{job.job_type}</text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Icon as={FaRegMoneyBillAlt} />
                <text>{job.salary}</text>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
export default Joblist;
