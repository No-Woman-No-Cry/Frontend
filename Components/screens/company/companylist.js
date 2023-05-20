import React from 'react';
import {
  Text,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Image,
  Container,
  Menu,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  MenuButton,
  MenuList,
  Checkbox,
  MenuItem,
} from '@chakra-ui/react';

const Companylist = () => {
  return (
    <Container maxW={'1440px'} px={0}>
      <Stack spacing={4} direction={'row'}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            {/* <PhoneIcon color='gray.300' /> */}
          </InputLeftElement>
          <Input type='text' placeholder='Search Job' />
        </InputGroup>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Actions
          </MenuButton>
          <MenuList>
            <Text px={2}>Job Type</Text>
            <MenuItem>
              <Checkbox defaultChecked>Checkbox</Checkbox>
            </MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Actions
          </MenuButton>
          <MenuList>
            <Text px={2}>Job Type</Text>
            <MenuItem>
              <Checkbox defaultChecked>Checkbox</Checkbox>
            </MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Actions
          </MenuButton>
          <MenuList>
            <Text px={2}>Job Type</Text>
            <MenuItem>
              <Checkbox defaultChecked>Checkbox</Checkbox>
            </MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Actions
          </MenuButton>
          <MenuList>
            <Text px={2}>Job Type</Text>
            <MenuItem>
              <Checkbox defaultChecked>Checkbox</Checkbox>
            </MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Stack>

      <Grid templateColumns='repeat(4, 1fr)' gap={6} my={2}>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card align='center' boxShadow='lg' p='6' rounded='md' bg='white'>
            <CardHeader>
              <Image
                src='https://cdn.sejutacita.id/645c95c42275c500133a9438/JobPortalCompanyLogo/a83e4496-723d-48d0-aa51-b06720e077bc.jpg'
                alt='Dan Abramov'
                boxSize={'100px'}
              />
            </CardHeader>
            <Text fontWeight={'bold'}>PT. Global Jet Express</Text>
            <Text fontWeight={'light'} noOfLines={1}>
              {' '}
              Transportation, Logistics, Supply Chain And Storage
            </Text>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Companylist;
