import React from 'react';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpoint,
} from '@chakra-ui/react';
import styled from 'styled-components';

const StyledTabList = styled(TabList)`
  //   .chakra-tabs__tab {
  //     color: red;
  //     font-weight: bold;
  //   }

  .chakra-tabs__tab .css-1pjn7in:active {
    fontweight: bold;
    color: yellow;
  }
`;

const Profile = () => {
  const breakpoint = useBreakpoint();

  return (
    <Box>
      <Tabs
        orientation={breakpoint === 'sm' ? 'horizontal' : 'vertical'}
        variant={breakpoint === 'sm' ? 'line' : 'enclosed-colored'}
        isFitted={true}
      >
        <TabList
          sx={{
            '& .css-1pjn7in[aria-selected=true]:focus':
              {
                '--tabs-color': '#f3f',
                borderColor: 'currentColor',
                background: 'green'
              },
          }}
        >
          <StyledTabList>
            <Tab>My Career</Tab>
            <Tab>Basic Info</Tab>
            <Tab>CV & Portfolio</Tab>
            <Tab>My Application</Tab>
            <Tab>Save Jobs</Tab>
            <Tab>Change Password</Tab>
          </StyledTabList>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box p={4}>Content for My Career tab</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for Basic Info tab</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for CV & Portfolio tab</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for My Application tab</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for Save Jobs tab</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for Change Password tab</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;
