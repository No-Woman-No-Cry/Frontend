/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import MyJobs from '@/Components/screens/employer/my-jobs/myJobs';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetMyJobs } from '@/services/employer/myJobs';

// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function myJobs() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { company_id } = router.query;

  useEffect(() => {
    if (company_id) {
      const getMyJobs = async () => {
        const res = await GetMyJobs(company_id);
        setData(res.data.data);
      };
      getMyJobs();
    }
  }, [company_id]);
  if (!company_id) {
    return;
  }
  if (data.length == 0) {
    return;
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
