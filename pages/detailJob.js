// import {
//   Stack,
//   Text,
//   Button,
//   Box,
//   UnorderedList,
//   ListItem,
//   Avatar,
//   Icon,
//   Flex,
//   SimpleGrid,
//   Center,
//   Spacer
// } from "@chakra-ui/react";

// import {
//   ChevronLeftIcon,
//   CheckCircleIcon,
//   LinkIcon,
//   StarIcon,
//   ChatIcon,
//   ChevronRightIcon,
// } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
export default function DetailJob() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/jobs/1')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data, '>>>>>');
        setLoading(false);
      });
  }, []);
  console.log((data,'>>>>>>'));
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log((data,'>>>>>>'));
  return (
    <>
  <div>Data fetching</div>
  <div>{data}</div>
    </>
    // <>
    //   <Stack ml='10' mt='5'>
    //     <Flex
    //       fontSize={"12px"}
    //       fontWeight={"bold"}
    //       color={"#A3A3A3"}
    //       pb={"10px"}
    //     >
    //       <Center>
    //         <Icon as={ChevronLeftIcon} w={"20px"} h={"20px"} /> Back to Homepage
    //       </Center>
    //     </Flex>
    //     <Avatar src='https://bit.ly/broken-link' />
    //     <Text fontSize={"xl"} fontWeight={"semibold"} color={"black"}>
    //       {" "}
    //       Companies name{" "}
    //       <sup>
    //         <Icon as={CheckCircleIcon} color='#009C9A' w='13px' />
    //       </sup>
    //     </Text>
    //     <Text fontSize={"2xl"} fontWeight={"bold"} color={"black"}>
    //       {" "}
    //       Job name{" "}
    //     </Text>
    //   </Stack>
    //   <Stack px='10' mt='10' bg={"white"}>
    //     <Stack
    //       justifyContent='space-between'
    //       direction={{ base: "column", md: "row" }}
    //     >
    //       <Box>
    //         <Box>
    //           <Stack direction='row' alignItems='center' pb='2'>
    //             <Text fontWeight='bold'>Job Description</Text>
    //           </Stack>
    //           <Text
    //             width='90%'
    //             fontSize='13px'
    //             fontWeight='sm'
    //             textAlign={"left"}
    //             maxW={"7xl"}
    //             borderWidth='1px'
    //             rounded='lg'
    //             borderRadius='lg'
    //             borderColor='#ECEDF0'
    //             bg={"#F9F9F9"}
    //             py='4'
    //             px='6'
    //             mr='10'
    //           >
    //             <UnorderedList>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience. By clicking OK or turning an option on in Cookie
    //                 Preferences, you agree to this, as outlined in our Cookie
    //                 Policy. To change preferences or withdraw consent, please
    //                 update your Cookie Preferences.
    //               </ListItem>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience. By clicking OK or turning an option on in Cookie
    //                 Preferences, you agree to this, as outlined in our Cookie
    //                 Policy. To change preferences or withdraw consent, please
    //                 update your Cookie Preferences.
    //               </ListItem>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience. as outlined in our Cookie Policy. To change
    //                 preferences or withdraw consent, please update your Cookie
    //                 Preferences.
    //               </ListItem>
    //             </UnorderedList>
    //           </Text>
    //         </Box>
    //         <Box>
    //           <Stack direction='row' alignItems='center' pb='2' mt='3'>
    //             <Text fontWeight='bold'>Requirements</Text>
    //           </Stack>
    //           <Text
    //             width='90%'
    //             fontSize='13px'
    //             textAlign={"left"}
    //             maxW={"7xl"}
    //             borderWidth='1px'
    //             rounded='lg'
    //             borderRadius='lg'
    //             bg={"#F9F9F9"}
    //             borderColor='#ECEDF0'
    //             py='4'
    //             px='6'
    //             mr='10'
    //           >
    //             <UnorderedList>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience.
    //               </ListItem>
    //               <ListItem>
    //                 To change preferences or withdraw consent, please update
    //                 your Cookie Preferences.
    //               </ListItem>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience. By clicking OK or turning an option on in Cookie
    //                 Preferences, you agree to this, as outlined in our Cookie
    //                 Policy. To change preferences or withdraw consent, please
    //                 update your Cookie Preferences.
    //               </ListItem>
    //               <ListItem>
    //                 We use cookies and similar technologies to help personalise
    //                 content, tailor and measure ads, and provide a better
    //                 experience. By clicking OK or turning an option on in Cookie
    //                 Preferences, you agree to this, as outlined in our Cookie
    //                 Policy. To change preferences or withdraw consent, please
    //                 update your Cookie Preferences.
    //               </ListItem>
    //             </UnorderedList>
    //           </Text>
    //         </Box>
    //         <Box mb='7'>
    //           <Stack direction='row' alignItems='center' pb='2' mt='3'>
    //             <Text fontWeight='bold'>Skills Needed</Text>
    //           </Stack>
    //           <Text
    //             width='90%'
    //             fontSize='13px'
    //             textAlign={"left"}
    //             maxW={"7xl"}
    //             borderWidth='1px'
    //             rounded='lg'
    //             borderRadius='lg'
    //             bg={"#F9F9F9"}
    //             borderColor='#ECEDF0'
    //             py='4'
    //             px='6'
    //             mr='10'
    //           >
    //             <Flex>
    //               <Box boxShadow='md' fontSize={"12px"} rounded={"full"} mr='2'>
    //                 <Center p='2'>Lorem.</Center>
    //               </Box>
    //               <Box boxShadow='md' fontSize={"12px"} rounded={"full"} mr='2'>
    //                 <Center p='2'>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box boxShadow='lg' fontSize={"12px"} rounded={"full"} mr='2'>
    //                 <Center p='2'>ipsum.</Center>
    //               </Box>
    //               <Box boxShadow='lg' fontSize={"12px"} rounded={"full"} mr='2'>
    //                 <Center p='2'>Lorem, ipsum dolor.</Center>
    //               </Box>
    //             </Flex>
    //           </Text>
    //         </Box>
    //         <Box mb='100px'>
    //           <Box
    //             width='90%'
    //             fontSize='13px'
    //             textAlign={"left"}
    //             maxW={"7xl"}
    //             rounded='lg'
    //             borderRadius='lg'
    //             bg={"#F4F2FF"}
    //             py='4'
    //             px='6'
    //             mr='10'
    //           >
    //             <Flex
    //               minWidth='max-content'
    //               alignItems='center'
    //               gap='2'
    //               fontWeight='bold'
    //             >
    //               <Box p='2'>
    //                 <Text>About Companies</Text>
    //               </Box>
    //               <Spacer />
    //               <Center color='#6913D8'>
    //                 Learn More
    //                 <Icon as={ChevronRightIcon} w='20px' h='20px' mt='2px' />
    //               </Center>
    //             </Flex>
    //             <Text fontSize='13px'>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Nesciunt atque reiciendis ut adipisci officia commodi quae,
    //               sapiente voluptates, labore quisquam ratione itaque rem
    //               dignissimos vero accusamus voluptate! Voluptas, magnam
    //               officiis. Lorem ipsum dolor sit amet consectetur adipisicing
    //               elit. Natus, nobis!
    //             </Text>
    //             <Flex fontSize='12px'>
    //               <Box m='4'>
    //                 <Text>Industry</Text>
    //                 <Text fontWeight='bold'>Lorem, ipsum.</Text>
    //               </Box>
    //               <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
    //               <Box m='4'>
    //                 <Text>Location</Text>
    //                 <Text fontWeight='bold'>Lorem, ipsum.lorem2</Text>
    //               </Box>
    //               <Center w='1px' h='5' mt='6' ml='5' bg='#D0D1D3' />
    //               <Box m='4'>
    //                 <Text>Company Size</Text>
    //                 <Text fontWeight='bold'>Lorem, ipsum.</Text>
    //               </Box>
    //             </Flex>
    //           </Box>
    //         </Box>
    //       </Box>
    //       <Box width='40%'>
    //         <Box>
    //           <Stack direction='row' alignItems='center' pb='2'>
    //             <Text fontWeight='bold'>Apply as Priority</Text>
    //           </Stack>
    //           <Box
    //             border='1px'
    //             rounded='lg'
    //             borderColor='#ECEDF0'
    //             bg='#F9F9F9'
    //             p='5'
    //           >
    //             <Text fontSize='13px'>
    //               We use cookies and similar technologies to help personalise
    //               content, tailor and measure ads
    //             </Text>
    //             <Button
    //               colorScheme='messenger'
    //               mt='3'
    //               size='sm'
    //               rounded={"2xl"}
    //               px='10'
    //               fontSize={"12px"}
    //             >
    //               Easy Apply
    //             </Button>
    //             <Icon
    //               as={StarIcon}
    //               color={"blue"}
    //               mx='2'
    //               w='30px'
    //               h='30px'
    //               rounded='full'
    //               p='2'
    //               mt='3'
    //               boxShadow='inner'
    //             />
    //             <Icon
    //               as={LinkIcon}
    //               color={"blue"}
    //               w='30px'
    //               h='30px'
    //               rounded='full'
    //               p='2'
    //               mt='3'
    //               boxShadow='inner'
    //             />
    //           </Box>
    //         </Box>
    //         <Box>
    //           <Stack direction='row' alignItems='center' pb='2' mt='3'>
    //             <Text fontWeight='bold'>Job Information</Text>
    //           </Stack>
    //           <Box
    //             border='1px'
    //             rounded='lg'
    //             borderColor='#ECEDF0'
    //             bg='#F9F9F9'
    //             p='5'
    //           >
    //             <Text fontSize='13' fontWeight={"bold"}>
    //               Experience Requirement
    //             </Text>
    //             <SimpleGrid columns={2} spacing={2} mt={"2"}>
    //               <Box
    //                 p='2px'
    //                 bg='white'
    //                 boxShadow='md'
    //                 fontSize={"12px"}
    //                 rounded={"md"}
    //               >
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //             </SimpleGrid>
    //             <Text fontSize='13' mt='3' fontWeight={"bold"}>
    //               Job Type
    //             </Text>
    //             <SimpleGrid columns={2} spacing={2} mt={"2"}>
    //               <Box
    //                 p='2px'
    //                 bg='white'
    //                 boxShadow='md'
    //                 fontSize={"12px"}
    //                 rounded={"md"}
    //               >
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //             </SimpleGrid>
    //             <Text fontSize='13' mt='3' fontWeight={"bold"}>
    //               Salery
    //             </Text>
    //             <SimpleGrid columns={2} spacing={2} mt={"2"}>
    //               <Box
    //                 p='2px'
    //                 bg='white'
    //                 boxShadow='md'
    //                 fontSize={"12px"}
    //                 rounded={"md"}
    //               >
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //             </SimpleGrid>
    //             <Text fontSize='13' mt='3' fontWeight={"bold"}>
    //               Location
    //             </Text>
    //             <SimpleGrid columns={2} spacing={2} mt={"2"}>
    //               <Box
    //                 p='2px'
    //                 bg='white'
    //                 boxShadow='md'
    //                 fontSize={"12px"}
    //                 rounded={"md"}
    //               >
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //               <Box p='2px' boxShadow='md' fontSize={"12px"} rounded={"md"}>
    //                 <Center>Lorem, ipsum.</Center>
    //               </Box>
    //             </SimpleGrid>
    //           </Box>
    //         </Box>
    //         <Box>
    //           <Stack direction='row' alignItems='center' pb='2' mt='3'>
    //             <Text fontWeight='bold'>Benefits</Text>
    //           </Stack>
    //           <Box
    //             border='1px'
    //             rounded='lg'
    //             borderColor='#ECEDF0'
    //             bg='#F9F9F9'
    //             p='5'
    //           >
    //             <Text fontSize='12px'>
    //               <Icon as={ChatIcon} /> Others
    //             </Text>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Stack>
    //   </Stack>
    // </>
  );
}
