import React from 'react';
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
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { MdTimelapse } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const Joblist = () => {
  return (
    <Container maxW={'1440px'} px={0} mx={'160px'}>
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
        <Box
          w={'160px'}
          h={'80px'}
          bgGradient='linear(to-l, #103783, #42047e)'
          color={'white'}
          p={3}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Center fontSize={'1rem'}>Data & Product Management</Center>
        </Box>
        <Box
          w={'160px'}
          h={'80px'}
          bgGradient='linear(to-l, #432371, #faae7b)'
          color={'white'}
          p={3}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Center fontSize={'1rem'}>Data & Product Management</Center>
        </Box>
        <Box
          w={'160px'}
          h={'80px'}
          bgGradient='linear(to-l, #42047e, #07f49e)'
          color={'white'}
          p={3}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Center fontSize={'1rem'}>Data & Product Management</Center>
        </Box>
        <Box
          w={'160px'}
          h={'80px'}
          bgGradient='linear(to-l, #3da9fc, #ef4565)'
          color={'white'}
          p={3}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Center fontSize={'1rem'}>Data & Product Management</Center>
        </Box>
      </Stack>

      <Grid templateColumns='repeat(3, 1fr)' gap={6} my={2}>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'secondaryBg'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
              <text>Location</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Joblist;
