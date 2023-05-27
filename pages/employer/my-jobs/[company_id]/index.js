/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import MyJobs from '@/Components/screens/employer/my-jobs/myJobs';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetMyJobs } from '@/services/employer/myJobs';
import { Button, Flex, Text } from '@chakra-ui/react';

// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function myJobs() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { company_id } = router.query;

  useEffect(() => {
    if (company_id) {
      const getMyJobs = async () => {
        const res = await GetMyJobs(company_id);
        if (res) {
          setData(res.data.data);
        }
      };
      getMyJobs();
    }
  }, [company_id]);
  if (!company_id) {
    return;
  }

  if (data.length === 0) {
    return (
      <Flex
        justifyContent={'center'}
        direction={'column'}
        height={'100vh'}
        gap={3}
        alignItems={'center'}
      >
        <Text>Job is empty!</Text>
        <Button
          colorScheme={'blue'}
          onClick={() => router.push('/employer/my-jobs/post-job')}
        >
          Lets Post Your Job!
        </Button>
      </Flex>
    );
  }

  return (
    <Fragment>
      <MyJobs
        props={{
          data: data,
          company_id: company_id,
        }}
      />
    </Fragment>
  );
}
