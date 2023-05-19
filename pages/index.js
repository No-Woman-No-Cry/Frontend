import React, { Fragment } from 'react';
import Dashboard from '@/Components/screens/home/Dashboard';

import { Box } from '@chakra-ui/react';


// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

export default function Home() {
  return (
    <Fragment>
        <Dashboard />
    </Fragment>
  );
}
