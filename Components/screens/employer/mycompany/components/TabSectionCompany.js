import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { colors, sectionText } from '@/Components/assets/style';
import BasicInformation from './BasicInformation';
import MyBenefit from './MyBenefit';
// import MyApplication from './MyApplication';

const TabSection = ({ isLowerThanLg }) => {
  return (
    <Box sx={{}}>
      <Tabs
        orientation={!isLowerThanLg ? 'horizontal' : 'vertical'}
        variant={!isLowerThanLg ? 'line' : 'enclosed-colored'}
      >
        <TabList
          overflowY={!isLowerThanLg && 'hidden'}
          sx={{
            width: isLowerThanLg && '200px',
            marginTop: !isLowerThanLg && '1rem',
            borderBottom: 'none',
            gap: '1px',
            '& .css-8qbmp4': {
              background: colors.primaryBg,
            },
            '& .css-8qbmp4[aria-selected=true], .css-8qbmp4[data-selected]': {
              background: colors.secondaryBg,
              border: 'none',
              borderColor: 'none',
            },
            '& .css-1qzt20n[aria-selected=true], .css-1qzt20n[data-selected]': {
              borderColor: colors.stroke,
            },
            '& .css-1qzt20n[aria-selected=true], .css-1qzt20n[data-selected]': {
              background: colors.secondaryBg,
              borderRadius: '8px 8px 0 0',
              border: 'none',
            },
          }}
        >
          <Tab fontSize='sm' justifyContent='left' sx={{ ...sectionText }}>
            Basic Information
          </Tab>
          <Tab fontSize='sm' justifyContent='left' sx={{ ...sectionText }}>
            My Benefits
          </Tab>
          <Tab fontSize='sm' justifyContent='left' sx={{ ...sectionText }}>
            Category Industry
          </Tab>
        </TabList>

        <Box
          sx={{
            flex: 1,
            border: `1px solid ${colors.stroke}`,
            borderRadius: isLowerThanLg ? '0 8px 8px 0' : '0 0 8px 8px',
            padding: 1,
          }}
        >
          <TabPanels>
            <TabPanel>
              <BasicInformation />
            </TabPanel>
            <TabPanel>
              <MyBenefit />
            </TabPanel>
            {/* <TabPanel>
              <ChangePassword />
            </TabPanel> */}
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default TabSection;
