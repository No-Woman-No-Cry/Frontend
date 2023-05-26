import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Text,
  Grid,
  GridItem,
  Button,
  Image,
  Container,
  Menu,
  Stack,
  Checkbox,
  MenuItem,
  Box,
  Flex,
  Center,
  Icon,
  Spacer,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { colors } from '@/Components/assets/style';
import { useRouter } from 'next/router';
import {
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
  MinusIcon,
  StarIcon,
} from '@chakra-ui/icons';

const JobDetails = ({ props }) => {
  const [data, setData] = useState(props.data);
  const [companyId, setCompanyId] = useState(props.company_id);
  const [jobId, setJobId] = useState(props.job_id);

  const router = useRouter();
  return (
    <Container maxW={'5xl'}>
      <Stack mt='5'>
        <Flex
          fontSize={'12px'}
          fontWeight={'bold'}
          color={'#A3A3A3'}
          pb={'10px'}
        >
          <Center>
            <Image></Image>
          </Center>
        </Flex>
        <Image width={10} src={data.company_icon} />
        <Text fontSize={'xl'} fontWeight={'semibold'} color={'black'}>
          {' '}
          {data.company_name}{' '}
          <sup>
            <Icon as={CheckCircleIcon} color='#009C9A' w='13px' />
          </sup>
          <br />
          <Text fontSize={'sm'} fontWeight={'medium'}>
            {data.job_title}
          </Text>
        </Text>
      </Stack>
      <Stack mt='5' bg={'white'}>
        <Stack
          justifyContent='space-between'
          direction={{ base: 'column', md: 'row' }}
        >
          <Box width={'70%'}>
            <Box>
              <Stack direction='row' alignItems='center' pb='2'>
                <Text fontWeight='bold'>Job Description</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='15px'
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
                whiteSpace={'pre'}
              >
                {data.job_description}
              </Text>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Requirements</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='15px'
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
                whiteSpace={'pre'}
              >
                {data.job_requirements}
              </Text>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Skills Needed</Text>
              </Stack>
              <Text
                width='90%'
                fontSize='15px'
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
                <Flex>
                  {data.skill_needed.map((skill) => {
                    return (
                      <Box
                        boxShadow='md'
                        fontSize={'12px'}
                        rounded={'full'}
                        mr='2'
                      >
                        <Center p='2'>{skill.skill_name}</Center>
                      </Box>
                    );
                  })}
                </Flex>
              </Text>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' pb='2' mt='3'>
                <Text fontWeight='bold'>Applicant</Text>
              </Stack>
              {data.applicant.length > 0 ? (
                data.applicant.map((a) => {
                  return (
                    <Text
                      width='90%'
                      fontSize='15px'
                      textAlign={'left'}
                      maxW={'7xl'}
                      borderWidth='1px'
                      rounded='lg'
                      borderRadius='lg'
                      bg={'#FFFFFF'}
                      borderColor='#ECEDF0'
                      py='4'
                      px='6'
                      mr='10'
                      whiteSpace={'pre'}
                    >
                      <Flex
                        width={'100%'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Box
                          fontWeight={'semibold'}
                          color={'blue.600'}
                          style={{ cursor: 'pointer' }}
                        >
                          {a.name}
                        </Box>
                        <Box>
                          {a.status == 'accepted' ? (
                            <Badge fontSize={'14px'} colorScheme='green'>
                              Accepted
                            </Badge>
                          ) : (
                            <Badge fontSize={'14px'} colorScheme='red'>
                              Rejected
                            </Badge>
                          )}
                        </Box>
                        <Stack direction='row' spacing={1} align='center'>
                          <Button
                            colorScheme='red'
                            variant='outline'
                            size={'xs'}
                            fontSize={'14px'}
                            px={2}
                            py={1}
                            borderRadius={'5px'}
                          >
                            Reject <MinusIcon ml={'5px'} />
                          </Button>
                          <Button
                            colorScheme='teal'
                            variant='outline'
                            size={'xs'}
                            fontSize={'14px'}
                            px={2}
                            py={1}
                            borderRadius={'5px'}
                          >
                            Accept <CheckIcon ml={'5px'} />
                          </Button>
                        </Stack>
                      </Flex>
                    </Text>
                  );
                })
              ) : (
                <Text
                  width='90%'
                  fontSize='15px'
                  textAlign={'left'}
                  maxW={'7xl'}
                  borderWidth='1px'
                  rounded='lg'
                  borderRadius='lg'
                  bg={'#FFFFFF'}
                  borderColor='#ECEDF0'
                  py='4'
                  px='6'
                  mr='10'
                  whiteSpace={'pre'}
                >
                  No Applicant found
                </Text>
              )}
            </Box>
          </Box>
          <Box width='30%'>
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
                <Text fontSize='13' fontWeight={'bold'}>
                  Experience Requirement
                </Text>
                <SimpleGrid columns={2} spacing={2} mt={'2'}>
                  {data.job_information.job_experience.map((experience) => {
                    return (
                      <Box
                        px={2}
                        py={1}
                        bg='white'
                        boxShadow='md'
                        fontSize={'13px'}
                        borderRadius={'7px'}
                      >
                        <Center>{experience.experince_name}</Center>
                      </Box>
                    );
                  })}
                </SimpleGrid>
                <Text fontSize='13' mt='3' fontWeight={'bold'}>
                  Job Type
                </Text>
                <SimpleGrid columns={2} spacing={2} mt={'2'}>
                  {data.job_information.job_type.map((type) => {
                    return (
                      <Box
                        px={2}
                        py={1}
                        bg='white'
                        boxShadow='md'
                        fontSize={'13px'}
                        borderRadius={'7px'}
                      >
                        <Center>{type.type}</Center>
                      </Box>
                    );
                  })}
                  <Box
                    px={2}
                    py={1}
                    bg='white'
                    boxShadow='md'
                    fontSize={'13px'}
                    borderRadius={'7px'}
                  >
                    <Center>{data.job_information.work_location}</Center>
                  </Box>
                </SimpleGrid>
                <Text fontSize='13' mt='3' fontWeight={'bold'}>
                  Salary
                </Text>
                <Box
                  p='2px'
                  fontSize={'14px'}
                  color={'blue.400'}
                  fontWeight={'semibold'}
                >
                  {data.job_information.salary}
                </Box>
              </Box>
            </Box>
            <Box>
              <Stack direction='row' alignItems='center' mt='3'>
                <Text fontWeight='bold'>Benefits</Text>
              </Stack>
              {data.benefits.map((benefit) => (
                <Box
                  border='1px'
                  rounded='lg'
                  borderColor='#ECEDF0'
                  bg='#F9F9F9'
                  p='2'
                  marginTop={'10px'}
                >
                  <Text
                    fontSize='12px'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                    }}
                  >
                    <Image
                      src={benefit.icon}
                      width={4}
                      height={4}
                      style={{ marginRight: '5px' }}
                    />
                    {benefit.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default JobDetails;
