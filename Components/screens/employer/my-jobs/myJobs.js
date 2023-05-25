import React, { useEffect, useState } from 'react';
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
  Icon,
  MenuButton,
  MenuList,
  Checkbox,
  MenuItem,
  Box,
  Flex,
} from '@chakra-ui/react';
import { colors } from '@/Components/assets/style';
import { FaPlusCircle } from 'react-icons/fa';

const MyJobs = ({ props }) => {
  const [data, setData] = useState(props);
  return (
    <Container maxW={'5xl'} px={0}>
      <Grid>
        <GridItem marginBottom={5}>
          <Flex
            width={'full'}
            justifyContent={'space-between'}
            borderBottom={'1px'}
            borderColor={'#EFEFEF'}
            paddingBottom={3}
            paddingTop={3}
            alignSelf={'center'}
          >
            <Text
              fontWeight={'bold'}
              fontSize={'30'}
              noOfLines={1}
              marginBottom={4}
              color={colors.headline}
            >
              My Jobs
            </Text>
            <Button
              as={'a'}
              href={`/employer/my-jobs/post-job`}
              backgroundColor={colors.cardBg}
              backdropBlur={true}
              fontSize={'17'}
              p={5}
              boxShadow={'md'}
              color={'#FFFFFF'}
              leftIcon={<Icon as={FaPlusCircle} />}
            >
              Post Jobs
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      {data.data.length > 0 ? (
        <Grid templateColumns='repeat(4, 1fr)' gap={6} my={2}>
          {data.data.map((d) => (
            <GridItem key={d.id}>
              <Box
                as='a'
                href={`/employer/my-jobs/${props.company_id}/${d.job_id}`}
              >
                <Card
                  align='start'
                  border={'1px'}
                  borderColor={'#EFEFEF'}
                  p='6'
                  rounded='sm'
                  bg='white'
                >
                  <Text fontWeight={'bold'} fontSize={'14'} noOfLines={1}>
                    {d.job_title}
                  </Text>
                  <Text fontWeight={'light'} fontSize={'18'} noOfLines={1}>
                    {' '}
                    {d.job_category}
                  </Text>
                </Card>
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid>
          <GridItem>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Text>Job is empty!</Text>
            </Flex>
          </GridItem>
        </Grid>
      )}
    </Container>
  );
};

export default MyJobs;
