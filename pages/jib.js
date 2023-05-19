import React, { Fragment } from 'react';
import Dashboard from '@/Components/screens/home/Dashboard';
import Joblist from '@/Components/screens/job/Joblist';

// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function jib() {
  return (
    <Fragment>
      <Joblist />
    </Fragment>
  );
}
