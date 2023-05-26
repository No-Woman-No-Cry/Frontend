import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JobDetails from '@/Components/screens/employer/my-jobs/jobDetails';
import { GetMyJobDetails } from '@/services/employer/myJobs';

export default function MyJobDetails() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { company_id, job_id } = router.query;

  const fetchJobDetails = async () => {
    if (company_id && job_id) {
      const detail = await GetMyJobDetails(company_id, job_id);
      setData(detail.data.data);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [company_id, job_id]);
  if (!company_id || !job_id) {
    return;
  }
  if (data.length == 0) {
    return;
  }
  return (
    <Fragment>
      <JobDetails
        props={{
          data: data,
          company_id: company_id,
          job_id: job_id,
        }}
      />
    </Fragment>
  );
}
