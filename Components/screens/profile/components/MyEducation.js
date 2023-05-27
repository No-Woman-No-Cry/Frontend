import {
  colors,
  columnContainer,
  headingText,
  inputText,
  regularText,
  rowContainer,
  sectionText,
  smallText,
} from '@/Components/assets/style';
import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import AddEducation from './education/AddEducation';
import { CreateEducation } from '@/services/jobSeeker/profile';
import { UserContext } from '@/utils/UserContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const MyEducation = ({ userEducation }) => {
  const [userEdu, setUserEdu] = useState({
    name: '',
    major: '',
    degree: '',
    end: '',
  });

  const router = useRouter();
  const { user } = useContext(UserContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleSubmit(e) {
    e.preventDefault();
    const { profile_id } = user;

    const response = await CreateEducation(parseInt(profile_id), userEdu);

    if (response && response.data) {
      toast.info('Berhasil tambah education info');

      setTimeout(() => {
        router.refresh();
      }, 2000);
    }
  }

  function formatDate(isDate) {
    const date = new Date(isDate);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', options);

    return formattedDate;
  }

  return (
    <Box width='100%'>
      <Box sx={{ ...rowContainer }}>
        <Text
          borderBlockEnd={`1px solid ${colors.grey[400]}`}
          paddingBottom='0.75rem'
          sx={{ ...headingText }}
        >
          My Education
        </Text>
        <IconButton
          variant='outline'
          color={colors.highlight}
          fill={colors.grey[900]}
          aria-label='Add new Education'
          sx={{ border: '1px solid' }}
          onClick={onOpen}
          icon={<AddIcon />}
        />
      </Box>

      <SimpleGrid columns={2} spacing={5} paddingTop={8}>
        {userEducation &&
          userEducation.map((edu, index) => (
            <Box
              key={index}
              sx={{
                background: colors.grey[100],
                border: `2px solid ${colors.highlight}`,
                borderRadius: '4px',
                padding: 1.5,
              }}
            >
              <Box sx={{ ...columnContainer, gap: 2 }}>
                <Box>
                  <Text
                    sx={{
                      ...regularText,
                      color: colors.headline,
                      fontWeight: 600,
                    }}
                  >
                    Universitas:
                  </Text>
                  <Text sx={{ ...smallText, fontWeight: 500 }}>{edu.name}</Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      ...regularText,
                      color: colors.headline,
                      fontWeight: 600,
                    }}
                  >
                    Jurusan:
                  </Text>
                  <Text sx={{ ...smallText, fontWeight: 500 }}>
                    {edu.major}
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      ...regularText,
                      color: colors.headline,
                      fontWeight: 600,
                    }}
                  >
                    Gelar:
                  </Text>
                  <Text sx={{ ...smallText, fontWeight: 500 }}>
                    {edu.degree}
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      ...regularText,
                      color: colors.headline,
                      fontWeight: 600,
                    }}
                  >
                    Lulus:
                  </Text>
                  <Text sx={{ ...smallText, fontWeight: 500 }}>
                    {formatDate(edu.end)}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      <AddEducation
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        setUserEdu={setUserEdu}
        userEdu={userEdu}
      />
    </Box>
  );
};

export default MyEducation;
