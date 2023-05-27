import {
  Stack,
  Text,
  Button,
  Box,
  UnorderedList,
  ListItem,
  Avatar,
  Icon,
  Flex,
  SimpleGrid,
  Center,
  Spacer,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  CheckCircleIcon,
  LinkIcon,
  StarIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useContext, useState } from 'react';
import { ApplyTheJob } from '@/services/jobSeeker/detailJobPage';
import { UserContext } from '@/utils/UserContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function JobDetail({ props }) {
  const [data, setData] = useState(props);
  const { user } = useContext(UserContext);
  const router = useRouter();

  const applyThisFuckinJob = async () => {
    if (user.length !== 0) {
      const response = await ApplyTheJob(data.id, {
        job_seeker_id: +user.profile_id,
      });

      if (response && response.data && response.data.success) {
        toast.success('Berhasil apply');

        setTimeout(() => {
          router.back();
        }, 2500);
      } else {
        toast.warning('Anda sudah apply sebelumnya');

        setTimeout(() => {
          router.back();
        }, 2500);
      }
    }
  };

  return (
    <>
      <Stack ml='10' mt='5'>
        <Flex
          fontSize={'12px'}
          fontWeight={'bold'}
          color={'#A3A3A3'}
          pb={'10px'}
          as='a'
          href={`/#`}
        >
          <Center>
            <Icon as={ChevronLeftIcon} w={'20px'} h={'20px'} /> Back to Homepage
          </Center>
        </Flex>
        <Avatar src={data.company_icon} />
        <Text fontSize={'xl'} fontWeight={'semibold'} color={'black'}>
          {data.company_name}
          <sup>
            <Icon as={CheckCircleIcon} color='#009C9A' w='13px' />
          </sup>
        </Text>
        <Text fontSize={'2xl'} fontWeight={'bold'} color={'black'}>
          {data.job_title}
        </Text>
      </Stack>
      <Stack px='10' mt='10' bg={'white'}>
        <Stack
          justifyContent='space-between'
          direction={{ base: 'column', md: 'row' }}
        >
          <Box width='70%'>
            <Box>
              <Stack direction='row' alignItems='center' pb='2'>
                <Text fontWeight='bold'>Job Description</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='13px'
                fontWeight='sm'
                textAlign={'left'}
                maxW={'7xl'}
                borderWidth='1px'
                rounded='lg'
                borderRadius='lg'
                borderColor='#ECEDF0'
                bg={'#F9F9F9'}
                py='4'
                px='6'
                mr='10'
              >
                <UnorderedList>
                  <ListItem>{data.job_description}</ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Requirements</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='13px'
                textAlign={'left'}
                maxW={'7xl'}
                borderWidth='1px'
                rounded='lg'
                borderRadius='lg'
                bg={'#F9F9F9'}
                borderColor='#ECEDF0'
                py='4'
                px='6'
                mr='10'
              >
                <UnorderedList>
                  <ListItem>{data.job_requirements}</ListItem>
                </UnorderedList>
              </Text>
            </Box>
            <Box mb='7'>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Skills Needed</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='13px'
                textAlign={'left'}
                maxW={'7xl'}
                borderWidth='1px'
                rounded='lg'
                borderRadius='lg'
                bg={'#F9F9F9'}
                borderColor='#ECEDF0'
                py='4'
                px='6'
                mr='10'
              >
                {data.skill_needed.map((skill) => (
                  <Flex key={4}>
                    <Box
                      boxShadow='md'
                      fontSize={'12px'}
                      rounded={'full'}
                      mr='2'
                    >
                      <Text p='2'>{skill.skill_name}</Text>
                    </Box>
                  </Flex>
                ))}
              </Text>
            </Box>
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
                  <Box p='2'>
                    <Text>About Companies</Text>
                  </Box>
                  <Spacer />
                  <Center color='#6913D8'>
                    Learn More
                    <Icon as={ChevronRightIcon} w='20px' h='20px' mt='2px' />
                  </Center>
                </Flex>
                <Text fontSize='13px'>{data.company_description}</Text>
                <Flex fontSize='12px'>
                  <Box m='4'>
                    <Text>Industry</Text>
                    <Text fontWeight='bold'>{data.insight[0].industry}</Text>
                  </Box>
                  <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
                  <Box m='4'>
                    <Text>Location</Text>
                    <Text fontWeight='bold'>{data.insight[0].location}</Text>
                  </Box>
                  <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
                  <Box m='4'>
                    <Text>Company Size</Text>
                    <Text fontWeight='bold'>
                      {data.insight[0].company_size}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box width='30%'>
            <Box>
              <Stack direction='row' alignItems='center' pb='2'>
                <Text fontWeight='bold'>Apply as Priority</Text>
              </Stack>
              <Box
                border='1px'
                rounded='lg'
                borderColor='#ECEDF0'
                bg='#F9F9F9'
                p='5'
              >
                <Text fontSize='13px'>
                  We partner with companies to accept very limited number of
                  applicants so they can prioritize your application.
                </Text>
                <Button
                  colorScheme='messenger'
                  mt='3'
                  size='sm'
                  rounded={'2xl'}
                  px='10'
                  fontSize={'12px'}
                  onClick={() => applyThisFuckinJob()}
                >
                  Easy Apply
                </Button>
                <Icon
                  as={StarIcon}
                  color={'blue'}
                  mx='2'
                  w='30px'
                  h='30px'
                  rounded='full'
                  p='2'
                  mt='3'
                  boxShadow='inner'
                />
                <Icon
                  as={LinkIcon}
                  color={'blue'}
                  w='30px'
                  h='30px'
                  rounded='full'
                  p='2'
                  mt='3'
                  boxShadow='inner'
                />
              </Box>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Job Information</Text>
              </Stack>
              <Box
                border='1px'
                rounded='lg'
                borderColor='#ECEDF0'
                bg='#F9F9F9'
                p='5'
              >
                {data.job_information.map}
                <Text fontSize='13' fontWeight={'bold'}>
                  Experience Requirement
                </Text>
                <SimpleGrid columns={2} spacing={2} mt={'2'}>
                  <Box
                    p='2px'
                    bg='white'
                    boxShadow='md'
                    fontSize={'12px'}
                    rounded={'md'}
                  >
                    <Center>
                      {data.job_information.job_experience[0].experince_name}
                    </Center>
                  </Box>
                </SimpleGrid>
                <Text fontSize='13' mt='3' fontWeight={'bold'}>
                  Job Type
                </Text>
                <SimpleGrid columns={2} spacing={2} mt={'2'}>
                  <Box
                    p='2px'
                    bg='white'
                    boxShadow='md'
                    fontSize={'12px'}
                    rounded={'md'}
                  >
                    <Center>{data.job_information.job_type[0]?.type}</Center>
                  </Box>
                </SimpleGrid>
                <Text fontSize='13' mt='3' fontWeight={'bold'}>
                  Salery
                </Text>
                <SimpleGrid spacing={2} mt={'2'}>
                  <Box
                    p='2px'
                    bg='white'
                    boxShadow='md'
                    fontSize={'12px'}
                    rounded={'md'}
                  >
                    <Center>{data.job_information?.salary}</Center>
                  </Box>
                </SimpleGrid>
                <Text fontSize='13' mt='3' fontWeight={'bold'}>
                  Location
                </Text>
                <SimpleGrid columns={2} spacing={2} mt={'2'}>
                  <Box
                    p='2px'
                    bg='white'
                    boxShadow='md'
                    fontSize={'12px'}
                    rounded={'md'}
                  >
                    <Center>{data.job_information.work_location}</Center>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
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
                mb='10'
              >
                <Text fontSize='12px'>
                  <Icon as={data.benefits[0]?.icon} /> {data.benefits[0]?.name}
                </Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
