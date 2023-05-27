import { colors, headingText, inputText, sectionText } from '@/Components/assets/style';
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const AddEducation = ({isOpen, onClose, handleSubmit, userEdu, setUserEdu}) => {
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader sx={{ ...headingText }}>Add your education</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={3}>
                <FormControl>
                  <FormLabel sx={{ ...sectionText }}>
                    Nama Universitas
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Universitas'
                    onChange={(e) =>
                      setUserEdu({
                        ...userEdu,
                        name: e.currentTarget.value,
                      })
                    }
                    sx={{
                        ...inputText,
                        borderColor: colors.grey[300],
                        '&: hover': {
                          background: '#FBFAFA',
                          outline: '0.5px solid #3182CE',
                          outlineOffset: 0,
                        },
                        '&: focus': {
                          outlineOffset: 0,
                          outlineWidth: 0,
                        },
                      }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ ...sectionText }}>Jurusan</FormLabel>
                  <Input
                    type='text'
                    placeholder='Jurusan'
                    onChange={(e) =>
                      setUserEdu({
                        ...userEdu,
                        major: e.currentTarget.value,
                      })
                    }
                    sx={{
                      ...inputText,
                      borderColor: colors.grey[300],
                      '&: hover': {
                        background: '#FBFAFA',
                        outline: '0.5px solid #3182CE',
                        outlineOffset: 0,
                      },
                      '&: focus': {
                        outlineOffset: 0,
                        outlineWidth: 0,
                      },
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ ...sectionText }}>Gelar</FormLabel>
                  <Input
                    type='text'
                    placeholder='Gelar'
                    onChange={(e) =>
                      setUserEdu({
                        ...userEdu,
                        degree: e.currentTarget.value,
                      })
                    }
                    sx={{
                      ...inputText,
                      borderColor: colors.grey[300],
                      '&: hover': {
                        background: '#FBFAFA',
                        outline: '0.5px solid #3182CE',
                        outlineOffset: 0,
                      },
                      '&: focus': {
                        outlineOffset: 0,
                        outlineWidth: 0,
                      },
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={{ ...sectionText }}>Lulus</FormLabel>
                  <Input
                    type='date'
                    placeholder='End'
                    onChange={(e) =>
                        setUserEdu({
                          ...userEdu,
                          end: e.currentTarget.value,
                        })
                      }
                    sx={{
                      ...inputText,
                      borderColor: colors.grey[300],
                      '&: hover': {
                        background: '#FBFAFA',
                        outline: '0.5px solid #3182CE',
                        outlineOffset: 0,
                      },
                      '&: focus': {
                        outlineOffset: 0,
                        outlineWidth: 0,
                      },
                    }}
                  />
                </FormControl>
                <Box
                  width='100%'
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    paddingTop: 2,
                    columnGap: 4,
                  }}
                >
                  <Button
                    colorScheme='blue'
                    type='submit'
                    variant='solid'
                    sx={{ borderRadius: '25px' }}
                  >
                    <Text sx={{ ...sectionText, color: colors.primaryBg }}>
                      Submit
                    </Text>
                  </Button>
                </Box>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddEducation;
