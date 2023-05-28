import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/utils/UserContext';
import { Box } from '@chakra-ui/react';
import JobSeekerNavbar from '@/Components/elements/job-seeker/JobSeekerNavbar';
import EmployerNavbar from '@/Components/elements/employer/EmployerNavbar';

export default function Navbar() {
  const localData = useContext(UserContext);
  return (
    <Box bg='##fffffe'>
      {localData.user ? <JobSeekerNavbar /> : <EmployerNavbar />}
    </Box>
  );
}
