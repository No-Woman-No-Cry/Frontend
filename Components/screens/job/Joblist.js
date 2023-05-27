import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  Select,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { MdTimelapse } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GetAllJobs, GetCategories } from '@/services/jobSeeker/mainPage';
import Link from 'next/link';

const Joblist = () => {
  const [categories, setCategories] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const router = useRouter();

  const getCategoriesList = async () => {
    const categories = await GetCategories();
    setCategories(categories.data.data);
  };

  const getJobsList = async (
    page,
    limit,
    jobType,
    workPlace,
    categoryId,
    searchJob
  ) => {
    const jobsList = await GetAllJobs(
      page,
      limit,
      jobType,
      workPlace,
      categoryId,
      searchJob
    );
    setJobsList(jobsList.data.data.jobs);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  useEffect(() => {
    const { query } = router;
    const page = query.page || 1;
    const limit = query.limit || 5;
    const jobType = query.jobType || '';
    const workPlace = query.workPlace || '';
    const categoryId = query.categoryId || '';
    const searchJob = query.searchJob || '';

    getJobsList(page, limit, jobType, workPlace, categoryId, searchJob);
  }, [router.query]);

  const handleFilter = (key, value) => {
    const page =
      key === 'page'
        ? value !== ''
          ? value
          : router.query.page || ''
        : router.query.page || '';
    const limit =
      key === 'limit'
        ? value !== ''
          ? value
          : router.query.limit || ''
        : router.query.limit || '';
    const jobType =
      key === 'jobType'
        ? value !== ''
          ? value
          : router.query.jobType || ''
        : router.query.jobType || '';
    const workPlace =
      key === 'workPlace'
        ? value !== ''
          ? value
          : router.query.workPlace || ''
        : router.query.workPlace || '';
    const categoryId =
      key === 'categoryId'
        ? value !== ''
          ? value
          : router.query.categoryId || ''
        : router.query.categoryId || '';
    const searchJob =
      key === 'searchJob'
        ? value !== ''
          ? value
          : router.query.searchJob || ''
        : router.query.searchJob || '';

    const query = {
      ...router.query,
      page,
      limit,
      jobType,
      workPlace,
      categoryId,
      searchJob,
    };
    router.push({ pathname: router.pathname, query });
  };

  // console.log(jobsList);

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
            Unlock the Door to Your Dream Career: Explore Opportunities and
            Ignite Your Passion for Success Here!
          </Center>
        </Box>
      </Flex>

      <Stack direction={'row'} gap={2} my={3}>
        <LinkBox
          as={'article'}
          w={'160px'}
          h={'80px'}
          bgGradient='linear-gradient(to left, #a51b07, #f5935a)'
          color={'white'}
          p={3}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Text
            style={{
              cursor: 'pointer',
            }}
            onClick={() => router.push('/jobs')}
            textAlign={'center'}
          >
            All Jobs
          </Text>
        </LinkBox>
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
            <Text
              style={{
                cursor: 'pointer',
              }}
              onClick={() => router.push(`/jobs/?categoryId=${cat.id}`)}
            >
              <Center fontSize={'1rem'}>{cat.category_name}</Center>
            </Text>
          </LinkBox>
        ))}
      </Stack>

      <Stack spacing={4} direction={'row'}>
        <InputGroup flex={7}>
          <InputLeftElement pointerEvents='none'>
            {/* <PhoneIcon color='gray.300' /> */}
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search Job'
            onChange={(e) => handleFilter('searchJob', e.target.value)}
          />
        </InputGroup>
        <Select
          flex={1}
          onChange={(e) => handleFilter('jobType', e.target.value)}
        >
          <option value=''>Job type</option>
          <option value='fulltime'>Fulltime</option>
          <option value='parttime'>Partime</option>
          <option value='intern'>Intern</option>
        </Select>
        <Select
          flex={1}
          onChange={(e) => handleFilter('workPlace', e.target.value)}
        >
          <option value=''>Work Place</option>
          <option value='onsite'>Onsite</option>
          <option value='remote'>Remote</option>
          <option value='hybird'>Hybrid</option>
        </Select>
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
