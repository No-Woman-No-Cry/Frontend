import React from 'react';
import {
  Grid,
  Container,
  GridItem,
  Box,
  Stack,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { MdTimelapse } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
const ListHistory = () => {
  return (
    <Container maxW={'1440px'} px={0}>
      <Text fontSize={'2rem'} fontWeight={'bold'}>
        Your Submitted Application
      </Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6} my={2}>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          h={'168px'}
          p={3}
          my={2}
          bg={'white'}
          borderWidth={'1px'}
          borderRadius={'xl'}
        >
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar
                name='PT. Global Jet Express'
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
              />

              <Box>
                <Heading size='sm'>PT. Global Jet Express</Heading>
                <Text noOfLines={1}>
                  Transportation, Logistics, Supply Chain And Storage
                </Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              // icon={<BsThreeDotsVertical />}
            />
          </Flex>
          <Flex direction={'row'}>
            <Stack direction={'row'} align={'center'} p={1}>
              <Icon as={GoLocation} />
              <text>Location</text>
            </Stack>

            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={MdTimelapse} />
              <text>Full-time</text>
            </Stack>
            <Stack direction={'row'} align={'center'} px={1}>
              <Icon as={FaRegMoneyBillAlt} />
              <text>Negotiable</text>
            </Stack>
          </Flex>
          <Box
            p={3}
            my={2}
            bg={'secondaryBg'}
            borderWidth={'1px'}
            borderRadius={'xl'}
          >
            <Flex>
              <Text>Application Status :</Text>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      ;
    </Container>
  );
};

export default ListHistory;
