import React, { Fragment } from 'react';
import JobDetail from '@/Components/screens/job/jobDetail';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GetDetail } from '@/services/jobSeeker/detailJobPage';

export default function Jobs() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const detail = await GetDetail(id);
        setData(detail.data.data);
      };
      getDetail(id);
    }
  }, [id]);
  if (!id) {
    return;
  }
  if (data.length == 0) {
    return;
  }
  console.log(data);
  return (
    <Fragment>
      <JobDetail props={data} />
    </Fragment>
  );
}
