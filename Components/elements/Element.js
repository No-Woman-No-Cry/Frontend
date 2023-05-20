import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const EmployeeList = ({ imgs }) => {
  return (
    // <AnimatePresence
    //   initial={false}
    //   as={motion.div}
    //   variants={variants}
    //   animate='visible'
    //   transition={{ duration: 2 }}
    // >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
        }}
      >
        <Image
          objectFit='cover'
          src={imgs}
          alt=''
          width={360}
          height={0}
          style={{ borderRadius: '10px' }}
        />
      </Box>
    // </AnimatePresence> 
  );
};
