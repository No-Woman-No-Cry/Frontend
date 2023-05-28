import React, { useContext, useEffect, useState } from 'react';
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
import { GetHistory } from '@/services/jobSeeker/historyPage';
import { useRouter } from 'next/router';
import { UserContext } from '@/utils/UserContext';
const ListHistory = () => {
  const [history, setHistory] = useState([]);
  const router = useRouter();
  const { profile_id } = useContext(UserContext).user;
  const getHistory = async () => {
    if (profile_id) {
      const history = await GetHistory(profile_id);
      setHistory(history.data.data);
    }
  };
  useEffect(() => {
    getHistory();
  }, [profile_id]);

  if (!profile_id) {
    return;
  }
  if (history.length === 0) {
    return;
  }
  return (
    <Container maxW={'1440px'} px={0}>
      <Text fontSize={'2rem'} fontWeight={'bold'}>
        Your Submitted Application
      </Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6} my={2}>
        {history.map((his) => (
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
                <Box>
                  <Heading size='sm'>{his.company}</Heading>
                  <Text noOfLines={1}>{his.position}</Text>
                </Box>
              </Flex>
              <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
              />
            </Flex>
            <Box
              p={3}
              my={2}
              bg={'secondaryBg'}
              borderWidth={'1px'}
              borderRadius={'xl'}
            >
              <Flex>
                <Text>Application Status : {his.status}</Text>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ListHistory;
