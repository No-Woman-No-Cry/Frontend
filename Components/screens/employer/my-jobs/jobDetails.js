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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
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
import {
  GetApplicantDetail,
  updateApplicantStatus as updateApplicantStatusService,
} from '@/services/employer/myJobs';
import { FaCircle, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';

const JobDetails = ({ props }) => {
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const [companyId, setCompanyId] = useState(props.company_id);
  const [profileId, setProfileId] = useState('');
  const [jobId, setJobId] = useState(props.job_id);
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Fungsi untuk membuka modal dan mengatur data modal
  const openModal = async (id) => {
    setProfileId(id);
    const getApplicant = await GetApplicantDetail(id);
    setModalData(getApplicant.data.data);
    setIsOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsOpen(false);
  };
  //
  function formatDate(text) {
    const date = new Date(text);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }
  const followUpApplicant = async (id, status) => {
    const updateApplicantStatus = await updateApplicantStatusService(
      jobId,
      id,
      status
    );
    if (updateApplicantStatus) {
      toast.success('Applicant status updated!', {
        duration: 3000,
      });
    } else {
      toast.error('Applicant status cant updated!', {
        duration: 3000,
      });
    }
    setIsOpen(false);
    router.reload();
  };
  return (
    <Container maxW={'5xl'}>
      <Stack mt='5'>
        <Flex
          fontSize={'12px'}
          fontWeight={'bold'}
          color={'#A3A3A3'}
          pb={'10px'}
          style={{ cursor: 'pointer' }}
          onClick={() => router.back()}
        >
          <Center>
            <Icon as={ChevronLeftIcon} w={'20px'} h={'20px'} /> Back to My Jobs
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
                      mt={2}
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
                          onClick={() => openModal(a.job_seeker_id)}
                        >
                          {a.name}
                        </Box>
                        <Box>
                          {a.status == 'accepted' ? (
                            <Badge fontSize={'14px'} colorScheme='blue'>
                              Accepted
                            </Badge>
                          ) : (
                            <Badge fontSize={'14px'} colorScheme='red'>
                              Rejected
                            </Badge>
                          )}
                        </Box>
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
                        <Center>
                          {experience.experince_name == 'fresh_graduate'
                            ? 'fresh graduate'
                            : experience.experince_name}
                        </Center>
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
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
        <ModalOverlay />
        <ModalContent>
          {/* Header Modal */}
          <ModalHeader>Applicant Detail</ModalHeader>
          <ModalCloseButton />

          {/* Body Modal */}
          <ModalBody>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Name</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Text fontWeight={'hairline'}>{modalData?.name}</Text>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Hedline</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Text fontWeight={'hairline'}>
                    {modalData?.job_seeker_headline}
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Email</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Text fontWeight={'hairline'}>{modalData?.email}</Text>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Whatsapp Number</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Text fontWeight={'hairline'}>
                    {modalData?.whatsapp_number}
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Linkedin</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Link
                    href={modalData?.linkedin_url}
                    isExternal
                    target={'_blank'}
                  >
                    <Badge colorScheme={'blue'} as={'href'}>
                      Linkedin Link
                    </Badge>
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Text fontWeight={'semibold'}>Curiculum Vitae</Text>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Flex gap={3} mt={1} alignItems={'center'}>
                  <Link href={modalData?.cv_url} isExternal target={'_blank'}>
                    <Badge colorScheme={'orange'} as={'href'}>
                      CV Link
                    </Badge>
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Box mt={3}>
              <Box borderBottom={'1px'} pb={2} borderColor={'gray.200'}>
                <Text fontWeight={'semibold'}>Education Background</Text>
                <List spacing={3}>
                  {modalData?.educations.map((education) => {
                    return (
                      <UnorderedList>
                        <ListItem>
                          {education.degree}
                          <List ml={4}>
                            <ListItem>Name : {education.name}</ListItem>
                            <ListItem>Major : {education.major}</ListItem>
                            <ListItem>
                              Date : {formatDate(education.start)} until{' '}
                              {formatDate(education.end)}
                            </ListItem>
                          </List>
                        </ListItem>
                      </UnorderedList>
                    );
                  })}
                </List>
              </Box>
            </Box>
            <Flex
              gap={3}
              justifyContent={'end'}
              mt={3}
              spacing={4}
              align='center'
            >
              <Button
                onClick={() => followUpApplicant(profileId, 'rejected')}
                colorScheme='red'
                variant='outline'
                rightIcon={<MinusIcon />}
              >
                Reject
              </Button>
              <Button
                onClick={() => followUpApplicant(profileId, 'accepted')}
                colorScheme='teal'
                variant='solid'
                rightIcon={<CheckIcon />}
              >
                Approve
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Toaster />
    </Container>
  );
};

export default JobDetails;
