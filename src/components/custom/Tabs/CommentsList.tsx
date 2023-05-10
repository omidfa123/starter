import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CommentIcon, EditIcon } from 'components/common/Icons';
import Pagination from '../Pagination';
import { CommentTable, AnsCommentTable } from '../Tables/CommentTable';

export default function OrderList() {
  return (
    <Box h="max-content">
      {/* <Center
        as="p"
        textStyle="medium24"
        color="disableUl"
        textAlign="center"
        w="full"
        flex="1"
      >
        هنوز هیچ نظری ثبت نشده است
      </Center> */}
      <Tabs
        isFitted
        isLazy
        lazyBehavior="keepMounted"
        variant="solid-rounded"
        bgColor="#fff"
        p={10}
        rounded={32}
      >
        <TabList
          sx={{
            '& button': {
              fontSize: '20px',
              fontWeight: '500',
              rounded: '16px',
              color: 'text',
              h: '56px',
              mb: '24px',
            },
          }}
          gap={4}
        >
          <Tab
            bgColor="#F1EDFF"
            _selected={{ bgColor: 'secondary.500', color: 'white' }}
          >
            <CommentIcon ml={2} />
            نظرات داده شده
          </Tab>
          <Tab
            bgColor="#F1EDFF"
            _selected={{ bgColor: 'secondary.500', color: 'white' }}
          >
            <EditIcon ml={2} />
            پاسخ های داده شده
          </Tab>
        </TabList>

        <TabPanels bg="white" roundedBottom={32}>
          <TabPanel p="0">
            <CommentTable />
            <Pagination />
          </TabPanel>
          <TabPanel p="0">
            <AnsCommentTable />
            <Pagination />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
