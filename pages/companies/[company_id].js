import React, { Fragment } from 'react';
import CompanyDetails from '@/Components/screens/company/companyDetail';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getCompanyDetails } from '@/services/jobSeeker/companiesList';

// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function Companies() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { company_id } = router.query;

  useEffect(() => {
    if (company_id) {
      const getDetail = async () => {
        const detail = await getCompanyDetails(company_id);
        setData(detail.data.data);
      };
      getDetail(company_id);
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
      <CompanyDetails props={data} />
    </Fragment>
  );
}
